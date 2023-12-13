import express, { Router } from "express";
import { Ask } from "@/routes/asks/asks.router";
import { Usage } from "@/routes/usage/usage.router";
import { Webhook } from "./webhooks/webhooks.router";

const router: Router = express.Router();

router.use("/api/v1", Ask);
router.use("/api/v1", Usage);
router.use("/api/v1", Webhook);

export default router;
