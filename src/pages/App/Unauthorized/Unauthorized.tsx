import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tab from "@mui/material/Tab";
import PatientLogin from "./PatientLogin";
import StuffLogin from "./StuffLogin";
import Logo from "../../../components/Logo";
import { InputBox, LoginBox, LoginPaper, LogoStyle, TabsLogin } from "./style";
import { Stack, Typography } from "@mui/material";

const Unauthorized = () => {
  const { t } = useTranslation("login");
  const [value, setValue] = useState<number>(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <LoginBox>
      <LoginPaper>
        <LogoStyle>
          {/* <Logo width="100px" height="75px" /> */}
          <Typography sx={{p: "15px", fontSize: "2rem"}}>Kanban Board</Typography>
        </LogoStyle>
        <Stack width={"100%"} >
        <TabsLogin
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab sx={{ flexGrow: 1 }} label={t("I18N_LOGIN")} />
          <Tab sx={{ flexGrow: 1 }} label={t("I18N_REGISTER")} />
        </TabsLogin>
        </Stack>
        <InputBox>
          {value === 0 && <PatientLogin />}
          {value === 1 && <StuffLogin />}
        </InputBox>
      </LoginPaper>
    </LoginBox>
  );
};

export default Unauthorized;
