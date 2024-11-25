import { TRoles } from "../types/person";
import useAppSelector from "../hooks/useAppSelector";
import useTokenData from "./useTokenData";
import { writeToken } from "../redux/slices/auth";
import { useDispatch } from "react-redux";

const useAuthorized = (): boolean => {
  const tokenA = localStorage.getItem("accessToken");
  const tokenR = localStorage.getItem("refreshToken");
  if (!tokenA || !tokenR) return false;
  return true;
};

export default useAuthorized;
