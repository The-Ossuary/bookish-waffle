const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Example route for health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Example ritual endpoint
app.post('/ritual', (req, res) => {
  const { tokenId, ritualData } = req.body;
  // Here you'd connect to your smart contract logic in a real app
  res.json({ 
    message: `Ritual performed for token ${tokenId}`,
    newMetadata: ritualData
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});