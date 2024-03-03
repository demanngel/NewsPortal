import app from './app';
import { createConnection } from 'typeorm';
import connectionOptions from './config/database.config';

const PORT: number = 3000;

createConnection(connectionOptions)
    .then(async () => {
        console.log('Подключение к базе данных успешно установлено');
        // Запуск сервера Express.js или другие действия
    })
    .catch(error => console.log('Ошибка при подключении к базе данных:', error));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
