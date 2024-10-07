import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import { useLoginStuffMutation } from "../../../services/token";
import { ILoginData } from "../../../types/token";
import LanguageSwitcher from "./../../../components/Language";

import { InputField } from "./style";

const StuffLogin = () => {
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
  const password = watch("password");
  const [login, { isLoading, error, reset }] = useLoginStuffMutation();

  useEffect(() => {
    reset();
  }, [email, password]);

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
            message: t("I18N_LOGIN_FORM_FIELD_EMAIL", {
              field: t("I18N_LOGIN_FORM_USERNAME"),
            }),
          },
        })}
        label={t("I18N_EMAIL")}
        fullWidth
        required
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <InputField
        autoFocus
        {...register("password", {
          required: {
            value: true,
            message: t("I18N_FIELD_PASSWORD", {
              field: t("I18N_LOGIN_FORM_USERNAME"),
            }),
          },
        })}
        label={t("I18N_PASSWORD")}
        fullWidth
        required
        type="password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Stack direction="column" alignItems="center" spacing={2}>
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
    </Stack>
  );
};

export default StuffLogin;
