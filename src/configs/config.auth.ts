import dotenv from "dotenv";
dotenv.config();

const configAuth = {
    secretKeyExtension: process.env.SECRET_KEY_EXTENSION as string,
};

export = configAuth;
