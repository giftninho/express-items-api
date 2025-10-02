// middleware/errorHandler.js (CommonJS)
function notFoundHandler(req, res) {
  res.status(404).json({ success: false, error: `Route ${req.originalUrl} not found`, details: [] });
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  console.error('Server error:', err);
  const status = err.status && Number(err.status) >= 400 ? Number(err.status) : 500;
  res.status(status).json({ success: false, error: err.message || 'Internal Server Error', details: err.details || [] });
}

module.exports = { notFoundHandler, errorHandler };
