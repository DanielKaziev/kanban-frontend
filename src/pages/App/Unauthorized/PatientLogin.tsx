import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useLoginMutation } from "../../../services/token";
import { ILoginData } from "../../../types/token";
import LanguageSwitcher from "./../../../components/Language";

const InputField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    border: "none",
    boxShadow: "none",
  },
}));

const PatientLogin = ({}) => {
  const { t } = useTranslation("login");
  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors },
  } = useForm<ILoginData>({
    defaultValues: { email: "", password: "" },
  });

  const [login, { isLoading, error, reset }] = useLoginMutation();

  const onSubmit: SubmitHandler<ILoginData> = (data) => {
    clearErrors();
    // console.log(data);
    
    login(data);
  };

  return (
    <Stack
      component="form"
      justifyContent="center"
      alignItems="center"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      spacing={2}
    >
      <InputField
        autoFocus
        {...register("email", {
          required: true,
        })}
        label={t("I18N_EMAIL")}
        fullWidth
        required
      />
      <InputField
        {...register("password", {
          required: true,
        })}
        label={t("I18N_PASSWORD")}
        fullWidth
        type="password"
        required
      />
      <LoadingButton
        type="submit"
        variant="contained"
        sx={{ px: 5 }}
        loading={isLoading}
        disableElevation
        size="large"
      >
        {t("I18N_LOGIN_FORM")}
      </LoadingButton>
      <LanguageSwitcher />
    </Stack>
  );
};

export default PatientLogin;
