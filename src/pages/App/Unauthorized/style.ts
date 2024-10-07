import { Box, Tabs, TextField, styled } from "@mui/material";

export const LoginBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
});

export const LoginPaper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  width: "600px",
  // height: "450px",
  border: `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: "white",
  borderRadius: "8px",
  marginBottom: "40px",
}));

export const TabsLogin = styled(Tabs)(({ theme }) => ({
  width: "100%",
  m: 0,
}));

export const LogoStyle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  marginBottom: "12px",
});
export const InputBox = styled(Box)(({ theme }) => ({
  width: "80%",
  maxWidth: theme.spacing(64),
  margin: "auto",
  padding: `${theme.spacing(3)} ${theme.spacing(3)}`,
}));

export const InputField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    border: "none",
    boxShadow: "none",
  },
}));
