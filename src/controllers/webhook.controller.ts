import WebhooksService from "@/services/webhooks.service";
import { StatusCodes } from "@/utils";
import { Request, Response } from "express";
class WebhookController {
    handleBankTransfer = async (req: Request, res: Response) => {
        return res.status(StatusCodes.OK).json({
            message: "Handle Bank Transfer Successfully",
            metaData: await WebhooksService.handleBankTransfer(req.body.data),
        });
    };
}

export default new WebhookController();
