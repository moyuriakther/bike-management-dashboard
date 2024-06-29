import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AuthService } from './auth.server';
import sendResponse from '../../utils/sendResponse';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body);
  //set refresh token to cookie
  const { accessToken } = result;
  //   res.cookie('refreshToken', refreshToken, {
  //     secure: config.node_env === 'production',
  //     httpOnly: true,
  //   });
  sendResponse(res, {
    success: true,
    message: 'Login Successfully',
    statusCode: httpStatus.OK,
    data: { accessToken },
  });
});

export const AuthController = {
  loginUser,
};
