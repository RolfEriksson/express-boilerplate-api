import { Errback, Request, Response } from "express";
import { ErrorHandler } from "../helpers/error";

const getToken = async (username: string, password: string) => {
  try {
    if (!(username === "rolf.eriksson" && password === "password1234")) {
      throw new Error("INCORRECT_CREDENTIALS");
    }
    return "TOKENASDASDASD";
  } catch (error) {
    throw new ErrorHandler(400, error.message);
  }
};

const validateCredentials = async (req: Request, res: Response, next: Errback) => {
  try {
    const { username, password} = req.body;
    if (!username || !password) {
      throw new ErrorHandler(422, "Missing required username and password fields");
    }
    const token = await getToken(username, password);
    res.send({
      token
    });
  } catch (error) {
    next(error);
  }
};

export default validateCredentials;
