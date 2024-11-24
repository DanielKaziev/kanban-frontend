import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getFirstPagePath } from "../../../router";
import useTokenData from "../../../hooks/useTokenData";
import { Stack } from "@mui/material";
import Header from "../../../components/Header";

const Authorized = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useTokenData();
  const path = getFirstPagePath();

  useEffect(() => {
    if (pathname === "/") {
      navigate(path as string);
    }
  }, [isAuth]);

  return (
    <Stack height={"100vh"}>
      <Header />
      <Outlet />
    </Stack>
  );
};

export default Authorized;
