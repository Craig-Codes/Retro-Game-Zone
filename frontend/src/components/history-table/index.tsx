import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: "1rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface HistoryDataProps {
  historyData: {
    game_id: string;
    game_name: string;
    player1: string;
    player2: string;
    winner: string;
    game_timestamp: string;
  }[];
}

export const HistoryTable = ({ historyData }: HistoryDataProps) => {
  // format the date correctly
  historyData?.forEach((row) => {
    const date = new Date(row.game_timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    row.game_timestamp = `${day}-${month}-${year}`;
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Game Played</StyledTableCell>
            <StyledTableCell align="center">Player 1</StyledTableCell>
            <StyledTableCell align="center">Player 2</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Winner</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historyData?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.game_name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.player1}</StyledTableCell>
              <StyledTableCell align="center">{row.player2}</StyledTableCell>
              <StyledTableCell align="center">
                {row.game_timestamp}
              </StyledTableCell>
              <StyledTableCell align="center">{row.winner}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
