import { createBoard } from "@/utils/utils";

export const checkRowRight = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[]
): { numOfMatchingSymbols: number; winnerArray: string[][] } => {
  const boardLength: number = gameArray.length + 1;
  const cellSymbol = gameArray[cellValue[0]][cellValue[1]];

  let numOfMatchingSymbols: number = 0;
  let tempWinArray = createBoard(boardSize[0], boardSize[1]);
  tempWinArray[cellValue[0]][cellValue[1]] = cellSymbol;

  for (let i = cellValue[1] + 1; i < boardLength; i++) {
    if (gameArray[cellValue[0]][i] == cellSymbol) {
      tempWinArray[cellValue[0]][i] = cellSymbol;
      numOfMatchingSymbols++;
    } else {
      break;
    }
  }
  return {
    numOfMatchingSymbols: numOfMatchingSymbols,
    winnerArray: tempWinArray,
  };
};

export const checkRowLeft = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[]
): { numOfMatchingSymbols: number; winnerArray: string[][] } => {
  const cellSymbol = gameArray[cellValue[0]][cellValue[1]];

  let numOfMatchingSymbols: number = 0;
  let tempWinArray = createBoard(boardSize[0], boardSize[1]);
  tempWinArray[cellValue[0]][cellValue[1]] = cellSymbol;

  for (let i = cellValue[1] - 1; i >= 0; i--) {
    if (gameArray[cellValue[0]][i] == cellSymbol) {
      tempWinArray[cellValue[0]][i] = cellSymbol;
      numOfMatchingSymbols++;
    } else {
      break;
    }
  }

  return {
    numOfMatchingSymbols: numOfMatchingSymbols,
    winnerArray: tempWinArray,
  };
};

export const checkColumnDown = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[]
): { numOfMatchingSymbols: number; winnerArray: string[][] } => {
  const cellSymbol = gameArray[cellValue[0]][cellValue[1]];
  const boardLength: number = gameArray.length;

  let numOfMatchingSymbols: number = 0;
  let tempWinArray = createBoard(boardSize[0], boardSize[1]);
  tempWinArray[cellValue[0]][cellValue[1]] = cellSymbol;
  for (let i = cellValue[0]; i < boardLength - 1; i++) {
    if (gameArray[i + 1][cellValue[1]] == cellSymbol) {
      tempWinArray[i + 1][cellValue[1]] = cellSymbol;
      numOfMatchingSymbols++;
    } else {
      break;
    }
  }
  return {
    numOfMatchingSymbols: numOfMatchingSymbols,
    winnerArray: tempWinArray,
  };
};

export const checkColumnUp = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[]
): { numOfMatchingSymbols: number; winnerArray: string[][] } => {
  const cellSymbol = gameArray[cellValue[0]][cellValue[1]];

  let numOfMatchingSymbols: number = 0;
  let tempWinArray = createBoard(boardSize[0], boardSize[1]);
  tempWinArray[cellValue[0]][cellValue[1]] = cellSymbol;
  for (let i = cellValue[0]; i > 0; i--) {
    if (gameArray[i - 1][cellValue[1]] == cellSymbol) {
      tempWinArray[i - 1][cellValue[1]] = cellSymbol;
      numOfMatchingSymbols++;
    } else {
      break;
    }
  }
  return {
    numOfMatchingSymbols: numOfMatchingSymbols,
    winnerArray: tempWinArray,
  };
};

export const checkDiagonalUpRight = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[]
): { numOfMatchingSymbols: number; winnerArray: string[][] } => {
  const cellSymbol = gameArray[cellValue[0]][cellValue[1]];
  const boardLength: number = gameArray.length;
  let numOfMatchingSymbols: number = 0;
  let tempWinArray = createBoard(boardSize[0], boardSize[1]);
  tempWinArray[cellValue[0]][cellValue[1]] = cellSymbol;

  for (
    let i = 0, j = cellValue[0] - 1, k = cellValue[1] + 1;
    i < boardLength;
    i++, j--, k++
  ) {
    try {
      if (gameArray[j][k] == cellSymbol) {
        tempWinArray[j][k] = cellSymbol;
        numOfMatchingSymbols++;
      } else {
        break;
      }
    } catch {
      break;
    }
  }
  return {
    numOfMatchingSymbols: numOfMatchingSymbols,
    winnerArray: tempWinArray,
  };
};

