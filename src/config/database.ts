import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'newsportal',
    entities: [__dirname + '../models/*.ts'], // Путь к вашим моделям
    synchronize: true, // Автоматическое создание схемы базы данных (только для разработки)
};

export default connectionOptions;

