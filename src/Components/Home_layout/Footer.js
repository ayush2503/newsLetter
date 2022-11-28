import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/firebase";
import logo from "../../Assets/Logo/logo.svg"
import { display } from "@mui/system";
export default function Footer() {
    const [fetchContacts, setfetchContacts] = useState([])
    const params=useParams()
    useEffect(() => {
        // fetchContacts.length<=0 &&
        getDocs(collection(db, "SocialLinks")).then((snapData) => {
            const links = [];
            // const data=querySnapshot.data()
            snapData.forEach((doc) => {
              console.log(doc.data());
              links.push({ handle: doc.data().handle, id: doc.id,handleLink:doc.data().handleLink });
            });   
            setfetchContacts([...links]);
    }
    )},[params.label])
   
    
    
  return (
    <Box
      sx={{
        height:"100%",
        bgcolor: "#001D22",
        // bgcolor:"purple",
        p: "2vmax",
        m: 0,
        display: "flex",
        alignItems: "center",
       justifyContent:"center"
      }}
    >
      <div style={{ height: "80%", width: "20%" }}>
       
        <Link to="/"> 
        <img src={logo} style={{width:"9vmax",marginBottom:"0.5vmax",marginRight:"1vmax"}} alt="" />
        </Link>
        <Typography color={"#F3F3F3"} sx={{fontSize:"1vmax"}}>Follow Us On</Typography>

        <Box sx={{mt:"1vmax",display:"flex",alignItems:"center"}}>

        {fetchContacts?.map((elem)=>{
            if(elem.handleLink !== ""){

                console.log({elem});
                if(elem.handle==="Carrer"){
                  return
                  (<Box>
                        <Typography>Carrer</Typography>
                  </Box>)

                }
                switch (elem.handle) {
                    // case "Gmail":
                        
                    //     return <a href={elem.handleLink} target="_blank">

                    //     <MailIcon sx={{color:"white",fontSize:"1.5vmax",mr:"1vmax","&:hover":{color:"#49C5B6"}}}/>
                    //     </a>;
                    // case "PhoneNumber":
                    //         return <a href={elem.handleLink} target="_blank">

                    //         <LocalPhoneIcon sx={{color:"white",fontSize:"1.5vmax",mr:"1vmax","&:hover":{color:"#49C5B6"}}}/>
                    //         </a>
                    case "Twitter":
                        return <a href={elem.handleLink} target="_blank">

                        <TwitterIcon sx={{color:"white",fontSize:"1.5vmax",mr:"1vmax","&:hover":{color:"#49C5B6"}}}/>
                        </a>
                    case "Instagram":
                        return  <a href={ elem.handleLink} target="_blank">
                        <InstagramIcon sx={{color:"white",fontSize:"1.5vmax",mr:"1vmax","&:hover":{color:"#49C5B6"}}}  />
                        </a>
                    case "Facebook":
                        return    <a href={elem.handleLink} target="_blank">

                        <FacebookIcon sx={{color:"white",mr:"1vmax",fontSize:"1.5vmax","&:hover":{color:"#49C5B6"}}} />
                        </a>
                    default:
                        break;
                }}
        })}
       
        </Box>
      </div>
      <div style={{ height: "60%", width: "55%",marginLeft:"1vmax" }}>
        <Typography color={"white"} sx={{fontSize:"1vmax"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fuga
          iure, incidunt minus architecto saepe vitae dolore perferendis error
          molestiae recusandae illo quisquam blanditiis ipsa eum. Ullam sed
          quidem quisquam.
        </Typography>
        <Box
          sx={{
            mt: "1vmax",
            display:"flex",
            // width: "9% ",
          }}
        >
          {/* <Link to="/about_us" style={{textDecoration:"none"}}>
            <Typography color={"white"}>About Us</Typography>
          </Link> */}
          <Link to="/tnc" style={{textDecoration:"none"}}>
            <Typography color={"white"} sx={{fontSize:"1.1vmax",mr:"1.3vmax","&:hover":{color:"#49C5B6"}}}>Terms And Conditions</Typography>
          </Link>
          <Link to="/privacy_Policy" style={{textDecoration:"none"}}>
            <Typography color={"white"} sx={{fontSize:"1.1vmax",mr:"1.3vmax","&:hover":{color:"#49C5B6"}}}>Privacy Policy</Typography>
          </Link>
          <Link to="/api/v1/admin" style={{textDecoration:"none"}}>
            <Typography color={"white"} sx={{fontSize:"1.1vmax","&:hover":{color:"#49C5B6"}}}>Admin</Typography>
          </Link>
          
        </Box>
      </div>
    </Box>
  )
}


