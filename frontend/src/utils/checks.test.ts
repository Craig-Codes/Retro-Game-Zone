import {
  checkRowRight,
  checkRowLeft,
  checkColumnDown,
  checkDiagonalUpRight,
  checkDiagonalDownRight,
  checkDiagonalDownLeft,
  checkDiagonalUpLeft,
  haveWinner,
  checkDraw,
  createColumn,
  columnHasSpace,
  getRealColumnPosition,
} from "./checks";

const testGameBoard = [
  ["🔴", "🔴", "🔴"],
  ["🟡", "🔴", ""],
  ["🔴", "", "🔴"],
];

const gameBoardSize = [3, 3];

describe("When calling the check functions", () => {
  it("finds matching symbols to the right in an array", () => {
    const topLeftSymbol = [0, 0];
    const outputNumber: number = checkRowRight(
      testGameBoard,
      topLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(2);
  });

  it("finds no matching symbols to the right when searching at the end", () => {
    const topLeftSymbol = [0, 2];
    const outputNumber: number = checkRowRight(
      testGameBoard,
      topLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(0);
  });

  it("finds no matching symbols to the right in an array", () => {
    const middleLeftSymbol = [1, 0];
    const outputNumber: number = checkRowRight(
      testGameBoard,
      middleLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(0);
  });

  // Check left
  it("finds matching symbols to the left in an array", () => {
    const topLeftSymbol = [0, 2];
    const outputNumber: number = checkRowLeft(
      testGameBoard,
      topLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(2);
  });

  it("finds no matching symbols to the left when searching at the end", () => {
    const topLeftSymbol = [0, 0];
    const outputNumber: number = checkRowLeft(
      testGameBoard,
      topLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(0);
  });

  it("finds no matching symbols to the left in an array", () => {
    const middleLeftSymbol = [1, 2];
    const outputNumber: number = checkColumnDown(
      testGameBoard,
      middleLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(0);
  });

  // Column Down
  it("finds matching symbol going down a column", () => {
    const topMiddleSymbol = [0, 1];
    const outputNumber: number = checkColumnDown(
      testGameBoard,
      topMiddleSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(1);
  });

  it("finds no matching symbol going down a column as blank", () => {
    const topRightSymbol = [0, 2];
    const outputNumber: number = checkColumnDown(
      testGameBoard,
      topRightSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(0);
  });

  // Diagonal Right
  it("finds matching symbols going up diagonally right", () => {
    const bottomLeftSymbol = [2, 0];
    const outputNumber: number = checkDiagonalUpRight(
      testGameBoard,
      bottomLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(2);
  });

  it("finds no matching symbols going up diagonally right", () => {
    const testGameBoard = [
      ["🔴", "🔴", ""],
      ["🟡", "", ""],
      ["🔴", "", "🔴"],
    ];
    const bottomLeftSymbol = [2, 0];
    const outputNumber: number = checkDiagonalUpRight(
      testGameBoard,
      bottomLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(0);
  });

  it("finds matching symbols going down diagonally right", () => {
    const bottomRightSymbol = [0, 2];
    const outputNumber: number = checkDiagonalDownRight(
      testGameBoard,
      bottomRightSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(2);
  });

  it("finds no matching symbols going down diagonally right", () => {
    const middleLeftSymbol = [1, 2];
    const outputNumber: number = checkDiagonalDownRight(
      testGameBoard,
      middleLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(1);
  });

  // Diagonal Left
  it("finds matching symbols going down diagonally left", () => {
    const topLeftSymbol = [0, 0];
    const outputNumber: number = checkDiagonalDownLeft(
      testGameBoard,
      topLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(2);
  });

  it("finds no matching symbols going down diagonally left", () => {
    const testGameBoard = [
      ["", "🔴", ""],
      ["🟡", "🟡", ""],
      ["🔴", "", "🔴"],
    ];
    const bottomLeftSymbol = [0, 0];
    const outputNumber: number = checkDiagonalDownLeft(
      testGameBoard,
      bottomLeftSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(0);
  });

  it("finds matching symbols going up diagonally left", () => {
    const bottomRightSymbol = [2, 2];
    const outputNumber: number = checkDiagonalUpLeft(
      testGameBoard,
      bottomRightSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(2);
  });

  it("finds no matching symbols going up diagonally left", () => {
    const testGameBoard = [
      ["", "🔴", ""],
      ["🟡", "🟡", ""],
      ["🔴", "", "🔴"],
    ];
    const topRightSymbol = [0, 0];
    const outputNumber: number = checkDiagonalUpLeft(
      testGameBoard,
      topRightSymbol,
      gameBoardSize
    ).numOfMatchingSymbols;
    expect(outputNumber).toBe(0);
  });
});

describe("When calling the haveWinner function", () => {
  it("Checks all won conditions, and finds a win", () => {
    const topLeftSymbol = [0, 0];
    const gameBoardSize = [4, 4];
    const testGameBoard = [
      ["🔴", "🔴", "🔴", ""],
      ["🟡", "🔴", "", ""],
      ["🔴", "", "🔴", ""],
      ["🔴", "", "🔴", "🔴"],
    ];
    const outputWinner: boolean = haveWinner(
      testGameBoard,
      topLeftSymbol,
      gameBoardSize
    ).winner;

    expect(outputWinner).toBe(true);
  });

  it("Checks all won conditions, and finds none", () => {
    const topLeftSymbol = [0, 0];
    const gameBoardSize = [4, 4];
    const testGameBoard = [
      ["🔴", "🔴", "🔴", ""],
      ["🟡", "🔴", "", ""],
      ["🔴", "", "🟡", ""],
      ["🔴", "", "🔴", "🔴"],
    ];
    const outputWinner: boolean = haveWinner(
      testGameBoard,
      topLeftSymbol,
      gameBoardSize
    ).winner;
    expect(outputWinner).toBe(false);
  });
});

describe("When calling the checkDraw function", () => {
  it("Checks all all board positions have not been used", () => {
    const testGameBoard = [
      ["🔴", "🟡", "🔴", "🟡", "🔴", "🟡", ""],
      ["🟡", "🟡", "🔴", "🔴", "🟡", "🟡", "🔴"],
      ["🔴", "🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
      ["🔴", "🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
      ["🔴", "🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
      ["🔴", "🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
    ];
    const output: boolean = checkDraw(testGameBoard);
    expect(output).toBe(false);
  });

  it("Checks all all board positions have been used", () => {
    const testGameBoard = [
      ["🔴", "🟡", "🔴", "🟡", "🔴", "🟡", "🔴"],
      ["🟡", "🟡", "🔴", "🔴", "🟡", "🟡", "🔴"],
      ["🔴", "🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
      ["🔴", "🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
      ["🔴", "🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
      ["🔴", "🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
    ];
    const output: boolean = checkDraw(testGameBoard);
    expect(output).toBe(true);
  });
});

describe("When calling the createColumn function", () => {
  it("Creates a column based on 2d array input", () => {
    const testGameBoard = [
      ["🔴", "🔴", "🔴", "🟡"],
      ["🟡", "🔴", "🟡", "🟡"],
      ["🔴", "🟡", "🟡", "🟡"],
      ["🔴", "🟡", "🔴", "🔴"],
    ];
    const output: string[] = createColumn(0, testGameBoard);
    expect(output).toEqual(["🔴", "🟡", "🔴", "🔴"]);
  });

  it("Creates a column based on 2d array input", () => {
    const testGameBoard = [
      ["🔴", "🔴", "🔴", "🟡"],
      ["🟡", "🔴", "🟡", "🟡"],
      ["🔴", "🟡", "🟡", "🟡"],
      ["", "🟡", "🔴", "🔴"],
    ];
    const output: string[] = createColumn(0, testGameBoard);
    expect(output).not.toEqual(["🔴", "🟡", "🔴", "🔴"]);
  });
});

describe("When calling the columnHasSpace function", () => {
  it("Checks a created has space to add more entries - true", () => {
    const testGameBoard = [
      ["🔴", "🔴", "🔴", "🟡"],
      ["🟡", "🔴", "🟡", "🟡"],
      ["🔴", "🟡", "🟡", "🟡"],
      ["", "🟡", "🔴", "🔴"],
    ];
    const output: boolean = columnHasSpace(0, testGameBoard);
    expect(output).toBe(true);
  });

  it("Checks a created has space to add more entries - false", () => {
    const testGameBoard = [
      ["🔴", "🔴", "🔴", "🟡"],
      ["🟡", "🔴", "🟡", "🟡"],
      ["🔴", "🟡", "🟡", "🟡"],
      ["🔴", "🟡", "🔴", "🔴"],
    ];
    const output: boolean = columnHasSpace(0, testGameBoard);
    expect(output).toBe(false);
  });

  it("Checks a created has space to add more entries - check another row / position is true", () => {
    const testGameBoard = [
      ["🔴", "🔴", "", "🟡"],
      ["🟡", "🔴", "🟡", "🟡"],
      ["🔴", "🟡", "🟡", "🟡"],
      ["🔴", "🟡", "🔴", "🔴"],
    ];
    const output: boolean = columnHasSpace(2, testGameBoard);
    expect(output).toBe(true);
  });

  it("Checks a created has space to add more entries - check last row is true", () => {
    const testGameBoard = [
      ["🔴", "🔴", "🟡", "🟡"],
      ["🟡", "🔴", "🟡", "🟡"],
      ["🔴", "🟡", "🟡", ""],
      ["🔴", "🟡", "🔴", "🔴"],
    ];
    const output: boolean = columnHasSpace(3, testGameBoard);
    expect(output).toBe(true);
  });
});

describe("When calling the getRealColumnPositions", () => {
  it("Places counter into the correct position inside the column", () => {
    const topMiddleSymbol = [0, 1];
    const testGameBoard = [
      ["🔴", "", ""],
      ["🟡", "", ""],
      ["🔴", "🔴", "🔴"],
    ];
    const output: number[] = getRealColumnPosition(
      topMiddleSymbol,
      testGameBoard
    );
    expect(output).toEqual([1, 1]);
  });

  it("Places counter into the correct position inside the column when column empty", () => {
    const topLeftSymbol = [0, 0];
    const testGameBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "🔴", "🔴"],
    ];
    const output: number[] = getRealColumnPosition(
      topLeftSymbol,
      testGameBoard
    );
    expect(output).toEqual([2, 0]);
  });
});
