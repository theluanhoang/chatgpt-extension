import { OK } from "@/core";
import WebhooksService from "@/services/webhooks.service";
import { Request, Response } from "express";

class WebhookController {
    handleBankTransfer = async (req: Request, res: Response) => {
        new OK({
            message: "Handle Bank Transfer Successfully",
            metaData: await WebhooksService.handleBankTransfer(req.body.data),
        }).send(res);
    };
}

export default new WebhookController();
