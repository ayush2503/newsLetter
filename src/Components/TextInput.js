import { TextField } from '@mui/material'
import React from 'react'

function TextInput(props) {
    console.log(props);
  const {label,value,handleChange,sx}=props
  return (
    <TextField
    id="outlined-name"
    label={label}
    value={value}
    onChange={(val)=>handleChange(val)}
    variant="outlined"
    sx={sx}
    multiline={props.multiline || false}
    
  />
  )
}

export default TextInput