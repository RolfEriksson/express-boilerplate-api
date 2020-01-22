import { Request, Response } from "express";
import { ErrorHandler } from "../helpers/error";
import models from "../models";

export const  getUsers = async (req: Request, res: Response) => {
    try {
      const foundUsers = await models.User.find({});
      res.send(foundUsers);
    } catch (error) {
      throw new ErrorHandler(400, error.message);
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("MISSING_USERNAME_PASSWORD");
    }
    const instancedUser = new models.User({ username, password });
    const createdUser = await instancedUser.save();
    res.send(createdUser);
  } catch (error) {
    throw new ErrorHandler(400, "Error creating user");
  }
};
