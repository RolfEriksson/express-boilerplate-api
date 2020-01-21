import express from "express";

const api = express();

api.get("/", (req, res) => {
    res.send({
        message: "Hello from the API",
    });
});
export default api;
