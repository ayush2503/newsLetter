import React, { useEffect } from "react";
import { Box } from "@mui/system";
import BodyNav from "../../Components/Nav/BodyNav";
import SearchAppBar from "../../Components/Nav/Navbar";
import Grid from "@mui/material/Grid";
import Categories from "../../Components/Categories/Categories";
import { CardMedia } from "@mui/material";
import CardBox from "../../Components/Cards/CardBox";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../../Components/Home_layout/Footer";
function Layout() {
  
  
  return ( 
    // <div>
    <>
      <SearchAppBar />
      <Box sx={{ px: 4, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            {/* <BodyNav item={["Latest", "Popular", "Trending"]} /> */}
            <Box sx={{ py: 2, minHeight: "80vh" }}>
              
              <Outlet/>
                {/* <CardBox/> */}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
              }}
            >
              <Categories />
            </Box>
          </Grid>
        </Grid>
        {/* <BodyNav/> */}
      </Box>
        <Footer/>
    </>

    // </div>
  );
}

export default Layout;
