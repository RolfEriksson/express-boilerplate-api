import express, { Errback, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";

import { authenticationRouter, userRouter } from "./routes";

import { swaggerSpecV1 } from "../../swaggerDocGenerator";
import { ErrorHandler, handleError } from "./helpers/error";

export enum MIDDLEWARE_ROUTES {
    API_DOCS = "/api-docs",
    USER = "/user",
    AUTHENTICATION = "/authentication"
}

const api = express();

api.get("/", (req, res) => res.redirect("api-docs"));
api.use(MIDDLEWARE_ROUTES.API_DOCS, swaggerUI.serve, swaggerUI.setup(swaggerSpecV1));
api.use(MIDDLEWARE_ROUTES.USER, userRouter);
api.use(MIDDLEWARE_ROUTES.AUTHENTICATION, authenticationRouter);
api.use((err: ErrorHandler, req: Request, res: Response, next: Errback) => {
    handleError(err, res);
});

export default api;
