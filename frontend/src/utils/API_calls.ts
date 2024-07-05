import { z } from "zod";

export type gameWinnerObject = {
  gameName: string;
  timeStamp: Date;
  winner: string;
  player1: string;
  player2: string;
};

export const submitWinner = async (props: gameWinnerObject) => {
  const GameEntry = z.object({
    gameName: z.string(),
    timeStamp: z.coerce.date(),
    winner: z.string(),
    player1: z.string(),
    player2: z.string(),
  });

  if (GameEntry.parse(props)) {
    const response = await fetch("http://localhost:3000/game", {
      method: "POST",
      body: JSON.stringify({
        gameName: props.gameName,
        timeStamp: props.timeStamp,
        winner: props.winner,
        player1: props.player1,
        player2: props.player2,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  } else {
    return { message: "Invalid Data" };
  }
};

export const getScoresAndHistory = async () => {
  const response = await fetch("http://localhost:3000/game");
  const data = await response.json();
  return data;
};
