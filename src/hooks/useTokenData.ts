import { IAuthInitState } from "redux/slices/auth/types";
import useAppSelector from "./useAppSelector";

const useTokenData = ():IAuthInitState =>
  useAppSelector((state) => state.auth);

export default useTokenData;