export const checkDiagonalDownRight = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[]
): { numOfMatchingSymbols: number; winnerArray: string[][] } => {
  const cellSymbol = gameArray[cellValue[0]][cellValue[1]];
  const boardLength: number = gameArray.length;
  let numOfMatchingSymbols: number = 0;
  let tempWinArray = createBoard(boardSize[0], boardSize[1]);
  tempWinArray[cellValue[0]][cellValue[1]] = cellSymbol;

  for (
    let i = 0, j = cellValue[0] + 1, k = cellValue[1] - 1;
    i < boardLength;
    i++, j++, k--
  ) {
    try {
      if (gameArray[j][k] == cellSymbol) {
        tempWinArray[j][k] = cellSymbol;
        numOfMatchingSymbols++;
      } else {
        break;
      }
    } catch {
      break;
    }
  }
  return {
    numOfMatchingSymbols: numOfMatchingSymbols,
    winnerArray: tempWinArray,
  };
};

export const checkDiagonalDownLeft = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[]
): { numOfMatchingSymbols: number; winnerArray: string[][] } => {
  const cellSymbol = gameArray[cellValue[0]][cellValue[1]];
  const boardLength: number = gameArray.length;
  let numOfMatchingSymbols: number = 0;
  let tempWinArray = createBoard(boardSize[0], boardSize[1]);
  tempWinArray[cellValue[0]][cellValue[1]] = cellSymbol;

  for (
    let i = 0, j = cellValue[0] + 1, k = cellValue[1] + 1;
    i < boardLength;
    i++, j++, k++
  ) {
    try {
      if (gameArray[j][k] == cellSymbol) {
        tempWinArray[j][k] = cellSymbol;
        numOfMatchingSymbols++;
        if (numOfMatchingSymbols == 3) {
          break;
        }
      } else {
        break;
      }
    } catch {
      break;
    }
  }
  return {
    numOfMatchingSymbols: numOfMatchingSymbols,
    winnerArray: tempWinArray,
  };
};

export const checkDiagonalUpLeft = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[]
): { numOfMatchingSymbols: number; winnerArray: string[][] } => {
  const cellSymbol = gameArray[cellValue[0]][cellValue[1]];
  const boardLength: number = gameArray.length;
  let numOfMatchingSymbols: number = 0;
  let tempWinArray = createBoard(boardSize[0], boardSize[1]);
  tempWinArray[cellValue[0]][cellValue[1]] = cellSymbol;

  for (
    let i = 0, j = cellValue[0] - 1, k = cellValue[1] - 1;
    i < boardLength;
    i++, j--, k--
  ) {
    try {
      if (gameArray[j][k] == cellSymbol) {
        tempWinArray[j][k] = cellSymbol;
        numOfMatchingSymbols++;
      } else {
        break;
      }
    } catch {
      break;
    }
  }
  return {
    numOfMatchingSymbols: numOfMatchingSymbols,
    winnerArray: tempWinArray,
  };
};

