import { Box, Paper, Stack, styled, TextField, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../../../components/Page";
import { useGetBoardEventsByidListQuery } from "../../../services/boards";
import EventBlock from "../../../components/Board/EventBlock";
import NoContent from "../../../components/NoContent";

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

const BoardsList = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const theme = useTheme();
  const { data } = useGetBoardEventsByidListQuery(boardId ?? "");

  return (
    <Page noSpacing>
      <Box px={theme.spacing(1)}>
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
            />
          </Stack>
        </Paper>
      </Box>
      <HorizontalScroll>
        {data && data?.length < 1 && <NoContent />}
        {data &&
          data.map((event) => <EventBlock key={event.id} event={event} />)}
      </HorizontalScroll>
    </Page>
  );
};

export default BoardsList;
