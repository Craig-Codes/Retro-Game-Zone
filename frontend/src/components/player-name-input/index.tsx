import { TextField } from "@mui/material";

type PlayerNameInputProps = {
  label: string;
  name: string;
  handleChange: (value: HTMLInputElement | HTMLTextAreaElement) => void;
};

export const PlayerNameInput = (props: PlayerNameInputProps) => {
  return (
    <TextField
      data-testid="player-name-input"
      id={props.label}
      label={props.label}
      variant="standard"
      value={props.name}
      onChange={(
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => props.handleChange(event.currentTarget)}
    />
  );
};
