import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../Config/firebase';

function PrivacyPolicy() {
    const [data,setData]=useState("")
    const para=useParams()
    const fetch=async()=>{
        const q= query(
            collection(db, "Privacy Policies"),
            where("label", "==","Privacy  policy"),
          
          );


        const ticketDocsSnap= await  getDocs(q)
         
          ticketDocsSnap.forEach((doc)=>{
            console.log(doc.id, '=>', doc.data());
            setData(doc.data())  })    
        
    }
    useEffect(() => {
        fetch()
        
    }, [])
    
  return (
    <Box sx={{m:5,boxShadow:15,p:5}}>
        <Typography variant={'h5'} sx={{mb:3}}>{data?.label}</Typography>
        <Typography>{data?.body}</Typography>

    </Box>
  )
}

export default PrivacyPolicy