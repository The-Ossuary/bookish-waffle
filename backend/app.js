// backend/app.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// --- ROUTES ---

/**
 * Health check route
 */
app.get('/', (req, res) => {
  res.json({ message: 'The Ossuary backend is running.' });
});

/**
 * GET /api/lore
 * Returns a sample lore fragment. In a production app, this would query a database or file.
 */
app.get('/api/lore', (req, res) => {
  // Replace with dynamic lore retrieval as needed
  res.json({
    title: 'Fragment of the Ossuary',
    text: 'In the darkness beneath the chapel, bone meets bone—each inscribed with a forgotten name...',
  });
});

/**
 * POST /api/ritual
 * Example endpoint for performing a ritual. In production, validate and process wallet actions here.
 */
app.post('/api/ritual', (req, res) => {
  const { walletAddress } = req.body;

  if (!walletAddress) {
    return res.status(400).json({ error: 'walletAddress is required.' });
  }

  // Simulate ritual logic here (e.g., on-chain interaction)
  // Respond with ritual result
  res.json({
    success: true,
    message: `Ritual performed for ${walletAddress}.`,
    fragment: 'A chill wind stirs the ashes. You sense a presence watching...',
  });
});

// --- ERROR HANDLING ---

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Internal error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// --- START SERVER ---

app.listen(PORT, () => {
  console.log(`The Ossuary backend is running on port ${PORT}`);
});