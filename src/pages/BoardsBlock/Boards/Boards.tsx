import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Page from "../../../components/Page";
import { useLogoutMutation } from "../../../services/token";
import { clearTokenState } from "../../../redux/slices/auth";
import { useDispatch } from "react-redux";
import PageLinks from "../../../components/PageLinks";

const BoardsList = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("settings");

  const handleLogout = () => {
    logout("");
    dispatch(clearTokenState());
    navigate("/");
  };
  return (
    <Page>
      <Stack
        height={"100%"}
        width={"100%"}
        m={"auto"}
        justifyContent="center"
        alignItems="center"
      >
        Comming Soon...
        <PageLinks
            onClick={handleLogout}
            link={{ to: "/", label: t("I18N_LOGOUT") }}
          />
      </Stack>
    </Page>
  );
};

export default BoardsList;
