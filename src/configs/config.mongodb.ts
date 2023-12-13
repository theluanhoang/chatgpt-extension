import dotenv from "dotenv";
dotenv.config();

const configMongodb = {
    databaseName: process.env.DB_NAME as string,
    userName: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    port: parseInt(process.env.DB_PORT as string) as number,
    ip: process.env.DB_IP as string,
};
export = configMongodb;
