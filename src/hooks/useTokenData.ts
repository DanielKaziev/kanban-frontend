import { IAuthInitState } from "types/token";
import useAppSelector from "./useAppSelector";

const useTokenData = ():IAuthInitState =>
  useAppSelector((state) => state.auth);

export default useTokenData;
