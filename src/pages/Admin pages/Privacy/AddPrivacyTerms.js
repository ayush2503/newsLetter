import { Box, Button, Card } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextInput from '../../../Components/TextInput'
import { addPrivacyPolicies } from '../../../Store/Action/AdminActions/SectionActions/sectionAction'

function AddPrivacyTerms() {
    const [polLabel, setpolLabel] = useState("")
    const [content, setcontent] = useState("")
    const dispatch=useDispatch()
  return (
    <Card  elevation={3} sx={{width:"100%",height :"25vmax",pt:'20px',mb:3,px:3,py:3,display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
        <p>Add Privacy Policies</p>

        <div>
        <TextInput
            label="Policy Label"
            value={polLabel}
            handleChange={(val)=>setpolLabel(val.target.value)}
            // style={{width:"60vw"}}
            sx={{width:"100%",mb:4}}
        />
        <TextInput
            label="Body"
            value={content}
            handleChange={(val)=>setcontent(val.target.value)}
            // style={{width:"60vw"}}
            sx={{width:"100%",mb:4}}
            multiline={true}
        />
     
        </div>
        <div style={{display:'flex',justifyContent:"center"}}>

        <Button color="success" variant="contained" onClick={()=>dispatch(addPrivacyPolicies({value:polLabel,data:content}))} sx={{ px: 3, py: 0.5, width:"10%" }}>Add</Button>
        </div>
    </Card>
  )
}

export default AddPrivacyTerms