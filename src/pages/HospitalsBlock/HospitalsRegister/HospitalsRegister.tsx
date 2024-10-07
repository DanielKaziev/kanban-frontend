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

    </Page>
  );
};

export default HospitalsRegister;
