import WebhookController from "@/controllers/webhook.controller";
import { handleError } from "@/helpers";
import { verifySecureTokenMiddleware } from "@/middlewares/verifySecureToken.middleware";
import express, { Router } from "express";

const router: Router = express.Router();

router.post(
    "/webhooks/handler-bank-transfer",
    verifySecureTokenMiddleware,
    handleError(WebhookController.handleBankTransfer),
);

export { router as Webhook };
