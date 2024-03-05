import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {getJwtSecret} from "../config/env.config";

const jwtSecret = getJwtSecret();

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Отсутствует токен авторизации' });
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Неверный токен авторизации' });
        }
        req.user = decoded;
        next();
    });
};

export const generateToken = (userId: number): string => {
    return jwt.sign({ userId }, jwtSecret || '');
};
