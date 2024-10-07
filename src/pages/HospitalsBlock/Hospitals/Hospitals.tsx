import { Button, Stack } from "@mui/material";
import TableCustom from "../../../components/Table";
import { TTableData } from "../../../components/Table/types";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Page from "../../../components/Page";
import { useGetHospitalsListQuery } from "../../../services/hospitals";
import prepareTableData from "./prepData";
import PageLinks from "../../../components/PageLinks";
import { useLogoutMutation } from "../../../services/token";
import { clearTokenState } from "../../../redux/slices/auth";
import { useDispatch } from "react-redux";

const HospitalsList = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("settings");

  const handleLogout = () => {
    logout("");
    dispatch(clearTokenState());
    navigate("/");
  };
  return (
    <Page>
      <Stack
        height={"100%"}
        width={"100%"}
        m={"auto"}
        justifyContent="center"  // Центрирование по вертикали
        alignItems="center"      // Центрирование по горизонтали
      >
        Comming Soon...
        <PageLinks
            onClick={handleLogout}
            link={{ to: "/", label: t("I18N_LOGOUT") }}
          />
      </Stack>
    </Page>
  );
};

export default HospitalsList;
