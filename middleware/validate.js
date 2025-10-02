function validateCreateItem(req, res, next) {
  const { name, description } = req.body;
  const details = [];

  if (!name || name.trim().length < 3) details.push({ field: 'name', message: 'Name must be at least 3 characters' });
  if (!description || description.trim().length < 10) details.push({ field: 'description', message: 'Description must be at least 10 characters' });

  if (details.length) return res.status(400).json({ success: false, error: 'Validation failed', details });

  req.body.name = name.trim();
  req.body.description = description.trim();
  next();
}

function validateUpdateItem(req, res, next) {
  const { name, description } = req.body;
  const details = [];

  if (!name && !description) details.push({ field: 'body', message: 'Provide name and/or description' });
  if (name && name.trim().length < 3) details.push({ field: 'name', message: 'Name must be at least 3 characters' });
  if (description && description.trim().length < 10) details.push({ field: 'description', message: 'Description must be at least 10 characters' });

  if (details.length) return res.status(400).json({ success: false, error: 'Validation failed', details });

  if (name) req.body.name = name.trim();
  if (description) req.body.description = description.trim();
  next();
}

export default { validateCreateItem, validateUpdateItem };