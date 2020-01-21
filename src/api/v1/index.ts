import express from "express";
import swaggerUI from "swagger-ui-express";

import movieRouter from "./routes/movieRouter";

import { swaggerSpecV1 } from "../../swaggerDocGenerator";

const api = express();

api.get("/", (req, res) => res.redirect("api-docs"));
api.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecV1));
api.use("/movies", movieRouter);

export default api;
