import swaggerJSDoc from "swagger-jsdoc";

const optionsV1 = {
    apis: ["./api/v1"],
    definition: {
        info: {
            title: "express-boilerplate-api",
            version: "1.0.0"
        }
    },
};

export const swaggerSpecV1 = swaggerJSDoc(optionsV1);
