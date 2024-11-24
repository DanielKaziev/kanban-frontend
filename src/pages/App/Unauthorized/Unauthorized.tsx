import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tab from "@mui/material/Tab";
import Login from "./Login";
import Registration from "./Registration";
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
          <Typography sx={{ p: "15px", fontSize: "2rem" }}>
            Kanban Board
          </Typography>
        </LogoStyle>
        <Stack width={"100%"}>
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
          {value === 0 && <Login />}
          {value === 1 && <Registration />}
        </InputBox>
      </LoginPaper>
    </LoginBox>
  );
};

export default Unauthorized;
