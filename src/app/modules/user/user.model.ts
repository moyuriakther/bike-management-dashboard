import { Schema, model } from 'mongoose';
import { IUserModel, TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser, IUserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    contactNumber: { type: String, required: true },
    passwordChangedAt: { type: Date },
    role: { type: String, default: 'user' },
    status: {
      type: String,
      enum: { values: ['active', 'blocked'] },
      default: 'active',
    },
    isDeleted: { type: Boolean, default: false },
    profileImg: { type: String },
  },
  {
    timestamps: true,
  },
);

//hash password before save to DB
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

//return null password to response
userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

// create static
userSchema.statics.isUserExistByEmail = async function (email) {
  return await UserModel.findOne({ email }).select('+password');
};
userSchema.statics.isPasswordMatched = async function (
  plainTextPass,
  hashPass,
) {
  return await bcrypt.compare(plainTextPass, hashPass);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number,
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const UserModel = model<TUser, IUserModel>('User', userSchema);
