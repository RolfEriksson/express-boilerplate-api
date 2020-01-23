import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import bodyParser from "body-parser";
import http from "http";
import sio from "socket.io";
import apiV1 from "./api/v1";
import { connectDb } from "./api/v1/models";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", apiV1);

connectDb().then(() => {
        const server = app.listen(port, () =>
          // tslint:disable-next-line: no-console
          console.log(`Example app listening on port ${port}!`)
        );
        const io = sio(server);
        io.on("connection", (socket) => {
          // tslint:disable-next-line: no-console
          console.log("a user connected");
          socket.on("message", (msg) => {
            io.emit("incoming_msg", { message: msg });
          })
          socket.on("disconnect", () => {
            // tslint:disable-next-line: no-console
            console.log("user disconnected");
          });
        });
    }
);
