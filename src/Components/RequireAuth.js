import { useEffect } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireAuth =({isLoggedIn})=>{
    const authS=useAuth()
    const location=useLocation()
    console.log("requireAuth", isLoggedIn);
    useEffect(() => {
      console.log("mounted");
    
      
    }, [])
    
    return (
    //   <p>{authS}</p>
        isLoggedIn ? <Outlet/> : <Navigate to="/api/v1/admin/login"   state={{ from: location }} replace/>
        // <p>{isLoggedIn}</p>
        // authS ? <Outlet/> : <div>abc</div>
      
       
    )

}

export default RequireAuth