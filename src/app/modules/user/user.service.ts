import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUser = async (payload: TUser) => {
  try {
    const newUser = await UserModel.create(payload);
    return newUser;
  } catch (error) {
    throw new Error('Failed to Create User');
  }
};

const getUsers = async () => {
  const result = await UserModel.find({});
  return result;
};
export const UserServices = {
  createUser,
  getUsers,
};
