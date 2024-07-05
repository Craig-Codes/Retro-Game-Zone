import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/global.css";
import Home from "./pages/home-page";
import ErrorPage from "./pages/error-page";
import ConnectFour from "./pages/connect-four-page";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { appTheme } from "./styles/themes";
import MusicPlayer from "./components/music-player";
import NoughtsAndCrosses from "./pages/noughts-&-crosses-page";

import Footer from "./components/footer";
import ScoreboardPage from "./pages/scoreboard-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    // Handle different error levels...
  },
  {
    path: "connect-four",
    element: <ConnectFour />,
  },
  {
    path: "noughts-and-crosses",
    element: <NoughtsAndCrosses />,
  },
  {
    path: "scoreboard",
    element: <ScoreboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />
    <div className="page-container">
      <MusicPlayer />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </ThemeProvider>
);
