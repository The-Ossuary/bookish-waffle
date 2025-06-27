# The Ossuary

The Ossuary is a dark, mythic Web3 platform for creating, evolving, and trading dynamic NFTs. Unlike static NFT marketplaces, Ossuary Relics evolve through player rituals, AI-generated lore, and user-submitted art, music, and writing. Each NFT is a living, growing, on-chain asset designed for replayability, community creativity, and trade.

## Concept

Transform static NFTs into mutable relics shaped by player choices and personal artistic contributions. Ritual mechanics allow players to stake, mutate, and evolve NFTs, while AI generates unique narrative branches. User-generated art, music, and writing can be minted and embedded into relic evolution, making each asset a one-of-a-kind creation.

## Features

- Mutable NFTs: Relics evolve 3–5 times through rituals.
- Ritual Engine: Stake, sacrifice, mutate, and transform relics.
- AI-Generated Lore: Dynamic branching stories for each NFT.
- User-Generated Content: Players upload art, music, and writing to mint as NFTs and integrate into relic evolution.
- Faction Wars: Optional PvP battles with rarity rewards.
- Creator Royalties: 10% royalties for artists on mutations and trades.
- Marketplace Integration: Buy/sell evolved relics with enforced royalties.
- Blockchain: Smart contracts on Polygon/Ethereum for low gas fees.
- Obsen AI: Narrative engine with thousands of unique story branches.

## Project Structure

/contracts
  ERC1155 smart contracts
  Ritual mutation logic

/lore
  Core lore bible
  AI branching narrative specs

/scripts
  Ritual engine backend scripts
  Metadata updaters

/assets
  Base relic images
  Evolution stages
  Example user-submitted art
  Sample music assets

/docs
  Whitepaper
  Setup instructions

## Setup Instructions

1. Install dependencies:

   npm install

2. Compile and deploy smart contracts:

   npx hardhat compile
   npx hardhat deploy

3. Run the ritual engine (backend):

   python scripts/run_ritual_engine.py

4. Start frontend (placeholder):

   npm run dev

## Usage

- Mint base relic NFTs.
- Upload your own art, music, or writing to create new NFTs.
- Perform rituals to evolve NFTs.
- Trade on the marketplace with built-in royalty splits.
- Participate in Faction Wars to boost relic rarity.

## License

Proprietary. Contact the creator for licensing or purchase inquiries.

Creator: Obsen
the.ossuary.xyz@gmail.com