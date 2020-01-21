import { Router } from "express";
import { getUsers } from "../controllers/userController";

export enum UserRoutes {
    ROOT = "/"
}

const userRouter = Router();

userRouter.get(UserRoutes.ROOT, getUsers);

export { userRouter };
