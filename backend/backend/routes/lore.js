// File: backend/routes/lore.js

const express = require('express');
const { getLore, getRandomLore } = require('../controllers/loreController');

const router = express.Router();

router.get('/', getLore);
router.get('/random', getRandomLore);

module.exports = router;