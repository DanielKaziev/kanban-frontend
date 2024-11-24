import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../../../components/Page";
import {
  useGetBoardEventsByidListQuery,
  useCreateEventMutation,
} from "../../../services/boards";
import EventBlock, {
  StyledEventBlock,
} from "../../../components/Board/EventBlock";
import NoContent from "../../../components/NoContent";
import { useState } from "react";
import CreateEventModal from "../../../components/Board/CreateEventModal";

// Стили для горизонтального скролла
const HorizontalScroll = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  overflowX: "auto",
  flexGrow: 1,
  overflowY: "hidden",
  padding: theme.spacing(1),
  "&::-webkit-scrollbar": {
    height: 8,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[400],
    borderRadius: 4,
  },
}));

const ModalContent = styled(Paper)(({ theme }) => ({
  width: "400px",
  padding: theme.spacing(3),
  margin: "auto",
  borderRadius: "8px",
  boxShadow: theme.shadows[5],
}));

const BoardsList = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const theme = useTheme();
  const { data, refetch } = useGetBoardEventsByidListQuery(boardId ?? "");

  const [isModalOpen, setModalOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventOrder, setEventOrder] = useState("");
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleCreateEvent = async (payload: any) => {
    if (!boardId) return;

    try {
      await createEvent({ name: payload.name, boardId: boardId }).unwrap();
      refetch();
      handleCloseModal();
    } catch (error) {
      console.error("Ошибка при создании события:", error);
    }
  };

  return (
    <Page noSpacing>
      <Box px={theme.spacing(1)}>
        <Paper elevation={2} sx={{ borderRadius: "8px", mb: 2 }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ p: "16px", alignItems: "center" }}
          >
            <Stack flexGrow={1} />
            <Button onClick={handleOpenModal}>Добавить событие</Button>
          </Stack>
        </Paper>
      </Box>
      <HorizontalScroll>
        {data && data?.length < 1 && <NoContent />}
        {data &&
          data.map((event) => <EventBlock key={event.id} event={event} />)}
      </HorizontalScroll>
      <CreateEventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreate={handleCreateEvent}
        isLoading={false}
      />
    </Page>
  );
};

export default BoardsList;
