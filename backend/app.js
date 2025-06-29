// backend/app.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const loreRoutes = require('./routes/lore');
const ritualRoutes = require('./routes/ritual');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

// Security HTTP headers
app.use(helmet());

// Logging
app.use(morgan('dev'));

// CORS setup
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : [];
app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : '*',
    credentials: true,
  })
);

// Body parsing
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // limit each IP
});
app.use(limiter);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'The Ossuary backend is running.' });
});

// API routes
app.use('/api/lore', loreRoutes);
app.use('/api/ritual', ritualRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The Ossuary backend is running on port ${PORT}`);
});


// backend/routes/lore.js

const express = require('express');
const { getLore, getRandomLore } = require('../controllers/loreController');

const router = express.Router();

router.get('/', getLore);
router.get('/random', getRandomLore);

module.exports = router;


// backend/routes/ritual.js

const express = require('express');
const { performRitual } = require('../controllers/ritualController');
const validateRequest = require('../middleware/validateRequest');
const { ritualSchema } = require('../validators/ritual');

const router = express.Router();

router.post('/', validateRequest(ritualSchema), performRitual);

module.exports = router;


// backend/controllers/loreController.js

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


// backend/controllers/ritualController.js

exports.performRitual = (req, res) => {
  const { walletAddress } = req.body;

  // Example: Ritual logic placeholder
  res.json({
    success: true,
    message: `Ritual performed for ${walletAddress}.`,
    fragment: 'A chill wind stirs the ashes. You sense a presence watching...',
  });
};


// backend/middleware/errorHandler.js

module.exports = (err, req, res, next) => {
  console.error('Internal error:', err);
  res.status(500).json({ error: 'Internal server error' });
};


// backend/middleware/validateRequest.js

module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};


// backend/validators/ritual.js

const Joi = require('joi');

exports.ritualSchema = Joi.object({
  walletAddress: Joi.string().min(6).required(),
});

PORT=3001
ALLOWED_ORIGINS=http://localhost:3000