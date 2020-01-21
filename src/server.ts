import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello world!"));

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
