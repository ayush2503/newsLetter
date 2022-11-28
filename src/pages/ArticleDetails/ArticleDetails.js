import { Box, CardMedia, Typography } from '@mui/material'
import { doc, getDoc } from 'firebase/firestore'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../Config/firebase'

function ArticleDetails() {
    const [data,setData]=useState({})
    
    const params=useParams()
     useEffect(() => {
        const getdata=async()=>{
        const docRef = doc(db, "Articles", params.id);
        console.log(params)
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setData(docSnap.data())

          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");

          }
        }
        getdata()
    }, [])
if(Object.keys(data).length<= 0)
    return <Box sx={{mt:"3vmax"}}>
        <Typography sx={{fontSize:"1.2vmax"}}>Data not found</Typography>
        </Box>
  return (
    
    <Box sx={{bgcolor:"white",p:"1vmax",boxShadow:14,m:"2vmax",mt:"3vmax"}}>
  {      console.log(data)}
        <Typography sx={{textTransform:"uppercase",fontWeight:500,fontSize:"1vmax"}}>{data?.tag}</Typography>
        <Typography sx={{fontSize:"1.4vmax",fontWeight:500,mt:1,mb:0.1}}>{data?.heading}</Typography>
        <Typography sx={{fontSize:"0.6vmax"}}>{moment(data?.createdAt?.seconds*1000).format("LL")}</Typography>
        <CardMedia
         component="img"
        //  height="220vmax"
        width={"325"}
         image={data?.image ?data.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"}
         alt=""
         sx={{mt:2,mb:1,height:{xs:"15vmax", sm:"20vmax"}}}
        />
        <Typography sx={{fontSize:"1.2vmax",fontWeight:500,mt:"1vmax",mb:"1.1vmax"}}>{data.alternateHeading}</Typography>
        <Typography>{data?.body}</Typography>   
    </Box>
  )
}

export default ArticleDetails