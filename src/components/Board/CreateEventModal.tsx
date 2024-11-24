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

interface EventFormInputs {
  name: string;
  order: number;
}

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: EventFormInputs) => void;
  isLoading?: boolean;
}

const CreateEventModal: FC<CreateEventModalProps> = ({
  isOpen,
  onClose,
  onCreate,
  isLoading,
}) => {
  const { handleSubmit, control, reset } = useForm<EventFormInputs>({
    defaultValues: { name: "", order: 1 },
  });

  const onSubmit = (data: EventFormInputs) => {
    onCreate(data);
    reset(); // Сброс формы после успешного создания
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
            Создание события
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Название события обязательно" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Название события"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />

              <Stack direction="row" justifyContent="flex-end" spacing={1}>
                <Button onClick={onClose} color="secondary">
                  Отмена
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isLoading}
                >
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

export default CreateEventModal;
