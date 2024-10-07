import { TRoles } from "../types/person";
import useAppSelector from "../hooks/useAppSelector";
import useTokenData from "./useTokenData";

const useHasRole = (role?: TRoles): boolean => {
  const roleName = useTokenData();

  if (roleName.roleName === role) {
    return true;
  }
  if (!role) {
    return true;
  }
  return false;
};

export default useHasRole;
