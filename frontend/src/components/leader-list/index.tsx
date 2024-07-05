import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import "./styles.css";

interface LeaderListProps {
  winnerData: {
    player: string;
    games_won: number;
  }[];
}

export const LeaderList = ({ winnerData = [] }: LeaderListProps) => {
  // The default =[] ensures there is always a value in winnerData, even if its blank
  const defaultPlayer = { player: "No Data", games_won: "No Data" };

  const firstPlace = winnerData[0] || defaultPlayer;
  const secondPlace = winnerData[1] || defaultPlayer;
  const thirdPlace = winnerData[2] || defaultPlayer;

  return (
    <List
      className="leader-border"
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        paddingLeft: "3rem",
        paddingRight: "3rem",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{
              backgroundColor: "background.default",
              fontSize: "2rem",
            }}
          >
            🥇
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={firstPlace.player}
          secondary={"Games Won: " + firstPlace.games_won}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{ backgroundColor: "background.default", fontSize: "2rem" }}
          >
            🥈
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={secondPlace.player}
          secondary={"Games Won: " + secondPlace.games_won}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{ backgroundColor: "background.default", fontSize: "2rem" }}
          >
            🥉
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={thirdPlace.player}
          secondary={"Games Won: " + thirdPlace.games_won}
        />
      </ListItem>
    </List>
  );
};
