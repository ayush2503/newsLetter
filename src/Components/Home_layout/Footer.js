import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Footer() {
  return (
    <Box
      sx={{
        height:"100%",
        bgcolor: "#001D22",
        // bgcolor:"purple",
        p: "2vmax",
        m: 0,
        display: "flex",
        alignItems: "center",
       justifyContent:"center"
      }}
    >
      <div style={{ height: "80%", width: "20%" }}>
        <Typography variant="h2" color={"#F3F3F3"} sx={{fontSize:"2.8vmax"}}>
          LOGO
        </Typography>
        <Typography color={"#F3F3F3"} sx={{fontSize:"1vmax"}}>Follow Us On</Typography>
        <Box sx={{mt:"1vmax",display:"flex",alignItems:"center"}}>
        <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">
        <InstagramIcon sx={{color:"white",fontSize:"1.5vmax"}}  />

        </Link>
        <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">

        <FacebookIcon sx={{color:"white",ml:"1vmax",mr:"1vmax",fontSize:"1.5vmax"}} />
        </Link>
        <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">

        <LocalPhoneIcon sx={{color:"white",fontSize:"1.5vmax"}}/>
        </Link>
        </Box>
      </div>
      <div style={{ height: "60%", width: "55%",marginLeft:"1vmax" }}>
        <Typography color={"white"} sx={{fontSize:"1vmax"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga
          iure, incidunt minus architecto saepe vitae dolore perferendis error
          molestiae recusandae illo quisquam blanditiis ipsa eum. Ullam sed
          quidem quisquam.
        </Typography>
        <Box
          sx={{
            mt: "1vmax",
            display:"flex",
            // width: "9% ",
          }}
        >
          {/* <Link to="/about_us" style={{textDecoration:"none"}}>
            <Typography color={"white"}>About Us</Typography>
          </Link> */}
          <Link to="/tnc" style={{textDecoration:"none"}}>
            <Typography color={"white"} sx={{fontSize:"1.1vmax",pr:"1.3vmax"}}>Terms And Conditions</Typography>
          </Link>
          <Link to="/privacy_Policy" style={{textDecoration:"none"}}>
            <Typography color={"white"} sx={{fontSize:"1.1vmax"}}>Privacy Policy</Typography>
          </Link>
          
        </Box>
      </div>
    </Box>
  );
}

export default Footer;
