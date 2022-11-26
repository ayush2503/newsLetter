import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
// import {makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";

import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import SearchBox from "../SearcBox/SearchBox";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     // "& .MuiFilledInput-root": {
//     //   backgroundColor: "rgb(232, 241, 250)"
//     // },
//     // "& .MuiFilledInput-root:hover": {
//     //   backgroundColor: "rgb(250, 232, 241)",
//     //   // Reset on touch devices, it doesn't add specificity
//     //   "@media (hover: none)": {
//     //     backgroundColor: "rgb(232, 241, 250)"
//     //   }
//     // },
//     // "& .MuiFilledInput-root.Mui-focused": {
//     //   backgroundColor: "rgb(250, 241, 232)"
//     // }
//     "& .MuiTextField-root:hover":{
//        color:"white"
//     }
//   }
// }));
export default function SearchAppBar() {
  // const classes = useStyles();
  const [query, setquery] = useState("")
  const [toggleSearch, settoggleSearch] = useState(false)
  const menuItems=[{label:"buisness",route:"/category/buisness"},{label:"sports",route:"/category/sports"},{label:"politics",route:"/category/politics"}]
  const params=useParams()

  console.log(" dada",params);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{justifyContent:'space-between'}}>
          <div style={{display:'flex'}}>
            <Link to="/" style={{textDecoration:"none"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={"white"}
            // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            sx={{fontSize:"1.5vmax"}}
          >
            Logo
          </Typography>
            </Link>
          <Box  sx={{ml:"3vmax"}} style={{ display: "flex", alignItems: "center" }}>
          <Link style={{textDecoration:"none"}} to="/">
            <Typography  sx={{color:params.label===undefined?'white':"#dadada",fontSize:"1vmax",mr:"1vmax",  '&:hover': {
              color: 'white'
            }}}>
              Home
            </Typography>
            </Link>
          {menuItems.map(elem=>
            <Link style={{textDecoration:"none"}} to={`${elem.route}`}>
            <Typography  sx={{color:elem.label===params.label ?'white':"#dadada",fontSize:"1vmax",mr:"1vmax",textTransform:"capitalize",  '&:hover': {
              color: 'white'
            }}}>
             {elem.label}
            </Typography>
            </Link>
            
            )}
            {/* <Link style={{textDecoration:"none"}} to="/category/buisness">
            <Typography  sx={{color:'white',fontSize:"1vmax",mr:"1vmax"}}>
              Buisness
            </Typography>
            </Link>
            <Link style={{textDecoration:"none"}}  to="/category/sports">
            <Typography  sx={{color:'white',fontSize:"1vmax",mr:"1vmax"}}>
              Sports
            </Typography>
            </Link >
            <Link style={{textDecoration:"none"}}  to="/category/politics">
            <Typography  sx={{color:'white',fontSize:"1vmax",mr:"1vmax"}}>
              Politics
            </Typography>
            </Link> */}
          </Box>
          </div>
         
          <SearchBox/>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
