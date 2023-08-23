import { IUser } from './userInterface';

const createUser = async (payload: IUser) => {
  console.log(payload);
  const result = 'connect';
  return result;
};
export const UserService = { createUser };
