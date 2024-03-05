import { Request, Response } from 'express';
import { loginService, registerService } from './user.service'; // Импортируем функции из сервиса

export const login = (req: Request, res: Response) => {
    loginService(req.body)
        .then((token: string) => res.json({ token }))
        .catch((error: any) => res.status(error.status).json({ message: error.message }));
};

export const register = (req: Request, res: Response) => {
    registerService(req.body)
        .then((token: string) => res.status(201).json({ token }))
        .catch((error: any) => res.status(error.status).json({ message: error.message }));
};
