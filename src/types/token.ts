export enum ETokenState {
  INVALID,
  VALID,
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  username: string;
}

export interface IForgotPassword {
  password: string;
  confirm_password: string;
}

export interface IToken {
  tokenData: ITokenData;
}

export interface ITokenData {
  accessToken: string;
  refreshToken: string;
}

export interface ITokenUserData {
  address: string;
  firstName: string;
  hospitalId: string | null;
  id: number;
  iin: string;
  lastName: string;
  secondName: string;
  roleName: string;
}
export interface IUserAuth extends ITokenUserData {
  isAuth: boolean;
}

export interface IAuthInitState {
  id: string;
  email: string;
  username: string;
  isAuth: boolean;
  roleName: string;
}

export interface IUserData {
  id: string;
  username: string;
  email: string;
  state: string;
  role: string;
  permissions: string[];
  isAuth: boolean;
  iat: number;
  exp: number;
}
