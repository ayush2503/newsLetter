import { Box } from '@mui/system'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { db } from '../../Config/firebase'
import { fetchCategory } from '../../Store/Action/AdminActions/SectionActions/sectionAction'

function Categories() {
  const dispatch=useDispatch()
  const [cat, setcat] = useState([])
  useEffect(() => {
    getDocs(collection(db, "Categories"))
    .then(snapData=>{
      const cata=[]
    // const data=querySnapshot.data()
    snapData.forEach((doc) => {
      console.log(doc.data())
      cata.push({label:doc.data().label,id:doc.id})
    });
  
    setcat([...cata])
  }
    )
  
  }, [])
  
  return (
    <Box sx={{width:'65%',height:"70%",bgcolor:'#FFFDFD',ml:10,boxShadow:5}}>
       {/* <Box> */}
         <Box sx={{textAlign:'center',p:1.5,bgcolor:'#9CC1BD',color:'white',fontSize:16}}>
            Categories
         </Box>
         <Box sx={{height:"90%",overflow:"auto"}}>

        {cat?.map((elem,index)=>{
          return(

           <Link key={index} to={`/category/${elem.label}`} style={{textDecoration:"none"}}>
         <Box  sx={{textAlign:'center',p:1.5,bgcolor:'white',color:'black',fontSize:16,borderBottomColor:"black",cursor:"pointer",mb:1,textTransform:"capitalize"}}>
            {elem.label}
         </Box>
           </Link> 
         
         
         )
        })}
         </Box>
       {/* </Box>  */}
    </Box>
  )
}

export default Categories