import JWT from "jsonwebtoken";
import { UNAUTHORIZED } from "@/core";
import { handleError } from "@/helpers";
import { HEADER } from "@/utils";
import { NextFunction, Request, Response } from "express";
import { secretKeyExtension } from "@/configs/config.auth";

export const verifyApiKeyMiddleware = handleError(async (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers[HEADER.API_KEY] as string;

    const decoded = JWT.verify(apiKey, secretKeyExtension) as { userId: string };
    if (!decoded.userId) throw new UNAUTHORIZED("API Key Invalid");
    req.body.userId = decoded.userId;
    req.body.apiKey = apiKey;

    return next();
});
