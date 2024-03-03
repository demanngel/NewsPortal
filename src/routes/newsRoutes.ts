import express from 'express';
import { getNewsList } from '../controllers/newsController';

const router = express.Router();

// Роут для получения списка новостей
router.get('/api/news', getNewsList);

export default router;
