import jwt from "jsonwebtoken";
import { secretKeyExtension } from "@/configs/config.auth";

export const createApiKey = (userId: string) => {
    const timestamp = Date.now();
    const apiKey = jwt.sign({ userId, timestamp }, secretKeyExtension);
    return { apiKey, timestamp };
};
