import { Router } from 'express';
const router = Router();

import { getAllItems, getItem, createItem, updateItem, deleteItem } from '../controllers/itemsController';
import { validateCreateItem, validateUpdateItem } from '../middleware/validate';

router.get('/', getAllItems);
router.get('/:id', getItem);
router.post('/', validateCreateItem, createItem);
router.put('/:id', validateUpdateItem, updateItem);
router.delete('/:id', deleteItem);

export default router;