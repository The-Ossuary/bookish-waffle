// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";

contract TheOssuary is ERC1155, Ownable, VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;
    uint64 s_subscriptionId;
    bytes32 keyHash;
    uint32 callbackGasLimit = 100000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;

    mapping(uint256 => Ritual) public rituals;
    uint256 public ritualCounter;

    mapping(address => uint256[]) public playerLoreFragments;

    struct Ritual {
        string ritualType;
        string alignment;
        uint256 stakeAmount;
        uint256 rewardId;
        address summoner;
    }

    mapping(uint256 => uint256) public requestIdToRitualId;

    address public multisig;

    constructor(
        address vrfCoordinator,
        uint64 subscriptionId,
        bytes32 _keyHash,
        address _multisig
    ) ERC1155("ipfs://QmbasicCID/{id}.json") VRFConsumerBaseV2(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_subscriptionId = subscriptionId;
        keyHash = _keyHash;
        multisig = _multisig;
    }

    event RitualPerformed(address indexed summoner, uint256 ritualId, uint256 rewardId);

    function performRitual(
        string memory ritualType,
        string memory alignment,
        uint256 stakeAmount,
        uint256 rewardId,
        address summoner
    ) public onlyOwner {
        rituals[ritualCounter] = Ritual(
            ritualType,
            alignment,
            stakeAmount,
            rewardId,
            summoner
        );
        uint256 requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        requestIdToRitualId[requestId] = ritualCounter;
        ritualCounter++;
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal override {
        uint256 ritualId = requestIdToRitualId[requestId];
        Ritual memory ritual = rituals[ritualId];
        uint256 randomResult = randomWords[0] % 100;
        if (randomResult > 50) {
            _mint(ritual.summoner, ritual.rewardId, 1, "");
            playerLoreFragments[ritual.summoner].push(ritual.rewardId);
        }
        emit RitualPerformed(ritual.summoner, ritualId, ritual.rewardId);
    }

    function uri(uint256 _id) public view override returns (string memory) {
        return string(abi.encodePacked("ipfs://QmbasicCID/", Strings.toString(_id), ".json"));
    }

    function withdraw() public onlyOwner {
        (bool sent, ) = multisig.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

    receive() external payable {}
}