import { Request } from "express";
import jwt from "express-jwt";
import { ErrorHandler } from "./error";

const getTokenFromHeaders = (req: Request, tokenRequired?: boolean) => {
  const {
    headers: { authorization }
  } = req;
  if (authorization && authorization.split(" ")[0] === "Bearer") {
    return authorization.split(" ")[1];
  }
  if (tokenRequired) {
      throw new ErrorHandler(401, "BEARER_TOKEN_REQUIRED");
  }
  return null;
};

const secretCallback = (req: Request, payload: {}, done: (err: any, secret: string) => void) => {
  done(null, process.env.JWT_SECRET);
};

export const auth = {
    optional: jwt({
        credentialsRequired: false,
        getToken: (req) => getTokenFromHeaders(req),
        secret: secretCallback
    }),
    required: jwt({
        getToken: (req) => getTokenFromHeaders(req, true),
        secret: secretCallback
    }),
};
