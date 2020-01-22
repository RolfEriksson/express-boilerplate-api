import { AsyncRouter } from "express-async-router";
import { createUser, getUsers } from "../controllers/userController";
import { auth } from "../helpers/auth";

export enum UserRoutes {
    ROOT = "/"
}

const userRouter = AsyncRouter();

userRouter.get(UserRoutes.ROOT, getUsers);
userRouter.post(UserRoutes.ROOT, createUser);
userRouter.get("/test", auth.required, (req, res) => {
    res.send({ foo: "bar" });
});
// userRouter.get("")

export { userRouter };
