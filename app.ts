import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello, lox!');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default app;