export const haveWinner = (
  gameArray: string[][],
  cellValue: number[],
  boardSize: number[],
  game: string = "connect4"
): { winner: boolean; winnerArray: any[] } => {
  const winCount = game === "connect4" ? 3 : 2;
  let winnerFound = false;
  let numOfMatchingSymbols = 0;
  let tempWinGameBoard = createBoard(boardSize[0], boardSize[1]);
  const rowRightResult = checkRowRight(gameArray, cellValue, boardSize);
  const tempWinArray = mergeArrays(
    tempWinGameBoard,
    rowRightResult.winnerArray
  );
  numOfMatchingSymbols = rowRightResult.numOfMatchingSymbols;
  const rowLeftResult = checkRowLeft(gameArray, cellValue, boardSize);
  const tempWinArrayExpanded = mergeArrays(
    tempWinArray,
    rowLeftResult.winnerArray
  );
  numOfMatchingSymbols += rowLeftResult.numOfMatchingSymbols;

  if (numOfMatchingSymbols >= winCount) {
    winnerFound = true;
    return { winner: winnerFound, winnerArray: tempWinArrayExpanded };
  } else {
    numOfMatchingSymbols = 0;
    tempWinGameBoard = createBoard(boardSize[0], boardSize[1]);
  }

  if (!winnerFound) {
    const columnDownResult = checkColumnDown(gameArray, cellValue, boardSize);
    const tempWinArray = mergeArrays(
      tempWinGameBoard,
      columnDownResult.winnerArray
    );
    numOfMatchingSymbols = columnDownResult.numOfMatchingSymbols;

    const columnUpResult = checkColumnUp(gameArray, cellValue, boardSize);
    const tempWinArrayExpanded = mergeArrays(
      tempWinArray,
      columnUpResult.winnerArray
    );
    numOfMatchingSymbols += columnUpResult.numOfMatchingSymbols;

    if (numOfMatchingSymbols >= winCount) {
      winnerFound = true;
      return { winner: winnerFound, winnerArray: tempWinArrayExpanded };
    } else {
      numOfMatchingSymbols = 0;
      tempWinGameBoard = createBoard(boardSize[0], boardSize[1]);
    }
  }

  if (!winnerFound) {
    const diagonlUpRightResult = checkDiagonalUpRight(
      gameArray,
      cellValue,
      boardSize
    );
    const tempWinArray = mergeArrays(
      tempWinGameBoard,
      diagonlUpRightResult.winnerArray
    );
    numOfMatchingSymbols = diagonlUpRightResult.numOfMatchingSymbols;

    const diagonlDownRightResult = checkDiagonalDownRight(
      gameArray,
      cellValue,
      boardSize
    );
    const tempWinArrayExpanded = mergeArrays(
      tempWinArray,
      diagonlDownRightResult.winnerArray
    );
    numOfMatchingSymbols += diagonlDownRightResult.numOfMatchingSymbols;

    if (numOfMatchingSymbols >= winCount) {
      winnerFound = true;
      return { winner: winnerFound, winnerArray: tempWinArrayExpanded };
    } else {
      numOfMatchingSymbols = 0;
      tempWinGameBoard = createBoard(boardSize[0], boardSize[1]);
    }
  }

  if (!winnerFound) {
    const diagonlUpLeftResult = checkDiagonalUpLeft(
      gameArray,
      cellValue,
      boardSize
    );
    const tempWinArray = mergeArrays(
      tempWinGameBoard,
      diagonlUpLeftResult.winnerArray
    );
    numOfMatchingSymbols = diagonlUpLeftResult.numOfMatchingSymbols;

    const diagonlDownLeftResult = checkDiagonalDownLeft(
      gameArray,
      cellValue,
      boardSize
    );
    const tempWinArrayExpanded = mergeArrays(
      tempWinArray,
      diagonlDownLeftResult.winnerArray
    );
    numOfMatchingSymbols += diagonlDownLeftResult.numOfMatchingSymbols;

    if (numOfMatchingSymbols >= winCount) {
      winnerFound = true;
      return { winner: winnerFound, winnerArray: tempWinArrayExpanded };
    } else {
      numOfMatchingSymbols = 0;
      tempWinGameBoard = createBoard(boardSize[0], boardSize[1]);
    }
  }

  return {
    winner: winnerFound,
    winnerArray: createBoard(boardSize[0], boardSize[1]),
  };
};

export function checkDraw(gameArray: any[]): boolean {
  // loop over board to see if all cells have been used
  const board = gameArray;
  const flattenedBoard = board.flatMap((item) => item);
  const boardCount = flattenedBoard.length;

  let gameOver = false;
  let symbolCounter = 0;

  flattenedBoard.forEach((item) => {
    if (item !== "") {
      symbolCounter++;
    }
  });

  if (symbolCounter == boardCount) {
    // All cells filled
    gameOver = true;
  } else {
    gameOver = false;
  }
  return gameOver;
}

export const createColumn = (columnNumber: number, gameArray: string[][]) => {
  const column = gameArray.map((row) => {
    return row[columnNumber];
  });
  return column;
};

export const columnHasSpace = (
  columnNumber: number,
  gameArray: string[][]
): boolean => {
  const column = createColumn(columnNumber, gameArray);

  // Loop through the new column, checking if it has space
  let emptyCounter: number = 0;

  column.forEach((cell) => {
    if (cell === "") {
      emptyCounter++;
    }
  });
  return emptyCounter >= 1 ? true : false;
};

export const getRealColumnPosition = (
  cellValue: number[],
  gameArray: string[][]
) => {
  const column = createColumn(cellValue[1], gameArray);

  let emptyCounter: number = 0;

  column.forEach((cell) => {
    if (cell === "") {
      emptyCounter++;
    }
  });

  // drops the counter down the column
  return [emptyCounter - 1, cellValue[1]];
};

function mergeArrays(arr1: string[][], arr2: string[][]): string[][] {
  const mergedArray: string[][] = [];

  for (let i = 0; i < arr1.length; i++) {
    const row: string[] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      // If the cell in arr2 is non-empty, use it; otherwise, use the cell from arr1
      if (arr2[i][j] !== "") {
        row.push(arr2[i][j]);
      } else {
        row.push(arr1[i][j]);
      }
    }
    mergedArray.push(row);
  }

  return mergedArray;
}
