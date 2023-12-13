import express, { Router } from "express";
import { handleError } from "@/helpers";
import AskController from "@/controllers/asks.controller";
import { verifyApiKeyMiddleware } from "@/middlewares";

const router: Router = express.Router();

router.post("/asks", verifyApiKeyMiddleware, handleError(AskController.createAsk));

/**
 * @swagger
 * /asks:
 *   post:
 *     tags: [Ask]
 *     summary: Create ask
 *     security:
 *       - apiKey: []
 *     description: This API creates an ask.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - imageUrl
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 description: Base 64 image URL
 *     responses:
 *       200:
 *         description: The result is correct.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Result message.
 *                 code:
 *                   type: integer
 *                   description: HTTP status code.
 *                 metaData:
 *                   type: object
 *                   properties:
 *                     result:
 *                       type: string
 *                       description: Detailed result or message from the request.
 */

export { router as Ask };
