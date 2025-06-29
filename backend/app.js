// File: backend/app.js

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