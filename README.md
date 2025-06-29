---

# The Ossuary

The Ossuary is a web3 game of collaborative ritual, evolving NFTs, and community-driven lore. Players perform on-chain rituals using smart contracts, $OSIEN tokens, and Chainlink VRF randomness to create, mutate, and destroy NFTs, shaping the crypt-city’s story together.

## Table of Contents

- [Project Overview](#project-overview)
- [Status & Opportunity](#status--opportunity)
- [Screenshots](#screenshots)
- [Quickstart](#quickstart)
- [Tech Stack](#tech-stack)
- [What's Included](#whats-included)
- [API Usage Examples](#api-usage-examples)
- [Contributing](#contributing)
- [License & Intellectual Property](#license--intellectual-property)
- [Community & Contact](#community--contact)
- [Acknowledgements](#acknowledgements)

## Project Overview

- **On-chain Rituals:** All gameplay actions are on-chain smart contracts that create, mutate, or destroy NFTs.
- **Dynamic NFTs:** Items and lore fragments evolve with community participation.
- **Community Worldbuilding:** Player choices expand and reshape the crypt-city’s story.
- **True Ownership:** All assets are NFTs on Ethereum and stored on IPFS.
- **Creative Economy:** The $OSIEN token rewards artists and active players.

## Status & Opportunity

🚧 **The Ossuary is not yet live or deployed to mainnet.**

All intellectual property—including code, lore, and design—is available for:

- **Acquisition:** Buy the full IP, codebase, and lore.
- **Partnership:** Collaborate on launch, marketing, or integration.
- **Further Development:** Developers wanted for deployment and demo!

No smart contracts or frontend are currently live.  
This repo contains all source code, assets, and documentation.

## Screenshots

*Sample UI and NFT artwork coming soon. Artists and designers are welcome!*

## Quickstart

To run locally:

```bash
git clone https://github.com/The-Ossuary/bookish-waffle.git
cd bookish-waffle

# Contracts
cd contracts
npm install
npx hardhat compile

# (Optional) Deploy to a testnet
npx hardhat run scripts/deploy.js --network mumbai

# Frontend
cd ../ossuary-frontend
npm install
npm run dev

# Backend (optional)
cd ../backend
npm install
node app.js
```

Create `.env` files in `/backend` and `/ossuary-frontend` with your keys and endpoints (see sample `.env.example`).

## Tech Stack

- Solidity / Hardhat (smart contracts)
- React (Vite) & Tailwind CSS (frontend)
- Chainlink VRF (on-chain randomness)
- RainbowKit, Wagmi (wallets)
- Express.js (backend API)
- NFT.Storage / Pinata (IPFS metadata)
- OpenZeppelin ERC-1155 (NFT standard)

## What's Included

- All smart contracts and deployment scripts
- Full frontend and backend code
- Original lore, worldbuilding, and documentation
- Brand and naming assets
- Community channels (Discord, Twitter, etc. if desired)
- Full IP rights and transferability

*Visual art assets are not yet included. Artists interested in contributing, please reach out!*

## API Usage Examples

```js
// Trigger a ritual
fetch('/ritual', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ tokenId: 1, ritualData: { type: 'Bonechant' } })
});

// Fetch lore fragment
fetch('/lore/1')
  .then(res => res.json())
  .then(data => console.log(data));
```

## Contributing

We welcome all contributions—code, art, lore, music, ideas, and partnerships!

- Fork this repository and submit a pull request, or create a new branch for your changes.

See: [CONTRIBUTING.md](https://github.com/The-Ossuary/bookish-waffle/blob/main/Contributing.md)

## License & Intellectual Property

All code, lore, documentation, and creative materials in this repository are the exclusive intellectual property of The-Ossuary.

See [License.md] in code folder on main for full terms.

For sale inquiries or to request access for review, contact: the.ossuary.xyz@gmail.com

## Community & Contact

- Email: the.ossuary.xyz@gmail.com
- Twitter: [@TheOssuaryCrypt](https://twitter.com/TheOssuaryCrypt)
- Discord: [https://discord.gg/your-discord-link](https://discord.gg/your-discord-link)

For acquisition, licensing, or partnership inquiries, contact:  
Obsen, God of Obscenity  
the.ossuary.xyz@gmail.com

## Acknowledgements

Inspired by Chainlink, OpenZeppelin, and the occult NFT community.  
Thanks to all early contributors, artists, and lore creators!

> “The Ossuary is a world that feeds on sacrifice, rewards creativity, and punishes complacency. Every Relic is unique. Every player leaves a scar. The Ritual is forever.”

---

