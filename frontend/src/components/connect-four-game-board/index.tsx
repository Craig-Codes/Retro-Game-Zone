// TODO - Names, Database connection

import { createBoard } from "@/utils/utils";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useReward } from "react-rewards";
import {
  checkDraw,
  columnHasSpace,
  getRealColumnPosition as getRealColumnPosition,
  haveWinner,
} from "../../utils/checks";
import "./style.css";
import { submitWinner } from "@/utils/API_calls";
import Popup from "../modal";

interface ConnectFourGameProps {
  inputPlayerNames: string[];
}

const ConnectFourGame = ({ inputPlayerNames }: ConnectFourGameProps) => {
  const [gameArray, setGameArray] = useState(createBoard(6, 7));
  const [gameOver, setGameOver] = useState(false);
  const [drawGame, setDrawGame] = useState(false);
  const [player, setPlayer] = useState("yellow");
  const [winnerArray, setWinnerArray] = useState([[], []]);
  const [winner, setWinner] = useState(false);
  const [latestGameboardEntry, setLatestGameboardEntry] = useState([0, 0]);
  const { reward } = useReward("celebration", "emoji", {
    emoji: ["👾", "🕹️", "🎮"],
    spread: 100,
    elementCount: 80,
    startVelocity: 40,
  });

  //modal
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [submitButtonHidden, setSubmitButtonHidden] = useState(true);

  const handleModal = async () => {
    try {
      const winnerSubmitted = await submitWinner({
        gameName: "Connect Four",
        timeStamp: new Date(),
        winner: player === "yellow" ? inputPlayerNames[0] : inputPlayerNames[1],
        player1: inputPlayerNames[0],
        player2: inputPlayerNames[1],
      });
      setModalTitle("Results Submitted");
      setModalMessage("Your win has been immortalised!");
      if (!winnerSubmitted) {
        throw new Error("Failed to add to db");
      } else {
        console.log(winnerSubmitted);
      }
    } catch {
      console.log("error");
      setModalTitle("Failed to update");
      setModalMessage("Sorry, the server is misbehaving!");
    }

    setOpen(true);
    setSubmitButtonHidden(true);
  };

  const boardSize: number[] = [6, 7];

  const updateGameArray = (cell: number[]) => {
    const newGameArrayEntry = [...gameArray];
    newGameArrayEntry[cell[0]][cell[1]] = playerSymbol(player);
    setGameArray(newGameArrayEntry);
  };

  const handleCellClick = (event: React.MouseEvent) => {
    takeTurn(event);
  };

  const changePlayer = () =>
    player == "yellow" ? setPlayer("red") : setPlayer("yellow");

  const playerSymbol = (player: string): string =>
    player === "yellow" ? "🟡" : "🔴";

  // Pass in found value
  const takeTurn = (clickedCell: React.MouseEvent) => {
    if (!gameOver) {
      const cellValue = clickedCell.currentTarget
        .getAttribute("data-value")!
        .split(",")
        .map(Number);
      // Ammend the clicked cell to be the next avaiable position in clicked column
      const updatedCellValue = getRealColumnPosition(cellValue, gameArray);
      setLatestGameboardEntry(updatedCellValue);

      if (columnHasSpace(cellValue[1], gameArray)) {
        updateGameArray(updatedCellValue);
      } else {
        return;
      }

      if (!haveWinner(gameArray, updatedCellValue, boardSize).winner) {
        changePlayer();

        if (checkDraw(gameArray)) {
          setDrawGame(true);
          setGameOver(true);
          setSubmitButtonHidden(true);
        }
      } else {
        setGameOver(true);
        setSubmitButtonHidden(false);
        setWinnerArray(
          haveWinner(gameArray, updatedCellValue, boardSize).winnerArray
        );
        setWinner(true);
        reward();
      }
    }
  };

  // reset gameArray, which also resets the game board
  const handleReset = () => {
    const newGameBoard = createBoard(6, 7);
    setGameArray(newGameBoard);
    renderGameBoard = [];
    setPlayer("yellow");
    setGameOver(false);
    setSubmitButtonHidden(true);
    setDrawGame(false);
    setWinner(false);
    setWinnerArray([[], []]);
  };

  let renderGameBoard: JSX.Element[] = [];

  gameArray.forEach((row, rowIndex) => {
    let columnArray: JSX.Element[] = [];
    row.forEach((_cell: string, colIndex: number) => {
      // Make all tokens from the winning combination green so the combination is highlighted
      if (gameOver && winner) {
        if (
          gameArray[rowIndex][colIndex] == winnerArray[rowIndex][colIndex] &&
          gameArray[rowIndex][colIndex] !== ""
        ) {
          columnArray.push(
            <div
              className="connect-cell "
              key={colIndex}
              data-value={[rowIndex, colIndex]}
              onClick={handleCellClick}
            >
              <span className="connect-emoji winning-token-connect">🟢</span>
            </div>
          );
        } else {
          columnArray.push(
            <div
              className="connect-cell"
              key={colIndex}
              data-value={[rowIndex, colIndex]}
              onClick={handleCellClick}
            >
              <span className="connect-emoji">
                {gameArray[rowIndex][colIndex]}
              </span>
            </div>
          );
        }
      } else {
        // Add drop effect to latest token dropped
        if (
          rowIndex == latestGameboardEntry[0] &&
          colIndex == latestGameboardEntry[1]
        ) {
          columnArray.push(
            <div
              className="connect-cell"
              key={colIndex}
              data-value={[rowIndex, colIndex]}
              onClick={handleCellClick}
            >
              <span className="connect-emoji drop-effect">
                {gameArray[rowIndex][colIndex]}
              </span>
            </div>
          );
        } else {
          columnArray.push(
            <div
              className="connect-cell"
              key={colIndex}
              data-value={[rowIndex, colIndex]}
              onClick={handleCellClick}
            >
              <span className="connect-emoji">
                {gameArray[rowIndex][colIndex]}
              </span>
            </div>
          );
        }
      }
    }),
      renderGameBoard.push(
        <div className="connect-row" key={rowIndex}>
          {columnArray}
        </div>
      );
  });

  return (
    <>
      <Popup
        open={open}
        onClose={handleClose}
        title={modalTitle}
        text={modalMessage}
      />
      <Box>
        {gameOver && !drawGame && (
          <div id="winner-true-connect4">
            {player === "yellow" ? inputPlayerNames[0] : inputPlayerNames[1]} is
            the Winner!
          </div>
        )}
        {!gameOver && !drawGame && <div id="winner-false-connect4">""</div>}
        {drawGame && <div id="winner-true-connect4">Draw game!</div>}
      </Box>
      <Box className="content-container">
        <div id="connect-game-board">{renderGameBoard}</div>
      </Box>
      <Box className="content-container" id="celebration">
        <Button variant="contained" onClick={handleReset}>
          Reset Game
        </Button>
        <Button
          variant="contained"
          disabled={submitButtonHidden}
          onClick={() => handleModal()}
        >
          Submit Winner
        </Button>
      </Box>
    </>
  );
};

export default ConnectFourGame;
