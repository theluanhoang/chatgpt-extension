import { OK } from "@/core";
import WebhooksService from "@/services/webhooks.service";
import { Request, Response } from "express";

class WebhookController {
    handleBankTransfer = async (req: Request, res: Response) => {
        console.log("webhooks controllers");

        // return new OK({
        //     message: "Handle Bank Transfer Successfully",
        //     metaData: await WebhooksService.handleBankTransfer(req.body.data),
        // }).send(res);
        return res.status(200).json({
            message: "Handle Bank Transfer Successfully",
            metaData: await WebhooksService.handleBankTransfer(req.body.data),
        });
    };
}

export default new WebhookController();
