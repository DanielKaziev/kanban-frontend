import { FC } from "react";
import { Paper, Stack, styled, Typography, Tooltip } from "@mui/material";
import { ITask } from "types/tasks";

interface TaskBlockProps {
  task: ITask;
}

// Основной стиль для задачи
const TaskBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: theme.shadows[3],
  },
}));

const TaskName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

const TaskDescription = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const TaskBlock: FC<TaskBlockProps> = ({ task }) => {
  return (
    <TaskBox>
      <Tooltip title={`ID задачи: ${task.id}`} arrow>
        <TaskName variant="body1" noWrap>
          {task.name}
        </TaskName>
      </Tooltip>
      <TaskDescription variant="body2" noWrap>
        {task.description || "Описание отсутствует"}
      </TaskDescription>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="textSecondary">
          Создано: {new Date(task.createdAt).toLocaleDateString()}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Обновлено: {new Date(task.updatedAt).toLocaleDateString()}
        </Typography>
      </Stack>
    </TaskBox>
  );
};

export default TaskBlock;
