import Header from "../../../components/Header";
import Page from "../../../components/Page";
import { Box, styled } from "@mui/material";
import AppData from "./AppData";
import { useUpdateProcessigByIdMutation } from "services/application";
export const BoxItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "500px",
  margin: `${theme.spacing(9)} auto auto`,
}));
const AppProcessingPage = () => {
  return (
    <>
      <Page>
        <BoxItem>
          <AppData />
        </BoxItem>
      </Page>
    </>
  );
};

export default AppProcessingPage;
