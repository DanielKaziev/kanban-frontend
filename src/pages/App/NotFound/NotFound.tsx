import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import NotFoundIcon from "./NotFoundIcon";
import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(7),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "5.5rem",
  fontWeight: "bold",
  color: theme.palette.text.primary,
}));

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("login");

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
      <StyledBox>
        <Box>
          <StyledTypography variant="h1">404</StyledTypography>
          <Typography
            color="text.primary"
            mb={2}
            sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            {t("I18N_PAGE_NOT_FOUND")}
          </Typography>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            sx={{ py: "9px", px: "20px" }}
          >
            {t("I18N_RETURN_TO_MAIN_LINK")}
          </Button>
        </Box>

        <NotFoundIcon />
      </StyledBox>
    </Stack>
  );
};

export default NotFound;
