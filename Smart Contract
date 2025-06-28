// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";

/**
 * @title OssuaryRelics
 * @dev ERC-1155 contract for mutable NFTs with AI “ritual” evolution and royalty support.
 */
contract OssuaryRelics is ERC1155, Ownable, ERC2981 {
    string public name = "Ossuary Relics";
    string public symbol = "OSSRY";
    uint256 public nextTokenId = 1;

    // Track token URIs and creator addresses
    mapping(uint256 => string) public tokenURIs;
    mapping(uint256 => address) public creators;

    // Events
    event RelicMinted(address indexed to, uint256 indexed tokenId, uint256 amount, string uri);
    event RelicEvolved(uint256 indexed tokenId, string newUri);

    constructor(
        uint96 defaultRoyaltyFee // e.g., 500 = 5% (using 2 decimals)
    ) ERC1155("") {
        _setDefaultRoyalty(msg.sender, defaultRoyaltyFee);
    }

    /**
     * @notice Mint a new Relic.
     * @param _uri The metadata URI for the new token.
     * @param _amount The number of tokens to mint.
     */
    function mint(string memory _uri, uint256 _amount) external {
        uint256 tokenId = nextTokenId++;
        _mint(msg.sender, tokenId, _amount, "");
        tokenURIs[tokenId] = _uri;
        creators[tokenId] = msg.sender;

        emit RelicMinted(msg.sender, tokenId, _amount, _uri);
    }

    /**
     * @notice Evolve (mutate) a Relic’s metadata URI.
     * Can be called by the relic creator or contract owner.
     */
    function evolveRelic(uint256 tokenId, string memory _newUri) external {
        require(msg.sender == creators[tokenId] || msg.sender == owner(), "Not authorized");
        tokenURIs[tokenId] = _newUri;

        emit RelicEvolved(tokenId, _newUri);
    }

    /**
     * @notice Set royalty for a specific token.
     */
    function setTokenRoyalty(uint256 tokenId, address receiver, uint96 feeNumerator) external onlyOwner {
        _setTokenRoyalty(tokenId, receiver, feeNumerator);
    }

    /**
     * @notice Set metadata URI for a token (internal logic, not public).
     */
    function setTokenURI(uint256 tokenId, string memory _uri) external onlyOwner {
        tokenURIs[tokenId] = _uri;
    }

    /**
     * @dev Returns the URI for a given token ID.
     */
    function uri(uint256 tokenId) public view override returns (string memory) {
        return tokenURIs[tokenId];
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}