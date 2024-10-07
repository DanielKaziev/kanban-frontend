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
      <AppContainer>
        <StrongTypography variant="h5">
          {t("I18N_APPLICATION_NAME")}
        </StrongTypography>
        <Stack>
          {t("I18N_FIRST_NAME")}: {appData.firstName}
        </Stack>
        <Stack>
          {t("I18N_LAST_NAME")}: {appData.lastName}
        </Stack>
        <Stack>
          {t("I18N_SECOND_NAME")}: {appData.secondName}
        </Stack>
        <Stack>
          {t("I18N_IIN")}: {appData.iin}
        </Stack>
        <Stack>
          {t("I18N_EMAIL")}: {appData.email}
        </Stack>
      </AppContainer>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <StyledButton variant="outlined" onClick={handleAccept}>
          {t("I18N_ACCEPT")}
        </StyledButton>
        <StyledButton variant="outlined" onClick={handleReject}>
          {t("I18N_REJECT")}
        </StyledButton>
      </Stack>
    </Stack>
  );
};

export default AppData;
