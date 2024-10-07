export enum ETokenState {
  INVALID,
  VALID,
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IForgotPassword {
  password: string;
  confirm_password: string;
}

export interface IToken {
  tokenData: ITokenData;
  user: ITokenUserData;
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
