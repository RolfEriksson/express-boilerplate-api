import { Errback, Request, Response } from "express";
import { ErrorHandler } from "../helpers/error";

const getToken = async () => "TOKEN_FOOO__BARRRR";

const validateCredentials = async (req: Request, res: Response, next: Errback) => {
  try {
    const { username, password} = req.body;
    if (!username || !password) {
      throw new ErrorHandler(422, "Missing required username and password fields");
    }
    const token = await getToken();
    res.send({
      token
    });
  } catch (error) {
    next(error);
  }
};

export default validateCredentials;
