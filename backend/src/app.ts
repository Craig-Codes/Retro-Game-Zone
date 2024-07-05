import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";
import { z, ZodError } from "zod";
import { Request } from "express";
import { APIRequestError } from "./errors.js";
import { GamingData } from "./types.js";
dotenv.config({ path: "../.env" });

var app = express();
app.use(cors());
app.use(express.json());

const { Client } = pg;
const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
});

await client.connect();

const GameEntry = z.object({
  gameName: z.string(),
  timeStamp: z.coerce.date(),
  winner: z.string(),
  player1: z.string(),
  player2: z.string(),
});

const parseGamingData = (request: Request): GamingData => {
  const { gameName, timeStamp, winner, player1, player2 } = request.body;
  const gameData = {
    gameName: gameName,
    timeStamp: timeStamp,
    winner: winner,
    player1: player1,
    player2: player2,
  };

  try {
    GameEntry.parse(gameData);
  } catch (e) {
    if (e instanceof ZodError) {
      const errorMessages = e.errors.map((err) => err.message).join(", ");
      throw new APIRequestError(errorMessages);
    }
  }

  return gameData;
};

app.post("/game", async (req, res) => {
  console.log("Submitting game to database...");
  try {
    const gameInput = parseGamingData(req);
    const submission = await client.query(
      "INSERT INTO games (game_name, player1, player2, game_timestamp, winner) VALUES ($1, $2, $3, $4, $5)",
      [
        gameInput.gameName,
        gameInput.player1,
        gameInput.player2,
        gameInput.timeStamp,
        gameInput.winner,
      ]
    );
    res.status(200).json({ message: "success" });
  } catch (error) {
    if (error instanceof APIRequestError) {
      return res.status(400).json({
        message: `Unable to add game history: ${(error as ZodError).message}`,
      });
    }
    res.status(400).json({ message: "Unable to add game history" });
  }
});

app.get("/game", async (req, res) => {
  console.log("Retreiving game history...");
  try {
    const history = await client.query(
      "SELECT * FROM games ORDER BY game_timestamp DESC LIMIT 10;"
    );
    const leaderboard = await client.query(
      "SELECT winner as player, COUNT(*) AS games_won, MAX(game_timestamp) AS latest_game FROM public.games GROUP BY winner ORDER BY games_won DESC, latest_game DESC LIMIT 3;"
    );
    res
      .status(200)
      .json({ history: history.rows, leaderboard: leaderboard.rows });
  } catch (error) {
    res.status(500).json({ message: "Unable to retrieve game history" });
  }
});

app.listen(3000);
