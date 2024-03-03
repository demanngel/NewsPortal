import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import categoriesRoutes from "./routes/categoriesRoutes";

const app: Application = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(categoriesRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'admin.html'));
});

export default app;