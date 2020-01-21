import { Response } from "express";

class ErrorHandler extends Error {
    public statusCode: number;
    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err: ErrorHandler, res: Response) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    message,
    status: "error",
    statusCode,
  });
};
export { ErrorHandler, handleError };
