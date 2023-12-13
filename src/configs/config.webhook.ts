import dotenv from "dotenv";
import * as process from "process";

dotenv.config();

export const configWebhooks = {
    secureToken: process.env.CASSO_SECURE_TOKEN,
};
