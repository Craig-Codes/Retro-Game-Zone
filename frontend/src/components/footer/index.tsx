import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      id="footer"
      sx={{
        justifyContent: "center",
        display: "flex",
        position: "absolute",
        width: "100%",
        overflow: "hidden",
        height: "2.5rem",
        bottom: 0,
        marginTop: "10px",
        marginBottom: "10px",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle1" color="secondary.main" id="footer">
        Copyright ©{new Date().getFullYear()} RetroGameZone
      </Typography>
    </Box>
  );
};

export default Footer;
