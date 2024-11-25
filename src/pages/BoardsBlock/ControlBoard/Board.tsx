import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  useCreateEventMutation,
  useGetBoardByIdQuery,
  useGetBoardEventsByidListQuery,
  useUpdateTaskEventMutation,
} from "../../../services/boards";
import EventBlock from "../../../components/Board/EventBlock";
import NoContent from "../../../components/NoContent";
import CreateEventModal from "../../../components/Board/CreateEventModal";
import { useParams } from "react-router-dom";
import Page from "../../../components/Page";
import { useDispatch } from "react-redux";
import eventsApi from "../../../services/events";

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

const BoardsList = () => {
  const theme = useTheme();
  const { boardId } = useParams();
  const { data: events, refetch } = useGetBoardEventsByidListQuery(
    boardId ?? ""
  );
  const { data: board } = useGetBoardByIdQuery(boardId ?? "");
  const [updateTaskEvent] = useUpdateTaskEventMutation();
  const dispath = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const onDragEnd = async (result: any) => {
    const { source, destination, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) return;

    try {
      await updateTaskEvent({
        taskId: draggableId,
        newEventId: destination.droppableId,
      }).unwrap();
      refetch();
      dispath(eventsApi.util.resetApiState());
    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);
    }
  };

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
      <Paper elevation={2} sx={{ borderRadius: "8px", mb: 2 }}>
        <Stack
          spacing={2}
          direction="row"
          sx={{ p: "16px", alignItems: "center" }}
        >
          {board && (
            <>
              {" "}
              <Typography
                variant="h1"
                sx={{ fontSize: "1.5rem", fontWeight: 500 }}
              >
                {board.name}
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: board.isPrivate ? "#d84315" : "#388e3c",
                  fontWeight: 500,
                }}
              >
                {board.isPrivate ? "Приватная" : "Публичная"}
              </Typography>
            </>
          )}
          <Stack flexGrow={1} />
          <Button onClick={handleOpenModal}>Добавить событие</Button>
        </Stack>
      </Paper>
      <HorizontalScroll>
        <DragDropContext onDragEnd={onDragEnd}>
          {events && events.length > 0 ? (
            events.map((event) => (
              <Droppable key={event.id} droppableId={event.id}>
                {(provided) => (
                  <Stack
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ marginRight: theme.spacing(2), height: "100%" }}
                  >
                    <EventBlock event={event} />
                    {provided.placeholder}
                  </Stack>
                )}
              </Droppable>
            ))
          ) : (
            <NoContent />
          )}
        </DragDropContext>
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
