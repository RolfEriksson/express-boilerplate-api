import { Errback, Request, Response } from "express";

const getToken = () => "TOKEN_FOOO__BARRRR";

const validateCredentials = (req: Request, res: Response, next: Errback) => {
  try {
    console.log(req.body);
    res.send({
      token: getToken()
    });
  } catch (error) {
    next(error);
  }
};

export default validateCredentials;
