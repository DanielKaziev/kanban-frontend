import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Page from "../../../components/Page";
import { useGetOwnBoardsListQuery } from "../../../services/boards";
import BoardItem from "../../../components/Board/BoardItem";
import NoContent from "../../../components/NoContent";
import CreateBoardModal from "../../../components/Board/CreateBoardModal";

const BoardsList = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const { data, isLoading, refetch } = useGetOwnBoardsListQuery("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredBoards = data?.filter((board) =>
    board.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Page>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime enim
      sunt animi illo laboriosam officiis asperiores cupiditate unde,
      perferendis mollitia in numquam expedita possimus nobis aperiam repellat
      qui aliquam.
    </Page>
  );
};

export default BoardsList;
