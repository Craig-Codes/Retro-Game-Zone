import Navbar from "@/components/navbar";
import NoughtsAndCrossesGame from "@/components/noughts-and-crosses-game-board";
import { PlayerNameInput } from "@/components/player-name-input";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const NoughtsAndCrosses = () => {
  const [playerNames, setPlayerNames] = useState(["Player 1", "Player 2"]);

  const handleNameChange = (
    nameInput: HTMLInputElement | HTMLTextAreaElement
  ) => {
    if (nameInput.id == "Noughts Player Name") {
      setPlayerNames([nameInput.value, playerNames[1]]);
    } else {
      setPlayerNames([playerNames[0], nameInput.value]);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <Typography variant="h3">Noughts & Crosses</Typography>
      <br />
      <br />
      <Box className="content-container">
        <PlayerNameInput
          label="Noughts Player Name"
          name={playerNames[0]}
          handleChange={handleNameChange}
        />
        <PlayerNameInput
          label="Crosses Player Name"
          name={playerNames[1]}
          handleChange={handleNameChange}
        />
      </Box>

      <NoughtsAndCrossesGame inputPlayerNames={playerNames} />
      <br />
    </>
  );
};

export default NoughtsAndCrosses;
