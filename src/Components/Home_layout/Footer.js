import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      sx={{
        height: "17vmax",
        bgcolor: "#001D22",
        p: 2,
        m: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ height: "70%", width: "10%" }}>
        <Typography variant="h2" color={"#F3F3F3"}>
          LOGO
        </Typography>
        <Typography color={"#F3F3F3"}>Follow Us On</Typography>
      </Box>
      <Box sx={{ height: "60%", width: "55%", ml: -30 }}>
        <Typography color={"white"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga
          iure, incidunt minus architecto saepe vitae dolore perferendis error
          molestiae recusandae illo quisquam blanditiis ipsa eum. Ullam sed
          quidem quisquam.
        </Typography>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "45% ",
          }}
        >
          <Link to="/about_us" style={{textDecoration:"none"}}>
            <Typography color={"white"}>About Us</Typography>
          </Link>
          <Link to="/tnc" style={{textDecoration:"none"}}>
            <Typography color={"white"}>Terms And Conditions</Typography>
          </Link>
          <Link to="/privacy_Policy" style={{textDecoration:"none"}}>
            <Typography color={"white"}>Privacy Policy</Typography>
          </Link>
          
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
