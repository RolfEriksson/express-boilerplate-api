import { Router } from "express";
import validateCredentials from "../controllers/validateCredentials";

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication management.
 */
export enum AuthenticationRoutes {
    ROOT = "/"
}

const authenticationRouter = Router();

/**
 * @swagger
 * path:
 *  /authentication/:
 *    post:
 *      summary: Validates the provided credentials.
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
authenticationRouter.post(AuthenticationRoutes.ROOT, validateCredentials);

export { authenticationRouter };
