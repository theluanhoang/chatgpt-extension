import { Request, Response, NextFunction } from "express";

const handleError = (fn: (req: Request, res: Response, next: NextFunction) => any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error: any) {
            const statusCode: number = error.status || 500;
            const code: number = error.code || 1000;
            const message: string = error.message || "Server Error";

            const errorResponse = {
                status: "Error",
                code,
                message: message,
            };

            res.status(statusCode).json(errorResponse);
        }
    };
};

export { handleError };
