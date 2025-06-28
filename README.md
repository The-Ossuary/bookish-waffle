# The Ossuary

## Overview

The Ossuary is a Web3 gaming platform where players mint, evolve, and trade dynamic NFTs called "Relics" using AI-powered rituals. Unlike static NFTs, these assets transform over time through player choices, AI storytelling, and in-game events. This creates a living, evolving collectible system that deepens community engagement and marketplace activity.

---

## Gameplay & Features

- Mint ERC1155 Relics that evolve via rituals
- Sacrifice, stake, mutate, and trade Relics
- AI-generated narrative branches and visual mutations
- Built-in marketplace for primary and secondary sales
- Player-uploaded art, music, and writing for NFTs

---

## User-Generated Content

Players and creators can:
- Upload their own art, music, and writing
- Mint it as Relics
- Sell on the marketplace
- Collaborate in faction rituals and seasonal wars

---

## Factions

Players join one of several competing factions to earn rewards through rituals, sacrifices, and PvP events:

- The Nocturne Court
- The Iron Covenant
- The Cinder Choir
- The Ebon Faith
- The Veilbound

Faction wars create ongoing incentives for collaboration and competition.

---

## Monetization Model

- Primary mint fees
- Secondary marketplace sales
- Staking pool fees
- Premium rituals
- Merch sales
- $OSIEN token liquidity and swaps

---

## Technology Stack

- Solidity ERC1155 smart contracts
- AI-powered ritual engine (Python / Node)
- Obsen AI for narrative generation
- React or Unreal Engine front-end
- Integration with Polygon or Solana
- IPFS for asset storage

---

## Unique Selling Points

- Dynamic, mutable NFTs that evolve over time
- AI-generated branching lore
- Player-driven rituals and evolution
- Marketplace with a creator economy
- Tools for users to mint their own art, music, and writing

---

## Contact

Obesn  
Email: the.ossuary.xyz@gmail.com

Deploy Instructions

# Ossuary Frontend - Deploy Instructions

1. Install dependencies:
   npm install

2. Start the local development server:
   npm run dev

3. Build for production (Vercel/Netlify):
   npm run build

4. Update `src/constants.ts` with your contract addresses and ABI.
5. Ensure you have the correct wallet/chain config.
6. Deploy the build output to your chosen hosting provider. 

Contract Deployment / VRF / IPFS Instructions 
# Ossuary Smart Contract Deployment (Chainlink VRF & IPFS)

1. Fund your Chainlink VRF subscription.
2. Obtain your:
   - subscriptionId
   - keyHash
   - VRFCoordinator address

3. Update the constructor params in `contracts/TheOssuary.sol`:
   constructor(
     address vrfCoordinator,
     uint64 subscriptionId,
     bytes32 _keyHash,
     address _multisig
   )

4. Pin your metadata JSON to IPFS (using Pinata, NFT.Storage, etc).
   - Replace `ipfs://QmbasicCID/` in your contract with your new CID.

5. Compile and deploy your contract using Hardhat:
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network <network>

6. Save your deployed contract address and ABI for frontend integration.

7. Update frontend `src/constants.ts` with your contract address and ABI.


# Ossuary Backend

This is the backend API for The Ossuary project.

---

## 🚀 Quick Start

```bash
# Go to the backend folder
cd backend

# Install dependencies
npm install

# Start the backend server
node app.js

You can call backend endpoints from your React app using fetch or axios.

