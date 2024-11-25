import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const NoContentIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "48px",
}));

const NoContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
  textAlign: "center",
}));

const NoContent = () => {
  return (
    <Stack
      flexGrow={1}
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        sx={{ padding: "24px", borderRadius: "12px", textAlign: "center" }}
      >
        <NoContentIcon>
          <SentimentDissatisfiedIcon fontSize="inherit" />
        </NoContentIcon>
        <NoContentText variant="h6">Нет записей...</NoContentText>
        <Typography variant="body2" color="text.secondary">
          Добавьте данные, чтобы они появились здесь.
        </Typography>
      </Paper>
    </Stack>
  );
};

export default NoContent;
