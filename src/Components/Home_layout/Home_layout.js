import { CardMedia } from '@mui/material'
import { Box } from '@mui/system'
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../Config/firebase';
import CardBox from '../Cards/CardBox';
import BodyNav from '../Nav/BodyNav'

function Home_layout({data}) {
    const [homeElem, sethomeElem] = useState({})
    const [HomeCategory,setHomeCategory]=useState([])
    useEffect(() => {
      getDocs(collection(db, "Articles")).then(
          (snapData) => {
              let temp={}
            snapData.forEach((elem)=>{
                // const obj={}
                const d=elem.data()
                const category=d.tag
                const cardDetail={
                    title:d.alternateHeading,
                    image:d.image,
                    timeStamp:d.createdAt,
                    id:elem.id,
                    tag:d.tag
                }
                console.log(cardDetail);
               if(temp[category]===undefined){
                temp={...temp,
                    [category]:[cardDetail]
                }
               }
               else{
                temp[category].push(cardDetail)
               }
            })
            console.log(temp)
            sethomeElem(temp)
            setHomeCategory(Object.keys(temp))
            console.log(temp);
        }

        );
      }, []);
  return (
 <>
 {HomeCategory.map(elem => {
return(
 <Box>
    <BodyNav item={[elem]} />
      <Box
        sx={{
          height: "17vmax",
          display: "flex",
          // overflow: "auto",
          flexWrap: "nowrap",
          width: "100%",
          mt:1.8    
        }}
      >
        {<CardBox data={homeElem[elem].splice(0,4)} />}
     
      </Box>

 </Box>
)
 })}
 </>
  )
}

export default Home_layout