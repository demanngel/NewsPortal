import { Request, Response } from 'express';
import {getRepository} from 'typeorm';
import { Category } from '../Models/Category';

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
        //console.log(req.body);
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Введите название категории' });
        }

        const categoryRepository = getRepository(Category);
        const category = categoryRepository.create({ name, description });
        await categoryRepository.save(category);

        res.status(201).json(category);
    } catch (e: any) {
        console.error('Ошибка при создании категории:', e);
        res.status(500).json({ message: 'Ошибка при создании категории', emsg: e.message });
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        //console.log(req);
        const id = parseInt(req.params.id, 10); // Преобразовать строку в число
        const name = req.body.name;

        const categoryRepository = getRepository(Category);
        const category = await categoryRepository.findOne({ where: { id } });

        if (!category) {
            return res.status(404).json({ message: 'Категория не найдена' });
        }

        category.name = name;
        await categoryRepository.save(category);

        res.status(200).json(category);
    } catch (error) {
        console.error('Ошибка при обновлении категории:', error);
        res.status(500).json({ message: 'Ошибка при обновлении категории' });
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);

        const categoryRepository = getRepository(Category);
        const category = await categoryRepository.findOne({ where: { id } });

        if (!category) {
            return res.status(404).json({ message: 'Категория не найдена' });
        }

        await categoryRepository.remove(category);

        res.status(204).end();
    } catch (error) {
        console.error('Ошибка при удалении категории:', error);
        res.status(500).json({ message: 'Ошибка при удалении категории' });
    }
};
