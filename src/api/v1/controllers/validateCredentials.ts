import { Request, Response } from "express";

const getToken = () => "TOKEN_FOOO__BARRRR";

const validateCredentials = (req: Request, res: Response) => {
  res.send({
    token: getToken()
  });
};

export default validateCredentials;
