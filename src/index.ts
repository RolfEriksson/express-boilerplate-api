import express from "express";

import bodyParser from "body-parser";
import apiV1 from "./api/v1";

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use("/api/v1", apiV1);

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
