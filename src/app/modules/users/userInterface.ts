import { Model } from 'mongoose';
import { IProduct } from '../products/productInterface';

export type IUser = {
  email: string;
  image: string;
  name: string;
  builder: IProduct[];
};
export type IUserModel = Model<IUser, Record<string, unknown>>;
