import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, .2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "35%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "20%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "28ch",
      },
    },
  },
}));

export default function SearchAppBar() {
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
          >
            Logo
          </Typography>
            </Link>
          <Box  sx={{ml:5}} style={{ display: "flex", alignItems: "center" }}>
            <Link style={{textDecoration:"none"}} to={"/"}>
            <Typography  sx={{color:'white',fontSize:16,mr:2}}>
              Home
            </Typography>
            </Link>
            <Link style={{textDecoration:"none"}} to="/category/buisness">
            <Typography  sx={{color:'white',fontSize:16,mr:2}}>
              Buisness
            </Typography>
            </Link>
            <Link style={{textDecoration:"none"}}  to="/category/sports">
            <Typography  sx={{color:'white',fontSize:16,mr:2}}>
              Sports
            </Typography>
            </Link >
            <Link style={{textDecoration:"none"}}  to="/category/politics">
            <Typography  sx={{color:'white',fontSize:16,mr:2}}>
              Politics
            </Typography>
            </Link>
          </Box>
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
