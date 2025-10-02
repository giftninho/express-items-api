function notFoundHandler(req, res) {
  res.status(404).json({ success: false, error: `Route ${req.originalUrl} not found` });
}

function errorHandler(err, req, res, next) {
  console.error('Error:', err);
  res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
}

export default { notFoundHandler, errorHandler };