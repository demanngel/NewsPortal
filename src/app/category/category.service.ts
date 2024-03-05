import { getRepository } from 'typeorm';
import { Category } from '../../models/Category';

export const getCategoriesServise = async () => {
    console.log(3);
    const categoryRepository = await getRepository(Category);
    console.log(4);
    return categoryRepository.find();
};

export const createCategoryServise = async (name: string, description: string) => {
    if (!name) {
        throw { status: 400, message: 'Введите название категории' };
    }
    const categoryRepository = getRepository(Category);
    const category = categoryRepository.create({ name, description });
    return await categoryRepository.save(category);
};

export const updateCategoryServise = async (id: number, name: string) => {
    const categoryRepository = getRepository(Category);
    const category = await categoryRepository.findOne({ where: { id } });
    if (!category) {
        throw { status: 404, message: 'Категория не найдена' };
    }
    category.name = name;
    return await categoryRepository.save(category);
};

export const deleteCategoryServise = async (id: number) => {
    const categoryRepository = getRepository(Category);
    const category = await categoryRepository.findOne({ where: { id } });
    if (!category) {
        throw { status: 404, message: 'Категория не найдена' };
    }
    await categoryRepository.remove(category);
};
