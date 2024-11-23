import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Box, IconButton, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearTokenState } from "../redux/slices/auth";
import { useLogoutMutation } from "../services/token";
import useTokenData from "../hooks/useTokenData";
import LanguageSwitcher from "./Language";

const HeaderBox = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  padding: theme.spacing(2, 10),
  width: "100%",
  minHeight: "88px",
  boxShadow: theme.shadows[2],
}));

const LogoBox = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  cursor: "pointer",
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

const UserBox = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  color: theme.palette.text.primary,
}));

const Header = () => {
  const userData = useTokenData();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout("");
    dispatch(clearTokenState());
    navigate("/");
  };

  const goHome = () => {
    navigate("/home");
  };

  return (
    <HeaderBox direction="row" alignItems="center" spacing={2}>
      <LogoBox onClick={goHome}>Kanban</LogoBox>
      <Stack flexGrow={1} />
      {userData && (
        <UserBox>
          <Typography variant="body1">{userData.username}</Typography>
        </UserBox>
      )}
      <LanguageSwitcher />
      <IconButton aria-label="exit" onClick={handleLogout}>
        <ExitToAppIcon color="error" />
      </IconButton>
    </HeaderBox>
  );
};

export default Header;
