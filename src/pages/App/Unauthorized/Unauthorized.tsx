import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tab from "@mui/material/Tab";
import PatientLogin from "./PatientLogin";
import StuffLogin from "./StuffLogin";
import Logo from "../../../components/Logo";
import { InputBox, LoginBox, LoginPaper, LogoStyle, TabsLogin } from "./style";

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
          <Logo width="100px" height="75px" />
        </LogoStyle>
        <TabsLogin
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab sx={{ flexGrow: 1 }} label={t("I18N_PATIENT")} />
          <Tab sx={{ flexGrow: 1 }} label={t("I18N_MANAGER")} />
        </TabsLogin>
        <InputBox>
          {value === 0 && <PatientLogin />}
          {value === 1 && <StuffLogin />}
        </InputBox>
      </LoginPaper>
    </LoginBox>
  );
};

export default Unauthorized;
