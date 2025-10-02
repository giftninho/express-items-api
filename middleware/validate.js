/**
 * middleware/validate.js
 */
function validateCreateItem(req, res, next) {
  const details = [];
  const { name, description } = req.body;

  if (typeof name !== 'string' || name.trim().length < 3) {
    details.push({ field: 'name', message: 'Name must be at least 3 characters' });
  }

  if (typeof description !== 'string' || description.trim().length < 10) {
    details.push({ field: 'description', message: 'Description must be at least 10 characters' });
  }

  if (details.length) {
    return res.status(400).json({ success: false, error: 'Validation failed', details });
  }

  req.body.name = name.trim();
  req.body.description = description.trim();

  return next();
}

function validateUpdateItem(req, res, next) {
  const details = [];
  const { name, description } = req.body;

  if (name !== undefined) {
    if (typeof name !== 'string' || name.trim().length < 3) {
      details.push({ field: 'name', message: 'Name must be at least 3 characters' });
    } else {
      req.body.name = name.trim();
    }
  }

  if (description !== undefined) {
    if (typeof description !== 'string' || description.trim().length < 10) {
      details.push({ field: 'description', message: 'Description must be at least 10 characters' });
    } else {
      req.body.description = description.trim();
    }
  }

  if (details.length) {
    return res.status(400).json({ success: false, error: 'Validation failed', details });
  }

  return next();
}

export default { validateCreateItem, validateUpdateItem };