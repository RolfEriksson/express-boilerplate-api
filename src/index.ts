import dotenv from "dotenv";
import express from "express";

import bodyParser from "body-parser";
import apiV1 from "./api/v1";
import { connectDb } from "./api/v1/models";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use("/api/v1", apiV1);

connectDb().then(() => {
        app.listen(port, () =>
          // tslint:disable-next-line: no-console
          console.log(`Example app listening on port ${port}!`)
        );
    }
);
