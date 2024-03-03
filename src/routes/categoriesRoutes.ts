import express from 'express';
import {createCategory, getCategories} from '../controllers/categoriesController';

const router = express.Router();

// Роут для получения списка категорий
router.get('/api/categories', getCategories);
router.post('/api/categories', createCategory);

export default router;
