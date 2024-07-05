import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

type GameCardProps = {
  gameName: string;
  gameImage: string;
  gameDescription: string;
  gameLink: string;
  gameRuleLink: string;
};

export const GameCard = (props: GameCardProps) => {
  const navigate = useNavigate();

  const onClickHandler = (
    event: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    event.preventDefault();
    navigate(url);
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        maxHeight: 650,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: 350, backgroundSize: "contain", marginTop: "15px" }}
        image={props.gameImage}
        title={props.gameName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.gameName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.gameDescription}
        </Typography>
      </CardContent>
      <Box
        sx={{
          height: 50,
          bottom: 0,
          left: 0,
          padding: 1,
          background: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <CardActions
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: 1,
            width: "100%",
            justifyContent: "flex-start",
            gap: 1,
            background: "rgba(255, 255, 255, 0.8)", // Optional: add a background to ensure the buttons are visible
          }}
        >
          <a
            href={props.gameLink}
            onClick={(event) => onClickHandler(event, props.gameLink)}
          >
            <Button color="primary" size="medium" variant="outlined">
              Play
            </Button>
          </a>
          <a href={props.gameRuleLink} target="_blank">
            <Button color="secondary" size="medium" variant="outlined">
              Rules
            </Button>
          </a>
        </CardActions>
      </Box>
    </Card>
  );
};
