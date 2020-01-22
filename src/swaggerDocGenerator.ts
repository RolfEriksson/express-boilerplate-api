import swaggerJSDoc from "swagger-jsdoc";

const optionsV1 = {
  apis: ["src/api/v1/routes/*Router.ts"],
  swaggerDefinition: {
    info: {
        contact: {
            email: "rolf.eriksson.m@gmail.com",
            name: "Rolf Eriksson"
        },
        description:
            "A simple boilerplate for bootstrapping an Express + Typescript + Mongo API.",
        license: {
            name: "MIT",
            url: "https://choosealicense.com/licenses/mit/"
        },
        title: "express-boilerplate-api",
        version: "1.0.0"
    },
    openapi: "3.0.0",
    servers: [
      {
        url: "http://localhost:3000/api/v1"
      },
      {
          url: "https://express-boilerplate-api.herokuapp.com/api/v1"
      }
    ]
  }
};

export const swaggerSpecV1 = swaggerJSDoc(optionsV1);
