export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  username: string;
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
