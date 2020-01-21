import express from "express";
import swaggerUI from "swagger-ui-express";
import { swaggerSpecV1 } from "../../swaggerDocGenerator";

const api = express();

api.use("/", swaggerUI.serve, swaggerUI.setup(swaggerSpecV1));

export default api;
