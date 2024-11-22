import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Page from "../../../components/Page";
import { useLogoutMutation } from "../../../services/token";
import { clearTokenState } from "../../../redux/slices/auth";
import { useDispatch } from "react-redux";
import PageLinks from "../../../components/PageLinks";
import { useGetOwnBoardsListQuery } from "../../../services/boards";
import BoardItem from "../../../components/Board/BoardItem";

const testdata = {
  id: "5380c258-47cb-47cd-96c7-300af2355e82",
  name: "Board",
  description: "Description for New Board",
  userRole: "host",
  isPrivate: true,
  createdAt: "2024-11-18T19:48:23.188Z",
  updatedAt: "2024-11-18T19:48:23.188Z",
};

const BoardsList = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("settings");

  const { data } = useGetOwnBoardsListQuery("");
  console.log(data);

  return <Page></Page>;
};

export default BoardsList;
