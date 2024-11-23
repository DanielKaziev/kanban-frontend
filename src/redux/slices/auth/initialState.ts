import { jwtDecode } from "jwt-decode";
import { IUserData } from "../../../types/token";

export const DEFAULT: IUserData = {
  id: "",
  username: "",
  email: "",
  state: "",
  role: "",
  permissions: [],
  isAuth: false,
  iat: 0,
  exp: 0,
};

const getInitialState = (): IUserData => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken && accessToken !== "undefined") {
    const userData = jwtDecode(accessToken) as IUserData;
    return { ...userData, isAuth: true };
  }

  return { ...DEFAULT, isAuth: false };
};

export default getInitialState();
