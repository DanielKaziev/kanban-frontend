import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import useTokenData from "../../../hooks/useTokenData";
import Unauthorized from "../Unauthorized";

const NotFoundWrapper = () => {
  const { isAuth } = useTokenData();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate(pathname);
  }, [isAuth]);

  return isAuth ? <NotFound /> : <Unauthorized />;
};
export default NotFoundWrapper;
