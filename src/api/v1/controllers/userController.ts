import { Errback, Request, Response } from "express";
import { ErrorHandler } from "../helpers/error";
import models from "../models";

export const  getUsers = (req: Request, res: Response) => {
  res.send({
    users: [
      { id: 1, name: "Rolf Eriksson" },
      { id: 2, name: "Juan" }
    ]
  });
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const createdUser = new models.User({ username: "USER" });
    await createdUser.save();
    res.send();
  } catch (error) {
    throw new ErrorHandler(400, "Error creating user");
  }
};
