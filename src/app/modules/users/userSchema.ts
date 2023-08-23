import { Schema, model } from 'mongoose';
import { IUser, IUserModel } from './userInterface';
import { productSchema } from '../products/prodcutSchema';

const userSchema = new Schema<IUser, IUserModel>(
  {
    builder: {
      required: true,
      type: [productSchema],
    },
    email: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
export const UserModel = model<IUser, IUserModel>('User', userSchema);
