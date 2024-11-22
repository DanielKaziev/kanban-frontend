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
import Page from "../../../components/Page";
import { useGetOwnBoardsListQuery } from "../../../services/boards";
import BoardItem from "../../../components/Board/BoardItem";
import NoContent from "../../../components/NoContent";

const BoardsList = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const { data, isLoading } = useGetOwnBoardsListQuery("");

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
              label="Поиск..."
              size="small"
              variant="outlined"
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                whiteSpace: "nowrap",
                textTransform: "none",
                backgroundColor: "primary.main",
              }}
            >
              Найти
            </Button>
            <Stack flexGrow={2} />
            <Button
              variant="outlined"
              size="small"
              sx={{
                whiteSpace: "nowrap",
                textTransform: "none",
                borderColor: "primary.main",
              }}
            >
              Создать доску
            </Button>
          </Stack>
        </Paper>
      </Box>
      {!data && !isLoading && <NoContent />}
      {data && (
        <Box px={theme.spacing(5)}>
          <Grid container>
            {data.map((row, index) => (
              <Grid key={index} item xs={12} sm={6} xl={3}>
                <BoardItem data={row} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Page>
  );
};

export default BoardsList;
