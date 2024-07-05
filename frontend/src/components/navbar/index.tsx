import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { useNavigate } from "react-router-dom";
import "./index.css";
const pages = ["Home", "Noughts & Crosses", "Connect 4", "Scoreboard"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(null);
    const pageName = event.currentTarget.innerText;
    navigatePage(pageName);
    setDrawerOpen(!drawerOpen);
  };

  const navigatePage = (linkName: string) => {
    switch (linkName) {
      case "HOME":
      case "Home":
        navigate(`/`);
        break;
      case "CONNECT 4":
      case "Connect 4":
        navigate(`/connect-four`);
        break;
      case "NOUGHTS & CROSSES":
      case "Noughts & Crosses":
        navigate(`/noughts-and-crosses`);
        break;
      case "RetroGameZone":
        navigate("/");
        break;
      case "Scoreboard":
      case "SCOREBOARD":
        navigate("/scoreboard");
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="sticky" id="navbar">
      <Container
        maxWidth="xl"
        sx={{
          "@media (min-width: 1800px)": {
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <Toolbar disableGutters>
          <VideogameAssetIcon
            className="nav-icon"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "32px",
              color: "lightgrey",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              cursor: "crosshair",
            }}
            onClick={handleCloseNavMenu}
          >
            RetroGameZone
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  aria-label={`${page}-button-small`}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#EABE6C", // lighter color for hover
                      color: "white",
                    },
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <VideogameAssetIcon
            className="nav-icon"
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              fontSize: "32px",
              color: "lightgrey",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              cursor: "crosshair",
            }}
            onClick={handleCloseNavMenu}
          >
            RetroGameZone
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                aria-label={`${page}-button-large`}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#361449", // lighter color for hover
                    color: "white",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
