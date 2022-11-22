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
if(!data)
    return <div>no data</div>
  return (
    <Box sx={{bgcolor:"white",p:2,boxShadow:10,m:5}}>
        <Typography sx={{textTransform:"uppercase",fontWeight:500,fontSize:14}}>{data?.tag}</Typography>
        <Typography sx={{fontSize:24,fontWeight:500,mt:1,mb:0.1}}>{data?.heading}</Typography>
        <Typography sx={{fontSize:12}}>{moment(data?.createdAt?.seconds*1000).format("LL")}</Typography>
        <CardMedia
         component="img"
         height="325"
         image={data?.image ?data.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"}
         alt=""
         sx={{mt:2,mb:1}}
        />
        <Typography sx={{fontSize:14,fontWeight:500,mt:1.5,mb:2}}>Spread the love</Typography>
        <Typography>{data?.body}</Typography>
        
    </Box>
  )
}

export default ArticleDetails