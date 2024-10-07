import Chip from "@mui/material/Chip";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TStatuses } from "types/application";

interface StatusChipProps {
  status: TStatuses;
}

const I18NStatuses: Record<TStatuses, string> = {
  PROCESSING: "I18N_PROCESSING",
  REJECTED: "I18N_REJECTED",
  SUCCESS: "I18N_SUCCESS",
};

const colorByStatus: Record<TStatuses, string> = {
  PROCESSING: "#FFC107",
  REJECTED: "#F44336",
  SUCCESS: "#4CAF50",
};

const StatusChip: FC<StatusChipProps> = ({ status }) => {
  const { t } = useTranslation("statuses");

  const i18nStatus = I18NStatuses[status] ?? "unknown";
  const color = colorByStatus[status];

  return (
    <Chip
      label={t(i18nStatus)}
      style={{
        backgroundColor: color,
        color: "white",
        borderRadius: 8,
        padding: "10px 20px",
      }}
    />
  );
};

export default StatusChip;
