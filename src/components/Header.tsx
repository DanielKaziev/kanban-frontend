import { PropsWithChildren } from "react";
import { useLogoutMutation } from "../services/token";
import { clearTokenState } from "../redux/slices/auth";
import { useDispatch } from "react-redux";
import Logo from "./Logo";
import { Stack, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import useHasRole from "../hooks/useHasRole";
import UserTitle from "./UserTitle";
import PageLinks from "./PageLinks";

const HeaderContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
  alignItems: "center",
  position: "static",
  borderBottom: "1px solid #F3F3FD",
  borderRadius: "0 0 15px 15px",
}));

const LinksContainer = styled(Stack)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
}));

const ResponsiveAppBar = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation("settings");
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const manager = useHasRole("MANAGER");

  const handleLogout = () => {
    logout("");
    dispatch(clearTokenState());
    navigate("/");
  };

  const handleGoHospitals = () => {
    navigate("/hospitals");
  };
  const handleGoApplication = () => {
    navigate("/applications");
  };

  return (
    <>
      <HeaderContainer direction={"row"}>
        <Stack flexGrow={1}>
          <Logo />
        </Stack>
        <LinksContainer>
          {!manager && (
            <PageLinks
              onClick={handleGoHospitals}
              link={{ to: "/hospitals", label: t("I18N_HOSPITALS") }}
            />
          )}
          {manager && (
            <PageLinks
              onClick={handleGoApplication}
              link={{ to: "/applications", label: t("I18N_APPLICATION") }}
            />
          )}
          <PageLinks
            onClick={handleLogout}
            link={{ to: "/", label: t("I18N_LOGOUT") }}
          />
        </LinksContainer>
        <Language />
        <UserTitle />
      </HeaderContainer>
      {children}
    </>
  );
};

export default ResponsiveAppBar;
