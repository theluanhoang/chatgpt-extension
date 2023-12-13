import { Response, Request } from "express";
import { OK } from "@/core";
import UsageService from "@/services/usage.service";

class UsageController {
    createApiKey = async (req: Request, res: Response) => {
        const value = { userId: "12134556" }; // testing data

        new OK({
            message: "Create API Key Successfully",
            metaData: await UsageService.createApiKey(value),
        }).send(res);
    };

    getApiKey = async (req: Request, res: Response) => {
        const value = { userId: "12134556" }; // testing data

        new OK({
            message: "Get All API Key Successfully",
            metaData: await UsageService.getApiKey(value),
        }).send(res);
    };

    deleteApiKey = async (req: Request, res: Response) => {
        const value = { userId: "12134556", timestamp: req.body.timestamp }; // testing data

        new OK({
            message: "Delete API Key Successfully",
            metaData: await UsageService.deleteApiKey(value),
        }).send(res);
    };
}

export default new UsageController();
