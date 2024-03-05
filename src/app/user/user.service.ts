import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { User } from "../../models/User";
import { generateToken } from "../../middlevare/token";

export const loginService = async (userData: any) => {
    try {
        const { username, password } = userData;

        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { username } });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                const token = generateToken(user.id);
                return token;
            } else {
                throw { status: 401, message: 'Неверные учетные данные' };
            }
        } else {
            throw { status: 401, message: 'Пользователь не найден' };
        }
    } catch (error) {
        throw error;
    }
};

export const registerService = async (userData: any) => {
    try {
        const { username, email, password } = userData;
        const userRepository = getRepository(User);
        const existingUser = await userRepository.findOne({ where: { email }});
        if (existingUser) {
            throw { status: 400, message: 'Пользователь с таким email уже существует' };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = userRepository.create({
            username,
            email,
            password: hashedPassword,
        });
        await userRepository.save(newUser);
        const token = generateToken(newUser.id);
        return token;
    } catch (error) {
        throw {status: 500, message: 'Ошибка регистрации пользователя'};
    }
};
