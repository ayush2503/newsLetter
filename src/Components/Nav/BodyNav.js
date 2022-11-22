import { Divider, Typography } from '@mui/material'
import React from 'react'
import css from './style.module.css'
function BodyNav({item,...props}) {
  console.log(css);
  return (
    <>
    <div style={{display:'flex',marginTop:'3vmax'}}>

      {item?.map((elem)=> <Typography sx={{mr:3,fontSize:21,cursor:'pointer',textTransform:"capitalize"}}>{elem}</Typography> )}
      
    </div>
    <Divider sx={{width:"100%",mt:1.8,bgcolor:"#F8FFFE"}}/>
    </>
  )
}

export default BodyNav