import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";
import * as process from "process";

dotenv.config();

export const client = new OAuth2Client();

export const audience = process.env.GOOGLE_CLIENT_ID;
