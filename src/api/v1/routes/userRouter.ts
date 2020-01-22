import { AsyncRouter } from "express-async-router";
import { createUser, getMe, getUsers } from "../controllers/userController";
import { auth } from "../helpers/auth";

export enum UserRoutes {
    ROOT = "/",
    ME = "/me"
}

const userRouter = AsyncRouter();

userRouter.get(UserRoutes.ROOT, getUsers);
userRouter.post(UserRoutes.ROOT, createUser);
userRouter.get(UserRoutes.ME, auth.required, getMe);
// userRouter.get("")

export { userRouter };
