import { Box, Button, Card } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextInput from '../../../Components/TextInput'
import { addCategory } from '../../../Store/Action/AdminActions/SectionActions/sectionAction'

function AddCategory() {
    const [cat, setcat] = useState("")
    const dispatch=useDispatch()
    const addCategoryHandler=()=>{
        console.log(cat)
        dispatch(addCategory(cat))
    }
  return (
    <Card  elevation={3} sx={{width:"100%",height :"12vmax",pt:'20px',mb:3,px:3,py:3,display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
        <p>Add Category</p>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"2vmax"}}>
        <TextInput
            label="Category"
            value={cat}
            handleChange={(val)=>setcat(val.target.value)}
            // style={{width:"60vw"}}
            sx={{width:"80%"}}
        />
     <Button color="success" variant="contained" sx={{ px: 3, py: 0.5 }} onClick={()=>addCategoryHandler()}>Add</Button>
        </div>
    </Card>
  )
}

export default AddCategory