import { Button, Stack, styled } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import Page from "../../../components/Page";
import {
  useGetHospitalsByIdQuery,
  usePostRequestByIdMutation,
} from "../../../services/hospitals";
import useTokenData from "../../../hooks/useTokenData";
import Map from "../../../components/Map";

const ContentStack = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
  alignItems: "center",
  border: "1px solid #F3F3FD",
  borderRadius: "15px",
  width: "400px",
}));

const HospitalsRegister = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: hospital } = useGetHospitalsByIdQuery(id as string);
  const [postReq] = usePostRequestByIdMutation();

  const userData = useTokenData();

  const handlePost = () => {
    if (id) {
      postReq(id);
    }
    navigate("/hospitals");
  };

  return (
    <Page>
      <Stack spacing={5} direction="row">
        <ContentStack spacing={3}>
          <Stack>Название: {hospital?.nameRU}</Stack>
          <Stack>Адрес: {hospital?.address}</Stack>
          <Stack>Частная: {hospital?.isPrivate ? "Да" : "Нет"}</Stack>
          {hospital && <Map latitude={hospital.lat} longitude={hospital.lon} />}
        </ContentStack>
        <ContentStack spacing={3}>
          <Stack>Фамилия: {userData.lastName}</Stack>
          <Stack>Имя: {userData.firstName}</Stack>

          <Stack>Отчество: {userData.secondName}</Stack>
          <Stack>ИИН: {userData.iin}</Stack>
        </ContentStack>
      </Stack>
      <Button onClick={handlePost} variant="contained">
        Отправить запрос на прикрепление
      </Button>
    </Page>
  );
};

export default HospitalsRegister;
