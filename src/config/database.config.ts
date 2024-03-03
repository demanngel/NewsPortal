import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '11032004',
    database: 'newsportal',
    entities: ['src/models/*.ts'], // Путь к вашим моделям
    synchronize: true, // Автоматическое создание схемы базы данных (только для разработки)
};

export default connectionOptions;

