import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { getScoresAndHistory } from "@/utils/API_calls";
import { Box, CircularProgress, Typography } from "@mui/material";
import { LeaderList } from "@/components/leader-list";
import { HistoryTable } from "@/components/history-table";

const ScoreboardPage = () => {
  const [winnerData, setWinnerData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const scores = await getScoresAndHistory();
      if (!scores) {
        throw new Error("Failed to retrieve scores from the db");
      } else {
        setWinnerData(scores["leaderboard"]);
        setHistoryData(scores["history"]);
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Data is loading spinner
  if (historyData?.length < 1 && !error) {
    return (
      <>
        <Navbar />
        <br />
        <br />
        <Box className="content-container" sx={{ flexDirection: "column" }}>
          <h2>Loading data from the database...</h2>
          <CircularProgress color="secondary" />
        </Box>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <br />
        <Typography variant="h3">Scoreboard</Typography>
        <br />
        <Box className="content-container" sx={{ flexDirection: "column" }}>
          <br />
          <h2>Error retrieving data, please try again later</h2>
          <h3>❤️ We are all winners anyway ❤️</h3>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <br />
      <Typography variant="h3">Scoreboard</Typography>
      <br />
      <Box className="content-container">
        <LeaderList winnerData={winnerData} />
      </Box>

      <Typography variant="h3">Game History</Typography>
      <br />
      <Box
        className="content-container"
        sx={{ flexDirection: "column", gap: "0", maxWidth: 800 }}
      >
        <HistoryTable historyData={historyData} />
      </Box>
      <br />
      <br />
    </>
  );
};

export default ScoreboardPage;
