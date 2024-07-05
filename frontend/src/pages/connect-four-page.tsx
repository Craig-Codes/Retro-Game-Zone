import ConnectFourGame from "@/components/connect-four-game-board";
import Navbar from "@/components/navbar";
import { PlayerNameInput } from "@/components/player-name-input";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const ConnectFour = () => {
  const [playerNames, setPlayerNames] = useState(["Player 1", "Player 2"]);

  const handleNameChange = (
    nameInput: HTMLInputElement | HTMLTextAreaElement
  ) => {
    if (nameInput.id == "Yellow Player Name") {
      setPlayerNames([nameInput.value, playerNames[1]]);
    } else {
      setPlayerNames([playerNames[0], nameInput.value]);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <Typography variant="h3">Connect Four</Typography>
      <br />
      <br />
      <Box className="content-container">
        <PlayerNameInput
          label="Yellow Player Name"
          name={playerNames[0]}
          handleChange={handleNameChange}
        />
        <PlayerNameInput
          label="Red Player Name"
          name={playerNames[1]}
          handleChange={handleNameChange}
        />
      </Box>

      <ConnectFourGame inputPlayerNames={playerNames} />
      <br />
      <br />
    </>
  );
};

export default ConnectFour;
