import { ROLES } from '@db/constants';

export interface IUser {
  token?: string;
  id: string;
  email: string;
  username: string;
  isActive: boolean;
  isBlocked: boolean;
  roles: ROLES[];
}
/* export interface ILoginResponse {
  data: IUser;
  response: BaseResponseType;
} */

export interface ILogin {
  token: string;
  user: IUser;
}

export interface ILoginData {
  email: string;
  password: string;
}

export enum AuthStatus {
  CHECKING = 'CHECKING',
  AUTHENTICATED = 'AUTHENTICATED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
}
