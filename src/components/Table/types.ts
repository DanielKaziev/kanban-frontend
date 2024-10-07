export type TCellValue = string | string[] | number | boolean;
export type TTransformFunc = (value: any) => TCellValue;
export type TRenderFunc = (value: any) => React.ReactNode;

export type TTableCell = {
  value: TCellValue;
  transformValue?: TTransformFunc;
  render?: TRenderFunc;
};

export type TTableRow = {
  id?: string;
  data: TTableCell[];
  onClick?: () => void;
};

export type TTableData = {
  header: TTableRow;
  rows: TTableRow[];
};
