

# The Ossuary

The Ossuary is a collaborative, occult-inspired NFT ritual platform. Users perform on-chain rituals with $OSIEN tokens, powered by Chainlink VRF, to summon unique Relics, unlock Lore Fragments, and support real artists. The project blends art, mythology, and community into a living, evolving digital legend.

---

## Table of Contents

- [About](#about)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Deployed Contracts & Links](#deployed-contracts--links)
- [Project Architecture](#project-architecture)
- [User Flow](#user-flow)
- [Usage Examples](#usage-examples)
- [Monetization Model](#monetization-model)
- [Contributing](#contributing)
- [Community & Contact](#community--contact)
- [Tech Stack](#tech-stack)
- [FAQ](#faq)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## About

The Ossuary aims to restore value to lost creativity through an evolving on-chain mythology. Every ritual, relic, and story is shaped by the community. Stake $OSIEN, collaborate with artists and lore creators, and leave your mark on a growing, decentralized legend.

---

## Demo

![Ossuary Demo Screenshot](https://your-demo-screenshot-url-or-gif-here)

[Live Demo](https://your-frontend-demo-link.com)

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Hardhat (for contracts)
- Metamask or any EVM-compatible wallet
- Pinata or NFT.Storage for IPFS metadata

### Installation

1. **Clone the repository**

   ```
   git clone https://github.com/The-Ossuary/bookish-waffle.git
   cd bookish-waffle
   ```

2. **Set up contracts**

   ```
   cd contracts
   npm install
   npx hardhat compile
   ```

3. **Deploy contracts** (update addresses in frontend constants afterward if needed)

4. **Set up frontend**

   ```
   cd ../ossuary-frontend
   npm install
   npm run dev
   ```

5. **Set up backend (optional)**

   ```
   cd ../backend
   npm install
   node app.js
   ```

### Environment Variables

Create a `.env` file in both `/backend` and `/frontend` if needed. Example variables:

- ETH_RPC_URL
- PRIVATE_KEY
- CHAINLINK_SUBSCRIPTION_ID
- CHAINLINK_KEYHASH
- VRF_COORDINATOR_ADDRESS

---

## Deployed Contracts & Links

- **Frontend:** [https://your-frontend-demo-link.com](https://your-frontend-demo-link.com)
- **Contract (Polygon):** `0xYourDeployedOssuaryAddress`
- **$OSIEN Token:** `0xYourOSIENTokenAddress`
- **Marketplace:** [OpenSea or other link]

---

## Project Architecture

User Wallet ↔️ React Frontend ↔️ (optional) Express Backend ↔️ Smart Contracts (Chainlink VRF, ERC-1155) ↔️ IPFS

- **Frontend:** User connects wallet, performs rituals, views lore
- **Backend:** Optional APIs for metadata, off-chain logic
- **Smart Contract:** Ritual logic, randomness, and NFT minting
- **IPFS:** Stores NFT metadata/art

---

## User Flow

1. Connect wallet via RainbowKit or WalletConnect
2. Perform a ritual (stake $OSIEN, trigger VRF randomness)
3. Mint a Relic or Lore Fragment if the ritual succeeds
4. Collect, trade, and collaborate on lore

---

## Usage Examples

**Trigger a ritual from the frontend:**

```js
fetch('http://localhost:3001/ritual', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ tokenId: 1, ritualData: { type: 'Bonechant' } }),
})
  .then(res => res.json())
  .then(data => console.log(data));
```

**Fetch a lore fragment:**

```js
fetch('http://localhost:3001/lore/1')
  .then(res => res.json())
  .then(data => console.log(data));
```

**Perform a ritual via Hardhat CLI:**

```
npx hardhat run scripts/performRitual.js --network mumbai
```

---

## Monetization Model

- **$OSIEN Token:** Used for rituals, staking, and premium features
- **Staking Pool Fees:** Portions of rituals/stakes go to artists and the DAO
- **Premium Rituals:** Special collaborations unlock exclusive NFTs and lore

---

## Contributing

We welcome contributions of all kinds—code, art, lore, bug reports, and ideas!

- Fork the repo, create a branch, open a pull request
- Artists/writers: submit via issues or join our Discord
- Developers: see [issues](https://github.com/The-Ossuary/bookish-waffle/issues) for open tasks

---

## Community & Contact
  **Creator:** Obsen
- **Email:** the.ossuary.xyz@gmail.com

---

## Tech Stack

- Solidity, Hardhat (contracts)
- Chainlink VRF
- ERC-1155 (OpenZeppelin)
- React (Vite), Tailwind CSS
- RainbowKit, Wagmi
- Express (backend)
- IPFS (NFT.Storage/Pinata)

---

## FAQ

**Is the project audited?**  
Not yet. Use at your own risk and review all contracts before using on mainnet.

**Can I create my own rituals?**  
Yes! See the Contributing section.

---

## License

MIT License. See [LICENSE](./LICENSE).

---

## Acknowledgements

- Inspired by Chainlink, OpenZeppelin, and the occult NFT community
- Special thanks to all early contributors and artists!

---

