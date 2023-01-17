import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const AppDataSource = new DataSource({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: 'fragments',
    synchronize: true,
    logging: false,
    entities: ["dist/src/models/*.js"],
    migrations: ["dist/src/migrations/*.js"],

})

export default AppDataSource;