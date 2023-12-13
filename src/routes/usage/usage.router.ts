import express, { Router } from "express";
import { handleError } from "@/helpers";
import { authenticationMiddleWare } from "@/middlewares";
import UsageController from "@/controllers/usage.controller";

const router: Router = express.Router();

router.post("/create-api-key", authenticationMiddleWare, handleError(UsageController.createApiKey));
/**
 * @swagger
 * /create-api-key:
 *   post:
 *     tags: [Usage]
 *     summary: Create API key
 *     security:
 *       - accessToken: []
 *     description: Create an API key for the user
 *     responses:
 *       200:
 *         description: The result is successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Create API Key Successfully"
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 metaData:
 *                   type: object
 *                   properties:
 *                     apiKey:
 *                       type: string
 *                       example: "eyJhbGciOiJIUz.."
 *                     timestamp:
 *                       type: integer
 *                       example: 1702194489655
 */

router.get("/get-api-key", authenticationMiddleWare, handleError(UsageController.getApiKey));
/**
 * @swagger
 * /get-api-key:
 *   get:
 *     tags: [Usage]
 *     summary: Get API Key
 *     security:
 *       - accessToken: []
 *     description: Get API Key By User ID
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
 *                   example: "Get All API Key Successfully"
 *                 code:
 *                   type: integer
 *                   description: HTTP status code.
 *                   example: 200
 *                 metaData:
 *                   type: object
 *                   properties:
 *                     apiKeys:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: List of API keys.
 */

router.delete("/delete-api-key", authenticationMiddleWare, handleError(UsageController.deleteApiKey));
/**
 * @swagger
 * /delete-api-key:
 *   delete:
 *     tags: [Usage]
 *     summary: Delete API Key
 *     security:
 *       - accessToken: []
 *     description: Delete an API key using a specified timestamp
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - timestamp
 *             properties:
 *               timestamp:
 *                 type: string
 *                 description: Timestamp of the API key to be deleted.
 *     responses:
 *       200:
 *         description: API key successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Result message.
 *                   example: "Delete API Key Successfully"
 *                 code:
 *                   type: integer
 *                   description: HTTP status code.
 *                   example: 200
 *                 metaData:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                       description: The user ID associated with the deleted API key.
 *                       example: "12134556"
 *                     timestamp:
 *                       type: string
 *                       description: Timestamp when the API key was deleted.
 *                       example: "1702194913275"
 */

export { router as Usage };
