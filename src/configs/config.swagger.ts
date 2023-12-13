import { SwaggerTheme } from "swagger-themes";
const theme = new SwaggerTheme("v3");
import { serviceUrl } from "./config.app";

export const configSwagger = {
    swaggerOptions: {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "DGU EXTENSION API",
                version: "1.0.0",
                description: "DGU EXTENSION SERVICES API",
                contact: {
                    email: "dgu-extension@gmail.com",
                },
            },
            servers: [
                {
                    url: serviceUrl,
                },
            ],
            components: {
                securitySchemes: {
                    accessToken: {
                        type: "apiKey",
                        in: "header",
                        name: "authorization",
                    },
                    apiKey: {
                        type: "apiKey",
                        in: "header",
                        name: "api-key",
                    },
                },
            },
        },
        apis: ["./src/routes/**/*.ts"],
    },
    optionsTheme: {
        explorer: true,
        customCss: theme.getBuffer("dark"),
    },
};
