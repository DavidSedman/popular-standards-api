import type { NextFunction, Request, Response } from 'express';
import { ValidationError } from '../errors/validation';

export default async (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  let httpstatusCode = 500;

  if (error instanceof ValidationError) {
    httpstatusCode = 400;
  }

  if (httpstatusCode === 500) {
    process.stderr.write(
      `Error: ${error.message}\nName: ${error.name}\nTrace: ${error.stack}`
    );
  }

  res.status(httpstatusCode).json({
    message: error.message,
    stack: error.stack
  });
};
