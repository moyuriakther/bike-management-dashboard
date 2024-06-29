import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { UserModel } from '../user/user.model';
import { TUserLogin } from './auth.interface';
import { createToken } from './auth.utils';
import config from '../../config';

const loginUser = async (payload: TUserLogin) => {
  const user = await UserModel.isUserExistByEmail(payload?.email);
  //check user is exist or not
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user Not found');
  }
  //check password is correct
  if (!(await UserModel.isPasswordMatched(payload.password, user.password))) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Password Not Matched');
  }

  const jwtPayload = { email: user.email, role: user.role };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  //   const refreshToken = createToken(
  //     jwtPayload,
  //     config.jwt_refresh_secret as string,
  //     config.jwt_refresh_expires_in as string,
  //   );

  return {
    accessToken,
  };
};
export const AuthService = {
  loginUser,
};
