import { Box, Button, Card, InputLabel, ListItemText, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../../../Components/Loader/Loader'
import MultipleSelect from '../../../Components/MultiSelect'
import BasicSelect from '../../../Components/SelectInput'
import TextInput from '../../../Components/TextInput'
import { addArticleAction, fetchCategory } from '../../../Store/Action/AdminActions/SectionActions/sectionAction'
// import MenuItem from '@mui/material/MenuItem';


function AddArticle() {
    const [heading, setHeading] = useState("")
    const [subHead, setSubhead] = useState("")
    const [category, setcategory] = useState("")
    const [body, setBody] = React.useState("");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategory())
    }, [])
    const { categories, sectionLoader } = useSelector(
        state => state.navSection
    )
    const handleArticle=()=>{
        console.log("first")
            dispatch(addArticleAction({heading,subHead,category,body}))
            setHeading("")
            setSubhead("")
            setcategory("")
            setBody("")
    }

    if (sectionLoader) {
        return <Loader />
    }

    return (
        <>
        <Card elevation={3} sx={{ width: "100%", mt:-4, mb: 3, px: 2, py: 2 }}>
        <p>Add Article</p>
        </Card>
        <Card elevation={3} sx={{ width: "100%", minHeight: "20vmax", pt: '20px', mb: 3, px: 3, py: 3, display: 'flex', flexDirection: "column" }}>
          

            <div>
                <TextInput
                    label="Headline"
                    value={heading}
                    handleChange={(val) => setHeading(val.target.value)}
                    // style={{width:"60vw"}}
                    sx={{ width: "100%", mb: 4 }}
                />
                <TextInput
                    label="Alternative Headline"
                    value={subHead}
                    handleChange={(val) => setSubhead(val.target.value)}
                    // style={{width:"60vw"}}
                    sx={{ width: "100%", mb: 4 }}
                />


                <TextInput
                    label="Article Body"
                    value={body}
                    handleChange={(val) => setBody(val.target.value)}
                    // style={{width:"60vw"}}
                    sx={{ width: "100%", mb: 4 }}
                    multiline={true}
                />

                <BasicSelect
                    label='Select Category'
                    value={category}
                    handleChange={(val) => setcategory(val)}
                    dataList={categories || []}
                    sx={{ mb: 4 }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: "center" }}>
               
                <Button color="success" variant="contained" sx={{ px: 4, py: 1, width: "10vmax" }} onClick={()=>handleArticle()} >Add</Button>
               
            </div>
        </Card>
        </>
    )
}

export default AddArticle  