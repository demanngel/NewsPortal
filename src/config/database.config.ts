import { ConnectionOptions } from 'typeorm';
import {getDbDatabase, getDbHost, getDbPort, getDbPassword, getDbType, getDbUsername} from "./env.config";

const dbType = getDbType();
const dbHost = getDbHost();
const dbPort = getDbPort();
const dbUsername = getDbUsername();
const dbPassword = getDbPassword();
const dbDatabase = getDbDatabase();

const connectionOptions: ConnectionOptions = {
    type: dbType,
    host: dbHost,
    port: dbPort,
    username: dbUsername,
    password: dbPassword,
    database: dbDatabase,
    entities: ['src/models/*.ts'],
    //synchronize: true,
};

export default connectionOptions;

