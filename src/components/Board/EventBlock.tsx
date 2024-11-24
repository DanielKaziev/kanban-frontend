import { FC } from "react";
import { Divider, Paper, Stack, styled, Typography } from "@mui/material";
import { IEvent } from "../../types/events";
import { useGetEventTasksListQuery } from "../../services/events";
import TaskBlock from "./TaskBlock";

interface EventBlockProps {
  event: IEvent;
}

const StyledEventBlock = styled(Paper)(({ theme }) => ({
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

const EventBlock: FC<EventBlockProps> = ({ event }) => {
  const { data } = useGetEventTasksListQuery(event.id);

  return (
    <StyledEventBlock>
      <Typography variant="h6" marginBottom={1}>
        {event.name}
      </Typography>
      <Divider />
      <TaskList spacing={2}>
        {data && data.map((task) => <TaskBlock key={task.id} task={task} />)}
      </TaskList>
      <Divider />
      <Typography variant="caption" marginTop={1}>
        Обновлено: {new Date(event.updatedAt).toLocaleDateString()}
      </Typography>
    </StyledEventBlock>
  );
};

export default EventBlock;
