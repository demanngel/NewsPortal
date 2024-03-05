import dotenv from 'dotenv';

dotenv.config();

export function getJwtSecret(): string {
    return process.env.JWT_SECRET || '';
}

export function getDbType(): 'mysql' | 'postgres' | 'sqlite' | 'mssql' | 'mongodb' {
    return process.env.DB_TYPE as 'mysql' | 'postgres' | 'sqlite' | 'mssql' | 'mongodb' || '';
}

export function getDbHost(): string {
    return process.env.DB_HOST || '';
}

export function getDbPort(): number {
    return parseInt(process.env.DB_PORT || '0');
}

export function getDbUsername(): string {
    return process.env.DB_USERNAME || '';
}

export function getDbPassword(): string {
    return process.env.DB_PASSWORD || '';
}

export function getDbDatabase(): string {
    return process.env.DB_DATABASE || '';
}

export function getPort(): string {
    return process.env.PORT || '';
}
