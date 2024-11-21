import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import { ILoginData, IRegisterData } from "../../../types/token";
import LanguageSwitcher from "../../../components/Language";

import { InputField } from "./style";
import { useRegisterMutation } from "../../../services/token";

const Registration = () => {
  const { t } = useTranslation("login");
  const {
    handleSubmit,
    register,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<IRegisterData>({
    defaultValues: { email: "", password: "" },
  });

  const [registration, { isLoading, error, reset }] = useRegisterMutation();

  const onSubmit: SubmitHandler<IRegisterData> = (data) => {
    clearErrors();
    registration(data);
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
        {...register("username", {
          required: true,
        })}
        label={t("I18N_USERNAME")}
        fullWidth
        required
      />
      <InputField
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
        {t("I18N_REG_FORM")}
      </LoadingButton>
      <LanguageSwitcher />
    </Stack>
  );
};

export default Registration;
