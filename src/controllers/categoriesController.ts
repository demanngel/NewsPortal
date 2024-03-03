import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Category } from '../models/Category';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categoryRepository = getRepository(Category);
        const categories = await categoryRepository.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении списка категорий1' });
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Введите название категории' });
        }

        const categoryRepository = getRepository(Category);
        const category = categoryRepository.create({ name });
        await categoryRepository.save(category);

        res.status(201).json(category);
    } catch (error) {
        console.error('Ошибка при создании категории:', error);
        res.status(500).json({ message: 'Ошибка при создании категории' });
    }
};
