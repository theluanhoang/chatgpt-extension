import dotenv from "dotenv";
import * as process from "process";

dotenv.config();

const configApp = {
    port: parseInt(process.env.APP_PORT as string) as number,
    serviceUrl: process.env.SERVICE_URL as string,
};
export = configApp;
