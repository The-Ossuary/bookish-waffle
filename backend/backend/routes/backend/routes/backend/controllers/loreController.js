// Example lore dataset
const loreFragments = [
  {
    title: 'Fragment of the Ossuary',
    text: 'In the darkness beneath the chapel, bone meets bone—each inscribed with a forgotten name...',
  },
  {
    title: 'Whisper in the Vault',
    text: 'A single candle flickers where none should burn, illuminating a secret long buried...',
  },
];

exports.getLore = (req, res) => {
  res.json(loreFragments);
};

exports.getRandomLore = (req, res) => {
  const random = loreFragments[Math.floor(Math.random() * loreFragments.length)];
  res.json(random);
};