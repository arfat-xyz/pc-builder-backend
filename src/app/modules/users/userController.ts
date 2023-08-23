import httpStatus from 'http-status';
import catchAsync from '../../../Shared/cacheAsync';
import sendResponse from '../../../Shared/sentResponse';
import { Request, Response } from 'express';
import { UserService } from './userService';
import { IUser } from './userInterface';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const payload: IUser = req.body;
  const result = await UserService.createUser(payload);
  sendResponse<string>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Produxt created successfully.`,
    data: result,
  });
});
export const UserController = { createUser };
