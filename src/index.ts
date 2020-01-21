import express from "express";

import api from "./api";

const port = process.env.PORT || 5000;
const app = express();

app.use("/api/v1", api);

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
