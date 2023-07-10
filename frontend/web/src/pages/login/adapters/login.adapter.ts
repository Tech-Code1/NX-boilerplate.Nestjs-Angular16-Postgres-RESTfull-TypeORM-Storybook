import { BaseResponseType } from '../../../models/types';
import { managerError } from '../../../utilities';
import { ILoginResponse, IUser } from '../models/types';

export const LoginAdapter = (
  resp: ILoginResponse
): IUser | BaseResponseType => {
  const error = managerError(resp);
  if (error) {
    return error;
  }

  const { login, success, code, status } = resp;
  const { user, token } = login;

  return {
    token,
    id: user.id,
    email: user.email,
    username: user.username,
    isActive: user.isActive,
    isBlocked: user.isBlocked,
    roles: user.roles,
    status,
    success,
    code,
  };
};
