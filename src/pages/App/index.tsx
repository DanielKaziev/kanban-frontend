import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useRefreshQuery } from "../../services/token";
import { ETokenState } from "../../types/token";
import { clearTokenState } from "../../redux/slices/auth";
import useAppSelector from "../../hooks/useAppSelector";
import Unauthorized from "./Unauthorized";
import Authorized from "./Authorized";
import useAuthorized from "../../hooks/useAuthorized";

const App = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const isAvl = useAuthorized()
// console.log(isAvl);

  useEffect(() => {
    if (!isAvl) {
      navigate("/");
    }
  }, [isAvl]);

  return isAvl ? <Authorized /> : <Unauthorized />;
};

export default App;
