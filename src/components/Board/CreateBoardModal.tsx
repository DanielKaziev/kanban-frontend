import React from "react";
import {
  Modal,
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateBoardMutation } from "../../services/boards";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import ErrorMessage from "../../components/ErrorMessage";
import { LoadingButton } from "@mui/lab";

interface ICreateBoardData {
  name: string;
  description: string;
  isPrivate: boolean;
}

const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  backgroundColor: "white",
  boxShadow: theme.shadows[5],
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
}));

const CreateBoardModal = ({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ICreateBoardData>({
    defaultValues: { name: "", description: "", isPrivate: false },
  });

  const [createBoard, { isLoading, error }] = useCreateBoardMutation();

  const onSubmit: SubmitHandler<ICreateBoardData> = async (data) => {
    try {
      await createBoard(data).unwrap();
      reset();
      onClose();
      onCreate();
    } catch (err) {
      console.error("Ошибка при создании доски:", err); // Лог ошибок
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBox>
        <Typography variant="h6" component="h2" mb={2}>
          Создать новую доску
        </Typography>
        <Stack
          component="form"
          spacing={2}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextField
            {...register("name", { required: "Название обязательно" })}
            label="Название доски"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            {...register("description", { required: "Описание обязательно" })}
            label="Описание"
            fullWidth
            multiline
            rows={3}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <FormControlLabel
            control={<Checkbox {...register("isPrivate")} />}
            label="Приватная доска"
          />
          <Stack m={"auto"}>
            {error && (
              <ErrorMessage error={error as FetchBaseQueryError | null} />
            )}
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Отмена
            </Button>
            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              loading={isLoading}
            >
              Создать
            </LoadingButton>
          </Stack>
        </Stack>
      </ModalBox>
    </Modal>
  );
};

export default CreateBoardModal;
