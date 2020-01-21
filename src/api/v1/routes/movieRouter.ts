import { Router } from "express";
import { getMovies } from "../controllers/getMovies";

export enum MovieRoutes {
    ROOT = "/"
}

const movieRouter = Router();

movieRouter.get(MovieRoutes.ROOT, getMovies);

export { movieRouter };
