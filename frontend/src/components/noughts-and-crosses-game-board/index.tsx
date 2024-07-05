// TODO - Names, Database connection

import { createBoard } from "@/utils/utils";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useReward } from "react-rewards";

import "./index.css";
import { checkDraw, haveWinner } from "@/utils/checks";
import { submitWinner } from "@/utils/API_calls";
import Popup from "../modal";

interface NoughtsAndCrossesGameProps {
  inputPlayerNames: string[];
}

const NoughtsAndCrossesGame = ({
  inputPlayerNames,
}: NoughtsAndCrossesGameProps) => {
  const [gameArray, setGameArray] = useState(createBoard(3, 3));
  const [gameOver, setGameOver] = useState(false);
  const [drawGame, setDrawGame] = useState(false);
  const [player, setPlayer] = useState("noughts");
  const [winnerArray, setWinnerArray] = useState([[], []]);
  const [winner, setWinner] = useState(false);
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
        gameName: "Noughts & Crosses",
        timeStamp: new Date(),
        winner:
          player === "noughts" ? inputPlayerNames[0] : inputPlayerNames[1],
        player1: inputPlayerNames[0],
        player2: inputPlayerNames[1],
      });
      setModalTitle("Results Submitted");
      setModalMessage("Your win has been immortalised!");
      if (!winnerSubmitted) {
        throw new Error("Failed to add to db");
      }
    } catch {
      setModalTitle("Failed to update");
      setModalMessage("Sorry, the server is misbehaving!");
    }

    setOpen(true);
    setSubmitButtonHidden(true);
  };

  const boardSize: number[] = [3, 3];

  const handleCellClick = (event: React.MouseEvent) => {
    takeTurn(event); // pass in data value?
  };

  const changePlayer = () =>
    player == "noughts" ? setPlayer("crosses") : setPlayer("noughts");

  const playerSymbol = (player: string): string =>
    player === "noughts" ? "⭕️" : "❌";

  // Pass in found value
  const takeTurn = (clickedCell: React.MouseEvent) => {
    if (!gameOver) {
      const cellValue = clickedCell.currentTarget
        .getAttribute("data-value")!
        .split(",")
        .map(Number);
      const cellSymbol = clickedCell.currentTarget.textContent;
      if (checkEmpty(cellSymbol!)) {
        updateGameArray(cellValue); // update the gameArray data structure which also controls the board re-paint
        // check for winner
        if (
          !haveWinner(gameArray, cellValue, boardSize, "noughs&crosses").winner
        ) {
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
            haveWinner(gameArray, cellValue, boardSize, "noughs&crosses")
              .winnerArray
          );
          setWinner(true);
          reward();
        }
      }
    }
  };

  const checkEmpty = (player: string): boolean => (!player ? true : false);

  const updateGameArray = (cell: number[]) => {
    const newGameArrayEntry = [...gameArray];
    newGameArrayEntry[cell[0]][cell[1]] = playerSymbol(player);
    setGameArray(newGameArrayEntry);
  };

  let renderGameBoard: JSX.Element[] = [];

  // reset gameArray, which also resets the game board
  const handleReset = () => {
    const newGameBoard = createBoard(3, 3);
    setGameArray(newGameBoard);
    renderGameBoard = [];
    setPlayer("noughts");
    setGameOver(false);
    setSubmitButtonHidden(true);
    setDrawGame(false);
    setWinner(false);
    setWinnerArray([[], []]);
  };

  gameArray.forEach((row, rowIndex: number) => {
    let columnArray: JSX.Element[] = [];
    row.forEach((_cell: string, colIndex: number) => {
      if (gameOver && winner) {
        if (
          gameArray[rowIndex][colIndex] == winnerArray[rowIndex][colIndex] &&
          gameArray[rowIndex][colIndex] !== ""
        ) {
          columnArray.push(
            <div
              className="cell winning-cell"
              key={colIndex}
              data-value={[rowIndex, colIndex]}
              onClick={handleCellClick}
            >
              <span className="emoji">{gameArray[rowIndex][colIndex]}</span>
            </div>
          );
        } else {
          columnArray.push(
            <div
              className="cell"
              key={colIndex}
              data-value={[rowIndex, colIndex]}
              onClick={handleCellClick}
            >
              <span className="emoji losing-cell">
                {gameArray[rowIndex][colIndex]}
              </span>
            </div>
          );
        }
      } else {
        columnArray.push(
          <div
            className="cell"
            key={colIndex}
            data-value={[rowIndex, colIndex]}
            onClick={handleCellClick}
          >
            <span className="emoji">{gameArray[rowIndex][colIndex]}</span>
          </div>
        );
      }
    });

    renderGameBoard.push(
      <div className="row" key={rowIndex}>
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
          <div id="winner-true">
            {player === "noughts" ? inputPlayerNames[0] : inputPlayerNames[1]}{" "}
            is the Winner!
          </div>
        )}
        {!gameOver && !drawGame && <div id="winner-false">""</div>}
        {drawGame && <div id="winner-true">Draw game!</div>}
      </Box>
      <Box className="content-container">
        <div id="game-board">{renderGameBoard}</div>
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

export default NoughtsAndCrossesGame;
