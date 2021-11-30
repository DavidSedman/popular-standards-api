import type { Handler } from 'express';

export type AsyncHandler = (
  ...args: Parameters<Handler>
) => Promise<ReturnType<Handler>>;

export default (fn: Handler): AsyncHandler =>
  (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
