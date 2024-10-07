import { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { TTableData } from "./types";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxWidth: "1040px",
  backgroundColor: "white"
}));

type TTableProps = {
  data: TTableData;
};

const TableCustom: FC<TTableProps> = ({ data }) => {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead sx={{ bgcolor: "#F9FAFB" }}>
          <TableRow>
            {data.header.data.map((header, index) => (
              <TableCell sx={{ color: "#1678F2" }} key={index}>
                {header.value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              onClick={row.onClick}
              hover
              style={{ cursor: "pointer" }}
            >
              {row.data.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>
                  {cell.render
                    ? cell.render(cell.value)
                    : cell.transformValue
                    ? cell.transformValue(cell.value)
                    : cell.value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* TODO: implement pagination as hook */}
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={hospitals.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </StyledTableContainer>
  );
};

export default TableCustom;
