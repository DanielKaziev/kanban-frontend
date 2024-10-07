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
    watch,
    formState: { errors },
  } = useForm<ILoginData>({
    defaultValues: { email: "", password: "" },
  });

  const email = watch("email");

  const [login, { isLoading, error, reset }] = useLoginMutation();

  useEffect(() => {
    reset();
  }, [email]);

  const onSubmit: SubmitHandler<ILoginData> = (data) => {
    clearErrors();
    login(data);
  };

  return (
    <Stack
      component="form"
      justifyContent="center"
      alignItems="center"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      spacing={3}
    >

      <InputField
        autoFocus
        {...register("email", {
          required: {
            value: true,
            message: t("I18N_LOGIN_FORM_USERNAME", {
              field: t("I18N_LOGIN_FORM_USERNAME"),
            }),
          },
        })}
        label={t("I18N_IIN")}
        fullWidth
        required
        error={!!errors.email}
        helperText={errors.email?.message}
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
