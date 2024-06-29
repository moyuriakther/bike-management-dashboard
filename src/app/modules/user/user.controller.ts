import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);
  sendResponse(res, {
    success: true,
    message: 'User is Created Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});
const allUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getUsers();
  sendResponse(res, {
    success: true,
    message: 'Users Retrieved Successfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const UserControllers = {
  createUser,
  allUsers,
};
