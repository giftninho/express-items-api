// routes/items.js (CommonJS)
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/itemsController');
const { validateCreateItem, validateUpdateItem } = require('../middleware/validate');

// GET /items
router.get('/', ctrl.getAllItems);

// GET /items/:id
router.get('/:id', ctrl.getItem);

// POST /items
router.post('/', validateCreateItem, ctrl.createItem);

// PUT /items/:id
router.put('/:id', validateUpdateItem, ctrl.updateItem);

// DELETE /items/:id
router.delete('/:id', ctrl.deleteItem);

module.exports = router;
