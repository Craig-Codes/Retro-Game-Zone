export const createBoard = (rows: number, columns: number): string[][] => {
  let board = new Array(rows) as string[][];
  for (let i = 0; i < rows; i++) {
    board[i] = new Array(columns).fill("");
  }
  return board;
};
