import { IAuthInitState, IUserData } from "types/token";
import useAppSelector from "./useAppSelector";

const useTokenData = (): IUserData => useAppSelector((state) => state.auth);

export default useTokenData;
