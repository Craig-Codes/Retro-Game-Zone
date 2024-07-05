import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: "1px solid #891652",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#891652", // Deep Magenta
    },
    secondary: {
      main: "#361449", // Dark Purple
    },
    background: {
      default: "#FFEDD8", // Light Peach Background
      paper: "#FFFFFF", // White Background for Paper Elements
    },
  },
  typography: {
    h1: {
      color: "#361449", // Dark Purple
    },
    h2: {
      color: "#361449", // Dark Purple
    },
    h3: {
      color: "#361449", // Dark Purple
    },
    h4: {
      color: "#361449", // Dark Purple
    },
    h5: {
      color: "#361449", // Dark Purple
    },
    h6: {
      color: "#EABE6C", // Golden Yellow
    },
    body1: {
      color: "#891652", // Deep Magenta
    },
    button: {
      color: "#EABE6C", // Golden Yellow
    },
  },
});
