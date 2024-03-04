import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { News } from '../Models/News';

// Функция для получения списка новостей
export const getNewsList = async (req: Request, res: Response) => {
    try {
        const newsRepository = getRepository(News);
        const newsList = await newsRepository.find();
        res.json(newsList);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении списка новостей' });
    }
};
