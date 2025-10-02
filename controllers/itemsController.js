
import { getAll, findById, create, update, remove } from '../data/store';

function getAllItems(req, res, next) {
  try {
    let results = getAll();
    const { name } = req.query;

    if (name) {
      const q = String(name).toLowerCase();
      results = results.filter((i) => i.name.toLowerCase().includes(q));
    }

    return res.json({ success: true, data: results });
  } catch (err) {
    return next(err);
  }
}

function getItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, error: 'Invalid id parameter', details: [] });
    }

    const item = findById(id);
    if (!item) {
      return res.status(404).json({ success: false, error: `Item with id ${id} not found`, details: [] });
    }

    return res.json({ success: true, data: item });
  } catch (err) {
    return next(err);
  }
}

function createItem(req, res, next) {
  try {
    const { name, description } = req.body;
    const created = create({ name, description });
    return res.status(201).json({ success: true, data: created });
  } catch (err) {
    return next(err);
  }
}

function updateItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, error: 'Invalid id parameter', details: [] });
    }

    const exists = findById(id);
    if (!exists) {
      return res.status(404).json({ success: false, error: `Item with id ${id} not found`, details: [] });
    }

    const { name, description } = req.body;
    const updated = update(id, { name, description });

    return res.json({ success: true, data: updated });
  } catch (err) {
    return next(err);
  }
}

function deleteItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, error: 'Invalid id parameter', details: [] });
    }

    const removed = remove(id);
    if (!removed) {
      return res.status(404).json({ success: false, error: `Item with id ${id} not found`, details: [] });
    }

    return res.json({ success: true, message: 'Item deleted successfully' });
  } catch (err) {
    return next(err);
  }
}

export default {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};