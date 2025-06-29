// backend/app.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// ----- Middleware -----
app.use(cors());
app.use(express.json());

// ----- Routes -----

/**
 * Health check route.
 */
app.get('/', (req, res) => {
  res.json({ message: 'The Ossuary backend is running.' });
});

/**
 * Example lore endpoint.
 * In a production app, replace this with a real data source.
 */
app.get('/api/lore', (req, res) => {
  res.json({
    title: 'Fragment of the Ossuary',
    text: 'In the darkness beneath the chapel, bone meets bone—each inscribed with a forgotten name...',
  });
});

/**
 * Example ritual action endpoint.
 * In production, add real validation and blockchain/game logic here.
 */
app.post('/api/ritual', (req, res) => {
  const { walletAddress } = req.body;
  if (!walletAddress) {
    return res.status(400).json({ error: 'walletAddress is required.' });
  }

  // Example: Ritual logic placeholder
  res.json({
    success: true,
    message: `Ritual performed for ${walletAddress}.`,
    fragment: 'A chill wind stirs the ashes. You sense a presence watching...',
  });
});

// ----- Error Handling -----

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
  console.error('Internal error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ----- Start Server -----
app.listen(PORT, () => {
  console.log(`The Ossuary backend is running on port ${PORT}`);
});