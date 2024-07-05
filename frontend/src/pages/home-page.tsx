import Navbar from "../components/navbar";
import { Box, Typography } from "@mui/material";
import noughsImage from "../assets/xandos.png";
import connectFour from "../assets/connect4.png";
import { GameCard } from "../components/game-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      <Box
        className="content-container"
        sx={{ flexDirection: "column", gap: "0" }}
      >
        <br />
        <Typography variant="h2">Welcome to the Retro Game Zone Hub</Typography>
        <br />
        <br />
        <Typography variant="body1">
          Come and enjoy our selection of games!
          <br />
          To take in some 8-bit tunes, press the green play button on the
          floating CD
        </Typography>
      </Box>
      <br />
      <Box className="content-container cards" display="flex">
        <GameCard
          gameName={"Noughts & Cross"}
          gameImage={noughsImage}
          gameDescription={
            "Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os (Canadian or Irish English) is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. It is a solved game, with a forced draw assuming best play from both players."
          }
          gameLink={"/noughts-and-crosses"}
          gameRuleLink={
            "https://shop.houseofmarbles.com/puzzle-solutions/noughts-crosses-pad-pencil-game-instructions/"
          }
        />
        <GameCard
          gameName={"Connect 4"}
          gameImage={connectFour}
          gameDescription={
            "Connect Four (also known as Connect 4, Four Up, Plot Four, Find Four, Captain's Mistress, Four in a Row, Drop Four, and Gravitrips in the Soviet Union) is a game in which the players choose a color and then take turns dropping colored tokens into a six-row, seven-column vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens. "
          }
          gameLink={"/connect-four"}
          gameRuleLink={
            "https://instructions.hasbro.com/en-my/instruction/connect-4-game"
          }
        />
      </Box>
      <br />
      <br />
    </>
  );
}
