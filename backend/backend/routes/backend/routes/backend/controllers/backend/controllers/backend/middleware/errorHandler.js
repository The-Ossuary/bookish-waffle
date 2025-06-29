module.exports = (err, req, res, next) => {
  console.error('Internal error:', err);
  res.status(500).json({ error: 'Internal server error' });
};