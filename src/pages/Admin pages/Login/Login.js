import { Button, Card, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../../Store/Action/AdminActions/AuthActions/AuthActions'

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch=useDispatch()
const handleEmailChange=(val)=>{
    setemail(val)
}
const handlePassChange=(val)=>{
    setpassword(val)
}
const handleLogin=()=>{
    dispatch(loginAction())
}
    return (
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "#111827", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card elevation={3} sx={{ width: "25vmax", height: "36vmax", pt: '20px', mb: 3, px: 3, py: 3, display: 'flex', flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>

                    <p>LOGIN</p>
                    <div style={{ margin: "2vmax" }}>
                        <h3 style={{ fontSize: "1.4vmax", marginBottom: "0.5vmax" }}>Log In To Admin</h3>
                        <p style={{ fontSize: "0.8vmax", color: "#bababa" }}>Enter your email and password below</p>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <TextField
                        variant='outlined'
                        label="Email"
                        value={email}
                        style={{ width: "100%",marginBottom:"2vmax" }}
                        onChange={(e)=>handleEmailChange(e.target.value)}
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        style={{ width: "100%" }}
                        value={password}
                        onChange={(e)=>handlePassChange(e.target.value)}
                    />
                </div>
                <div style={{width:"100%",marginBottom:"2vmax"}}>

                <Button variant="contained" sx={{width:"100%"}} onClick={()=>handleLogin()} >Log In</Button>
                </div>

            </Card>

        </div>
    )
}

export default Login