import { FC, useState } from "react";
import {
  Button,
  Divider,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { IEvent } from "../../types/events";
import {
  useCreateTaskMutation,
  useGetEventTasksListQuery,
} from "../../services/events";
import TaskBlock, { TaskBox } from "./TaskBlock";
import CreateTaskModal from "./CreateTaskModal";

interface EventBlockProps {
  event: IEvent;
}

export const StyledEventBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: 300,
  minWidth: 300,
  maxWidth: 300,
  marginRight: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",
}));

const TaskList = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  overflowY: "auto",
  flexGrow: 1,
  "&::-webkit-scrollbar": {
    width: 4,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[400],
    borderRadius: 4,
  },
}));

const AddTaskButton = styled(Button)(({ theme }) => ({
  opacity: 0,
  transition: "opacity 0.2s",
  // alignSelf: "center",
  marginTop: theme.spacing(1),
  "&:hover": {
    opacity: 1,
  },
}));

const EventBlock: FC<EventBlockProps> = ({ event }) => {
  const { data, refetch } = useGetEventTasksListQuery(event.id);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const [createTask, { isLoading }] = useCreateTaskMutation();

  const handleCreateEvent = async (payload: any) => {
    if (!event.id) return;

    try {
      await createTask({
        name: payload.name,
        description: payload.description,
        eventId: event.id,
      }).unwrap();
      refetch();
      handleCloseModal();
    } catch (error) {
      console.error("Ошибка при создании события:", error);
    }
  };

  return (
    <StyledEventBlock>
      <Typography variant="h6" marginBottom={1}>
        {event.name}
      </Typography>
      <Divider />
      <TaskList spacing={2}>
        {data && data.map((task) => <TaskBlock key={task.id} task={task} />)}
        <AddTaskButton onClick={handleOpenModal}>
          Добавить задание
        </AddTaskButton>
      </TaskList>
      <Divider />
      <Typography variant="caption" marginTop={1}>
        Обновлено: {new Date(event.updatedAt).toLocaleDateString()}
      </Typography>
      <CreateTaskModal
        onCreate={handleCreateEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        eventId={event.id}
      />
    </StyledEventBlock>
  );
};

export default EventBlock;
