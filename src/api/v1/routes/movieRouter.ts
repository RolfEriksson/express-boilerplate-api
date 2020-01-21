import { Router } from "express";
import { getMovies } from "../controllers/getMovies";

const movieRouter = Router();

movieRouter.get("/", getMovies);

export default movieRouter;
