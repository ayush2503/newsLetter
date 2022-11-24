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
    <Box sx={{bgcolor:"white",p:"1vmax",boxShadow:14,m:"2vmax",mt:"3vmax"}}>
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
        <Typography sx={{fontSize:"1.2vmax",fontWeight:500,mt:1.5,mb:2}}>Spread the love</Typography>
        {/* <Typography>{data?.body}</Typography> */}
        <Typography sx={{fontSize:"1vmax"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt porro, alias expedita eligendi quo doloremque beatae veritatis voluptatum hic. Molestiae quibusdam voluptatibus deserunt similique delectus, voluptatum quis reprehenderit tempora nihil inventore quae saepe esse! Delectus sapiente hic, voluptatem est voluptates error architecto veniam earum culpa molestiae ex? Suscipit necessitatibus doloremque aliquid, est totam tempora culpa accusantium doloribus? Quae aut sequi vero, quasi eos minus deserunt incidunt libero velit nostrum optio dignissimos aliquam perferendis dolores fugiat voluptate minima reiciendis dolorum itaque praesentium. Nisi illo, accusamus voluptatibus perferendis quisquam earum magnam culpa. Quisquam nihil obcaecati necessitatibus. Enim fugiat omnis perferendis excepturi explicabo?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde eius labore est reiciendis dolor sequi odio inventore maxime? Sapiente sequi molestiae corrupti esse ab nam cupiditate iusto quia ullam sed molestias libero facilis in aut sint quis fuga, nesciunt alias minima. Neque perspiciatis pariatur at excepturi odit omnis minus aperiam temporibus consectetur dolor, nulla quibusdam quae eveniet, eaque quam nesciunt iure consequuntur ullam ex voluptatibus saepe ipsa sint? Voluptates amet fugiat ut sequi neque placeat reprehenderit nemo harum, doloremque, aliquid incidunt consequuntur. Praesentium officiis esse, accusamus dolorum dolores magnam illo eum. Consequuntur eaque tenetur distinctio officiis quos voluptas a deserunt!
        </Typography>
        
    </Box>
  )
}

export default ArticleDetails