import { DataSource } from 'typeorm';
import "reflect-metadata";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "fragments",
    synchronize: true,
    logging: false,
    entities: ["dist/src/models/*.js"],
    migrations: ["dist/src/migrations/*.js"],
})

export default AppDataSource;