import { IApplication } from "../../../types/application";
import { TTableData } from "../../../components/Table/types";
import StatusChip from "../../../components/StatusChip";
const prepareTableData = (
  data: Array<IApplication>,
  handleClick: (id: string) => void
) => {
  const rd: TTableData = {
    header: {
      data: [
        { value: "I18N_HOSPITAL_ID" },
        { value: "I18N_HOSPITAL_NAME" },
        { value: "I18N_HOSPITAL_CODE" },
        { value: "I18N_STATUS" },
      ],
    },
    rows: [],
  };
  data.forEach((row) => {
    rd.rows.push({
      data: [
        { value: row.id },
        { value: row.hospitalName },
        { value: row.hospitalId },
        {
          value: row.statusName,
          render: () => <StatusChip status={row.statusName} />,
        },
      ],
      onClick: () => handleClick(row.id),
    });
  });
  return rd;
};
export default prepareTableData;
