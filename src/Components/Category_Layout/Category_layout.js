import { Box, Typography } from '@mui/material'
import { collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../Config/firebase'
import CardBox from '../Cards/CardBox'

function Category_layout(props) {
    // const {navigation,route}=props
    const para=useParams()
    // console.log(para.label);
    const [categoryData,setCategoryData]=useState([])
    const [LoaderState,setLoaderState]=useState(false)
    const fetch=async()=>{
        const cardData=[]
        setLoaderState(true)
       const q= query(
            collection(db, "Articles"),
            where("tag", "==", para.label),
          
          );

          const ticketDocsSnap = await getDocs(q);
          ticketDocsSnap.forEach((doc)=>{
            console.log(doc.id, '=>', doc.data());
            const d= doc.data()
            const cardDetail={
                                  title:d.alternateHeading,
                                  image:d.image,
                                  timeStamp:d.createdAt,
                                  id:doc.id,
                                  tag:d.tag
                              }
                  cardData.push(cardDetail)            
          })
          if(cardData.length<=0)
                setCategoryData([])
        else{
          setCategoryData(cardData)
        }
        setLoaderState(false)
    }
    useEffect(() => {
        console.log("useEffect");
    fetch()
  
    }, [para.label])
    
    
    if(LoaderState)
    return <Box sx={{mt:5}}> Article Not Found {LoaderState}</Box>
  return (
    <Box sx={{mt:5}}>
    <Typography sx={{fontSize:22,textTransform:"capitalize",fontWeight:500}}>{para.label}</Typography>
    <Box  style={{display:'flex',flexWrap:"wrap",flexGrow:1}}>
        {console.log("render")}
        {/* {categoryData.map(elem=><CardBox/>)}
         */}
         
         <CardBox data={categoryData} />
    </Box>
    </Box>
  )
}

export default Category_layout