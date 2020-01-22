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

export const auth = {
    optional: jwt({
        credentialsRequired: false,
        getToken: (req) => getTokenFromHeaders(req),
        secret: "secret"
    }),
    required: jwt({
        getToken: (req) => getTokenFromHeaders(req, true),
        secret: "secret"
    }),
};
