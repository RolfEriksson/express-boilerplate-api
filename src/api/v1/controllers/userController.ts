import { Request, Response } from "express";

export const  getUsers = (req: Request, res: Response) => {
  res.send({
    users: [
      { id: 1, name: "Rolf Eriksson" },
      { id: 2, name: "Juan" }
    ]
  });
};
