/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUser {
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  passwordChangedAt?: Date;
  role?: 'user';
  status?: 'active' | 'blocked';
  isDeleted?: boolean;
  profileImg?: string;
}

export interface IUserModel extends Model<TUser> {
  isUserExistByEmail(email: string): Promise<TUser>;
  isPasswordMatched(plainTextPass: string, hashPass: string): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}
