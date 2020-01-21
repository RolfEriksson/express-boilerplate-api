import { AsyncRouter } from "express-async-router";
import { createUser, getUsers } from "../controllers/userController";

export enum UserRoutes {
    ROOT = "/"
}

const userRouter = AsyncRouter();

userRouter.get(UserRoutes.ROOT, getUsers);
userRouter.post(UserRoutes.ROOT, createUser);

export { userRouter };
