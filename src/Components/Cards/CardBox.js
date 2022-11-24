import { Box, CardMedia } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import { Link, Navigate, redirect, useLocation, useNavigate } from "react-router-dom";
import { db } from "../../Config/firebase";
import BodyNav from "../Nav/BodyNav";

function CardBox({ data,route }) {
 const navigate=useNavigate()
 const location= useLocation()
//  console.log("location",location);
// console.log(moment(data[0].timeStamp.seconds))
if(data.length<=0)
  return <div>no data found</div>
  return (
    <>

      {data.map((elem,index) => (
        
        <Box
        key={index}
          sx={{
            // height: "100%",
            width: "15vmax",
            bgcolor: "white",
            mr:"1.4vmax",
            boxShadow: 10,
            overflow: "hidden",
            cursor:"pointer",
            mt:"1.4vmax"
          }}
        // onClick={()=><Navigate to={`category/${elem.tag}/${elem.id}`} replace/>}
        onClick={()=>navigate(location.pathname==="/"?`category/${elem.tag}/${elem.id}`:`${elem.id}`)}
        >
          <CardMedia
            component="img"
            // height="120vmax"
            width="100max"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt="Paella dish"
          />
          <div style={{ padding: "1vmax" }}>
            <p style={{fontSize:"1vmax"}}>{elem.title}</p>
            <p style={{ fontSize: "0.6vmax" }}>{moment(elem.timeStamp.seconds*1000).format('LL')}</p>
          </div>
        </Box>
        
      ))}
    </>
  );
}

export default CardBox;
