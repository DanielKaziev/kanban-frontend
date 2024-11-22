import { FC } from "react";
import { IBoard } from "../../types/boards";
import Paper from "@mui/material/Paper";

interface BoardItemProps {
  data: IBoard;
}

const BoardItem: FC<BoardItemProps> = ({ data }) => {
  return (
    <Paper elevation={1} style={{ padding: "16px", margin: "8px" }}>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </Paper>
  );
};

export default BoardItem;
