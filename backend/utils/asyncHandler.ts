import { Request, Response, NextFunction } from "express";
import ApiError from "./apiError";

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const asyncHandler = (requestHandler: AsyncRequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await requestHandler(req, res, next);
    } catch (error: any) {
      next(
        error instanceof Error
          ? error
          : new ApiError(500, "Internal Server Error")
      );
    }
  };
};

export default asyncHandler;
