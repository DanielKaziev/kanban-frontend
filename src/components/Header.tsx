import { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Page from "./Page";
import { Box, Button, IconButton } from "@mui/material";
import useTokenData from "../hooks/useTokenData";
import { clearTokenState } from "../redux/slices/auth";
import { useLogoutMutation } from "../services/token";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PageLinks from "./PageLinks";
import { useTranslation } from "react-i18next";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const HeaderBox = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
  width: "100%",
  minHeight: "72px",
}));

const LogoBox = styled(Stack)(({ theme }) => ({
  margin: "auto",
  fontSize: "1.5rem",
  cursor: "pointer",
}));

const UserBox = styled(Stack)(({ theme }) => ({
  margin: "auto !important",
}));

const Header = () => {
  const userData = useTokenData();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("settings");

  const handleLogout = () => {
    logout("");
    dispatch(clearTokenState());
    navigate("/");
  };

  const goHome = () => {
    navigate("/home");
  };

  console.log(userData);

  return (
    <HeaderBox spacing={1} direction={"row"}>
      <LogoBox onClick={goHome}>Kanban</LogoBox>
      <Stack flexGrow={1} />
      <UserBox>{userData.username}</UserBox>
      <IconButton aria-label="exit" onClick={handleLogout}>
        <ExitToAppIcon />
      </IconButton>
    </HeaderBox>
  );
};

export default Header;
