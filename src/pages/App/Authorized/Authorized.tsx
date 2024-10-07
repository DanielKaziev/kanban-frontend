import { useEffect } from "react";
import ResponsiveAppBar from "../../../components/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useHasRole from "../../../hooks/useHasRole";
import { useGetRequestByPatientQuery } from "../../../services/hospitals";
import { getFirstPagePath } from "../../../router";
import useTokenData from "../../../hooks/useTokenData";
import { Stack } from "@mui/material";

const Authorized = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useTokenData();
  const userRole = useHasRole("MANAGER");
  // const { data, isSuccess } = useGetRequestByPatientQuery("", {
  //   skip: userRole,
  // });
  const path = getFirstPagePath();

  useEffect(() => {
    if (pathname === "/") {
      navigate(path as string);
    }
  }, [isAuth]);

  // if (data?.attachment && isSuccess) {
  //   return <>Страница просмотра заявки</>
  // }

  return <Stack>
    <Outlet />
  </Stack>
  return (
    <ResponsiveAppBar>
      <Outlet />
    </ResponsiveAppBar>
  );
};

export default Authorized;
