import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import categoriesRoutes from "./app/category/category.routes";
import userRoutes from "./app/user/user.routes";
import jwt from 'jsonwebtoken';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(categoriesRoutes);
app.use(userRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'admin.html'));
});

export default app;