import { configWebhooks } from "@/configs/config.webhook";
import { UNAUTHORIZED } from "@/core";
import { handleError } from "@/helpers";
import { HEADER } from "@/utils";
import { NextFunction, Request, Response } from "express";

export const verifySecureTokenMiddleware = handleError(async (req: Request, res: Response, next: NextFunction) => {
    const secureToken = req.headers[HEADER.SECURE_TOKEN];

    if (!secureToken) {
        throw new UNAUTHORIZED("Missing secure token");
    }

    if (secureToken !== configWebhooks.secureToken) throw new UNAUTHORIZED("Wrong secure-token");

    return next();
});
