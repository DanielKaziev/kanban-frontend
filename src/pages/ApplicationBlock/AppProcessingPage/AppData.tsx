import { Button, Stack, Typography, styled, useTheme } from "@mui/material";
import useTokenData from "../../../hooks/useTokenData";
import { useTranslation } from "react-i18next";
import useHasRole from "../../../hooks/useHasRole";
const AppContainer = styled(Stack)(({ theme }) => ({
  lineHeight: 3,
  width: "250px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: `${theme.spacing(2.5)} 0`,
  alignItems: "center",
  width: "100px",
}));

const StrongTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  color: theme.palette.primary.main,
}));

const AppData = () => {
  const appData = useTokenData();
  const { t } = useTranslation("application");
  const hasRole = useHasRole();

  const handleAccept = () => {
    if (hasRole) {
      console.log("Accepted");
    }
  };

  const handleReject = () => {
    if (hasRole) {
      console.log("Rejected");
    }
  };
  return (
    <Stack spacing={2}>
    </Stack>
  );
};

export default AppData;
