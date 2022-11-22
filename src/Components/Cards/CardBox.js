import { Box, CardMedia } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { db } from "../../Config/firebase";
import BodyNav from "../Nav/BodyNav";

function CardBox({ data,route }) {
 const navigate=useNavigate()
// console.log(moment(data[0].timeStamp.seconds))
if(data.length<=0)
  return <div>no data found</div>
  return (
    <>

      {data.map((elem,index) => (
        
        <Box
        key={index}
          sx={{
            height: "100%",
            width: "22%",
            bgcolor: "white",
            mr: 3,
            boxShadow: 10,
            overflow: "hidden",
            cursor:"pointer",
            mt:3
          }}
        // onClick={()=><Navigate to={`category/${elem.tag}/${elem.id}`} replace/>}
        onClick={()=>navigate(`${elem.id}`)}
        >
          <CardMedia
            component="img"
            height="175"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt="Paella dish"
          />
          <div style={{ padding: "1vmax" }}>
            <p>{elem.title}</p>
            <p style={{ fontSize: "0.6vmax" }}>{moment(elem.timeStamp.seconds*1000).format('LL')}</p>
          </div>
        </Box>
        
      ))}
    </>
  );
}

export default CardBox;
