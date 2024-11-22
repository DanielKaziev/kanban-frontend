import { FC } from "react";
import { IBoard } from "../../types/boards";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface BoardItemProps {
  data: IBoard;
}

const BoardItem: FC<BoardItemProps> = ({ data }) => {
  const privateColor = data.isPrivate ? "#ffab91" : "#81c784";

  return (
    <Paper
      elevation={3}
      style={{
        padding: "16px",
        margin: "8px",
        borderRadius: "8px",
        position: "relative",
        backgroundColor: "#f9f9f9",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "5px",
          backgroundColor: privateColor,
        }}
      />

      <Box display="flex" flexDirection="column" gap="12px">
        <Typography variant="h5" component="h3" style={{ fontWeight: 600 }}>
          {data.name}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ lineHeight: 1.5 }}
        >
          {data.description}
        </Typography>
        <Typography variant="body2" style={{ color: "#616161" }}>
          <strong>Роль пользователя:</strong> {data.userRole}
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: data.isPrivate ? "#d84315" : "#388e3c",
            fontWeight: 500,
          }}
        >
          <strong>Приватность:</strong>{" "}
          {data.isPrivate ? "Приватная" : "Публичная"}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="textSecondary">
            <strong>Создана:</strong>{" "}
            {new Date(data.createdAt).toLocaleDateString()}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            <strong>Обновлена:</strong>{" "}
            {new Date(data.updatedAt).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default BoardItem;
