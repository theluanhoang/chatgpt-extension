import request from "supertest";
import app from "@/app";

describe("Usage Routes", () => {
    describe("POST /create-api-key", () => {
        it("should create an API key", async () => {
            const res = await request(app).post("/create-api-key").send();

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty("message", "Create API Key Successfully");
            expect(res.body).toHaveProperty("metaData");
            expect(res.body.metaData).toHaveProperty("apiKey");
        });
    });

    describe("GET /get-api-key", () => {
        it("should get API keys", async () => {
            const res = await request(app).get("/get-api-key");

            expect(res.statusCode).toBe(200);
        });
    });

    describe("DELETE /delete-api-key", () => {
        it("should delete an API key", async () => {
            const res = await request(app).delete("/delete-api-key").send({ timestamp: "someTimestamp" });

            expect(res.statusCode).toBe(200);
        });
    });
});
