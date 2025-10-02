import { getAll, findById, create, update, remove } from '../data/store';

function getAllItems(req, res, next) {
  try {
    let results = getAll();
    const { name } = req.query;
    if (name) {
      results = results.filter((i) => i.name.toLowerCase().includes(String(name).toLowerCase()));
    }
    res.json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
}

function getItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ success: false, error: 'Invalid id' });

    const item = findById(id);
    if (!item) return res.status(404).json({ success: false, error: `Item with id ${id} not found` });

    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
}

function createItem(req, res, next) {
  try {
    const { name, description } = req.body;
    const item = create({ name, description });
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
}

function updateItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ success: false, error: 'Invalid id' });

    const existing = findById(id);
    if (!existing) return res.status(404).json({ success: false, error: `Item with id ${id} not found` });

    const { name, description } = req.body;
    const updated = update(id, { name, description });
    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
}

function deleteItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ success: false, error: 'Invalid id' });

    const deleted = remove(id);
    if (!deleted) return res.status(404).json({ success: false, error: `Item with id ${id} not found` });

    res.json({ success: true, message: 'Item deleted successfully' });
  } catch (err) {
    next(err);
  }
}

export default { getAllItems, getItem, createItem, updateItem, deleteItem };