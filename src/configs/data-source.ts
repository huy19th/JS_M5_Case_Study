import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: !!process.env.DB_SYNCHRONIZE,
    logging: !!process.env.DB_LOGGING,
    entities: ["dist/src/models/*.js"],
    migrations: ["dist/src/migrations/*.js"],
})

export default AppDataSource;