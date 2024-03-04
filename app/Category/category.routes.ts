import express from 'express';
import {createCategory, getCategories, updateCategory, deleteCategory} from "./category.controller";

const router = express.Router();

// Роут для получения списка категорий
router.get('/api/categories', getCategories);
router.post('/api/categories', createCategory);
router.put('/api/categories/:id', updateCategory);
router.delete('/api/categories/:id', deleteCategory);

export default router;
