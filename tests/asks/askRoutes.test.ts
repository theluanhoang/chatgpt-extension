import request from "supertest";
import app from "@/app";

describe("Ask Routes", () => {
    describe("POST /asks", () => {
        it("should create an ask", async () => {
            const askData = {
                imageUrl: "base64string",
            };

            const response = await request(app).post("/asks").set("x-api-key", "api-key").send(askData);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty("message");
            expect(response.body).toHaveProperty("code");
            expect(response.body).toHaveProperty("metaData");
        });
    });
});
