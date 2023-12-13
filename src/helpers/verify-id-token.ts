import { audience, client } from "@/configs/config.google";
import { UNAUTHORIZED } from "@/core";
import { Request } from "express";

export async function verifyIdToken(req: Request) {
    const idToken = req.headers.authorization?.split(" ")[1];

    try {
        if (!idToken) {
            throw new UNAUTHORIZED();
        }

        const ticket = await client.verifyIdToken({
            idToken,
            audience,
        });

        const payload = ticket.getPayload();
        const userId = payload?.sub;

        return userId;
    } catch (error) {
        throw error;
    }
}
