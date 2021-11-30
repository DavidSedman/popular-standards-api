import type { NextFunction, Request, Response } from 'express';
import asyncHandler from './asyncHandler';

export default asyncHandler(
  async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    res.status(404).end();
  }
);
