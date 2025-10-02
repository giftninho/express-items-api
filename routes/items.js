/**
 * routes/items.js
 */
const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/itemsController').default;
const { validateCreateItem, validateUpdateItem } = require('../middleware/validate').default;

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

export default router;