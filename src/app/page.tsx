"use client";
import { Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLogoutMutation } from "services/token";

export default function Home({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation("common")
  const [logout] = useLogoutMutation()
  return (
    <>
      <Paper>
        {t("I18N_TITLE")}
        <Button onClick={logout}>Push</Button>
      </Paper>
    </>
  );
}
