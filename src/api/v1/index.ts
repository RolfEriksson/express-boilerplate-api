import express from "express";
import swaggerUI from "swagger-ui-express";

import { authenticationRouter, movieRouter } from "./routes";

import { swaggerSpecV1 } from "../../swaggerDocGenerator";

export enum MIDDLEWARE_ROUTES {
    API_DOCS = "/api-docs",
    MOVIES = "/movies",
    AUTHENTICATION = "/authentication"
}

const api = express();

api.get("/", (req, res) => res.redirect("api-docs"));
api.use(MIDDLEWARE_ROUTES.API_DOCS, swaggerUI.serve, swaggerUI.setup(swaggerSpecV1));
api.use(MIDDLEWARE_ROUTES.MOVIES, movieRouter);
api.use(MIDDLEWARE_ROUTES.AUTHENTICATION, authenticationRouter);

export default api;
