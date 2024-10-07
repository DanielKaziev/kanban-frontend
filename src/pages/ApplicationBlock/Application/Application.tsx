import TableCustom from "../../../components/Table";
import { TTableData } from "../../../components/Table/types";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Page from "../../../components/Page";
import prepareTableData from "./prepData";
import { useGetApplicationsListQuery } from "../../../services/application";

const ApplicationList = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("hospitals");
  const { data, isSuccess } = useGetApplicationsListQuery();

  const handleNavigate = (id: string) => navigate(`/applications/view/${id}`);

  const tableData = useMemo<TTableData>(() => {
    const td = prepareTableData(data?.rows || [], handleNavigate);

    td.header.data.forEach((el) => {
      el.value = t(el.value as string);
    });
    return td;
  }, [isSuccess, i18n.language]);

  return (
    <Page>
      <TableCustom data={tableData} />
    </Page>
  );
};

export default ApplicationList;
