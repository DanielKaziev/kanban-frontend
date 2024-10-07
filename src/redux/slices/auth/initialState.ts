import Config from "../../../config/Config";
import { IAuthInitState } from "./types";

export const DEFAULT: IAuthInitState = {
  id: "",
  email: "",
  username: "",
  roleName: "",
  isAuth: false,
};

const getInitialState = (): IAuthInitState => {
  const accessToken = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user")

  if (accessToken && accessToken !== "undefined" && user) {
    return {...JSON.parse(user), isAuth: true};
  }


  return {...DEFAULT, isAuth: false};
};

export default getInitialState();
