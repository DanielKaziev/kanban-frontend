import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getFirstPagePath } from "../../../router";
import useTokenData from "../../../hooks/useTokenData";
import { Stack } from "@mui/material";

const Authorized = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useTokenData();
  const path = getFirstPagePath();
  const tkdata = useTokenData();

  console.log(tkdata);
  

  useEffect(() => {
    if (pathname === "/") {
      navigate(path as string);
    }
  }, [isAuth]);

  return <Stack>
    <Outlet />
  </Stack>
};

export default Authorized;
