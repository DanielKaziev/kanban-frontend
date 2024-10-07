import { Box, Button, Stack, Typography, styled } from "@mui/material";
import TableCustom from "../../../components/Table";
import { TTableData } from "../../../components/Table/types";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../../../components/Page";
import { useGetHospitalsListQuery } from "../../../services/hospitals";
import prepareTableData from "./prepData";
import { useGetApplicationByIdQuery, useGetApplicationsListQuery, useUpdateProcessigByIdMutation } from "../../../services/application";
import useTokenData from "../../../hooks/useTokenData";
import useHasRole from "../../../hooks/useHasRole";
import CircularProgress from '@mui/material/CircularProgress';
import dayjs from "dayjs";
import StatusChip from "../../../components/StatusChip";


const BoxItem = styled(Box)(({ theme }) => ({
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

const ApplicationView = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("application");
  const { id } = useParams();
  const { data } = useGetApplicationByIdQuery(id || "");
  const [ postStatus, {isSuccess} ] = useUpdateProcessigByIdMutation()

  console.log(data);
  const handleNavigate = () => navigate(`/applications`)

  const AppContainer = styled(Stack)(({ theme }) => ({
    // lineHeight: 3,
    width: "350px",
    padding: "10px",
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    margin: `${theme.spacing(2.5)} 0`,
    alignItems: "center",
    width: "150px",
  }));

  const StrongTypography = styled(Typography)(({ theme }) => ({
    fontWeight: "700",
    color: theme.palette.primary.main,
  }));

  const handleAccept = () => {
    if (id) {
      postStatus({id: id, status: "SUCCESS"})
    }
  };

  const handleReject = () => {
    if (id) {
      postStatus({id: id, status: "REJECTED"})
    }
  };

useEffect(()=>{
  if (isSuccess) {
    handleNavigate()
  }
},[isSuccess])

  return <BoxItem>
    {!data &&     <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>}
    {data &&   <Stack spacing={2}>
    <AppContainer spacing={3}>
      <StrongTypography variant="h5">
        {t("I18N_APPLICATION_NAME")}
      </StrongTypography>
      <Stack>
        {t("I18N_FIRST_NAME")}: {data.patient.firstName}
      </Stack>
      <Stack>
        {t("I18N_LAST_NAME")}: {data.patient.lastName}
      </Stack>
      <Stack>
        {t("I18N_IIN")}: {data.patient.iin}
      </Stack>
      <Stack>
        {t("Адрес")}: {data.patient.address}
      </Stack>
      <Stack>
        {t("Дата подачи заявки")}: {dayjs(data.createdDate).format("DD.MM.YYYY")}
      </Stack>
      <Stack>
        <StatusChip status={data.statusName}/>
      </Stack>
      {data.statusName !== "SUCCESS" && data.statusName !== "REJECTED" && <Stack direction="row" spacing={2} justifyContent="space-between">
        <StyledButton variant="outlined" onClick={handleAccept}>
          {t("I18N_ACCEPT")}
        </StyledButton>
        <StyledButton variant="outlined" onClick={handleReject}>
          {t("I18N_REJECT")}
        </StyledButton>
      </Stack>}
    </AppContainer>
  </Stack>}
</BoxItem>

};

export default ApplicationView;
