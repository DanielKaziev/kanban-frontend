import { FC } from "react";
import { Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface ErrorMessageProps {
  error: FetchBaseQueryError | null;
  defaultMessage?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({
  error,
  defaultMessage = "Unknown error occurred",
}) => {
  if (!error) return null;

  const message =
    "data" in error
      ? (error.data as { message?: string })?.message || defaultMessage
      : defaultMessage;

  return (
    <Typography color="error" variant="body2">
      {message}
    </Typography>
  );
};

export default ErrorMessage;
