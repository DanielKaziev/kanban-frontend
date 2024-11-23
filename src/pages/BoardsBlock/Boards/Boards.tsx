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
      <Box px={theme.spacing(6)}>
        <Paper elevation={2} sx={{ borderRadius: "8px", mb: 2 }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ p: "16px", alignItems: "center" }}
          >
            <TextField
              sx={{ flexGrow: 1 }}
              label="Поиск доски..."
              size="small"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button
              variant="outlined"
              sx={{
                whiteSpace: "nowrap",
                textTransform: "none",
                borderColor: "primary.main",
              }}
              onClick={handleOpenModal}
            >
              Создать доску
            </Button>
          </Stack>
        </Paper>
      </Box>
      {!data && !isLoading && <NoContent />}
      {data && filteredBoards && filteredBoards.length > 0 ? (
        <Box px={theme.spacing(5)}>
          <Grid container spacing={2}>
            {filteredBoards.map((board, index) => (
              <Grid key={index} item xs={12} sm={6} xl={3}>
                <BoardItem data={board} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <NoContent />
      )}
      <CreateBoardModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onCreate={refetch}
      />
    </Page>
  );
};

export default BoardsList;
