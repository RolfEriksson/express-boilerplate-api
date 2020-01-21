import { Router } from "express";
import { getMovies } from "../controllers/getMovies";

export enum UserRoutes {
    ROOT = "/"
}

const userRouter = Router();

userRouter.get(UserRoutes.ROOT, getMovies);

export { userRouter };
