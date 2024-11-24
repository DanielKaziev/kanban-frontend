import {
  Box,
  Button,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

const ModalContent = styled(Paper)(({ theme }) => ({
  width: "400px",
  padding: theme.spacing(3),
  margin: "auto",
  borderRadius: "8px",
  boxShadow: theme.shadows[5],
}));

interface TaskFormInputs {
  name: string;
  description: string;
}

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: TaskFormInputs) => void;
  eventId: string;
}

const CreateTaskModal: FC<CreateTaskModalProps> = ({
  isOpen,
  onClose,
  onCreate,
  eventId,
}) => {
  const { handleSubmit, control, reset } = useForm<TaskFormInputs>({
    defaultValues: { name: "", description: "" },
  });

  const onSubmit = (data: TaskFormInputs) => {
    onCreate(data);
    reset();
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <ModalContent>
          <Typography variant="h6" mb={2}>
            Создание задачи
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Название задачи обязательно" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Название задачи"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                rules={{ required: "Описание задачи обязательно" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Описание"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    multiline
                    rows={3}
                  />
                )}
              />
              <Stack direction="row" justifyContent="flex-end" spacing={1}>
                <Button onClick={onClose} color="secondary">
                  Отмена
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Создать
                </Button>
              </Stack>
            </Stack>
          </form>
        </ModalContent>
      </Box>
    </Modal>
  );
};

export default CreateTaskModal;
