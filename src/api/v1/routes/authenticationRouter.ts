import { Router } from "express";
import validateCredentials from "../controllers/validateCredentials";

export enum AuthenticationRoutes {
    ROOT = "/"
}

const authenticationRouter = Router();

authenticationRouter.post(AuthenticationRoutes.ROOT, validateCredentials);

export { authenticationRouter };
