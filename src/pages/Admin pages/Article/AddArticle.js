import { Box, Button, Card, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import MultipleSelect from '../../../Components/MultiSelect'
import TextInput from '../../../Components/TextInput'

function AddArticle() {
    const [polLabel, setpolLabel] = useState("")
    const [content, setcontent] = useState("")
    const [personName, setPersonName] = React.useState([]);
  return (
    <Card  elevation={3} sx={{width:"100%",height :"80vmax",pt:'20px',mb:3,px:3,py:3,display:'flex',flexDirection:"column"}}>
        <p>Add Article</p>

        <div>
        <TextInput
            label="Headline"
            value={polLabel}
            handleChange={(val)=>setpolLabel(val.target.value)}
            // style={{width:"60vw"}}
            sx={{width:"100%",mb:4}}
        />
        <TextInput
            label="Alternative Headline"
            value={polLabel}
            handleChange={(val)=>setpolLabel(val.target.value)}
            // style={{width:"60vw"}}
            sx={{width:"100%",mb:4}}
        />
 

       <div>

          <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={"age"}
                label="Age"
                style={{width:"100%"}}
                // onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
       </div>
            


        <TextInput
            label="Article Body"
            value={content}
            handleChange={(val)=>setcontent(val.target.value)}
            // style={{width:"60vw"}}
            sx={{width:"100%",mb:4}}
            multiline={true}
        />
     
        </div>
        <div style={{display:'flex',justifyContent:"center"}}>

        <Button color="success" variant="contained" sx={{ px: 3, py: 0.5, width:"10%" }}>Add</Button>
        </div>
    </Card>
  )
}

export default AddArticle  