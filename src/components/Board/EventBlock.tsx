import { FC, useEffect, useState } from "react";
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
import { Draggable } from "react-beautiful-dnd";

interface EventBlockProps {
  event: IEvent;
}

export const StyledEventBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: 300,
  minWidth: 300,
  flexGrow: 1,
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
        {data &&
          data.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskBlock task={task} />
                </div>
              )}
            </Draggable>
          ))}
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

// import React from "react";
// import { Paper, Stack, Typography, Divider } from "@mui/material";
// import { Draggable } from "react-beautiful-dnd";
// import TaskBlock from "./TaskBlock";
// import { IEvent } from "../../types/events";
// import { useGetEventTasksListQuery } from "../../services/events";

// interface EventBlockProps {
//   event: IEvent;
// }

// const EventBlock: React.FC<EventBlockProps> = ({ event }) => {
//   const { data, refetch } = useGetEventTasksListQuery(event.id);

//   return (
//     <Paper elevation={3} sx={{ padding: 2, width: 300 }}>
//       <Typography variant="h6">{event.name}</Typography>
//       <Divider sx={{ marginY: 2 }} />
//       <Stack spacing={1}>
//         {data && data.map((task, index) => (
//           <Draggable
//             key={task.id}
//             draggableId={task.id}
//             index={index}
//           >
//             {(provided) => (
//               <div
//                 ref={provided.innerRef}
//                 {...provided.draggableProps}
//                 {...provided.dragHandleProps}
//               >
//                 <TaskBlock task={task} />
//               </div>
//             )}
//           </Draggable>
//         ))}
//       </Stack>
//     </Paper>
//   );
// };

// export default EventBlock;
