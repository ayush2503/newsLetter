import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import Login from '../pages/Admin pages/Login/Login';
import { check } from '../Store/Action/AdminActions/AuthActions/AuthActions';

function Protected({ isLoggedIn, children }) {
  // console.log("firstProtected",isLoggedIn)
  // const [isLoading, setIsLoading] = useState(true);
  // const authS=useAuth()
  const [isLoading,setIsLoading]=useState(true)
  const location = useLocation()
  const {  isnavloading } = useSelector(
    (state) => state.adminAuth
  );
  const dispatch =useDispatch();
//  console.log("abc ",authS);
    // const navigate=useNavigate()
    // useEffect(() => {
    //   setIsLoading(false)
    // }, [authS])
    
    // if (!isLoggedIn) {
    //     // toast.error("Please Login to continue!")
    //     return <Navigate to="/api/v1/admin/login" replace />;

    //     // return <Login/>
    //     }
    // if(true){
    //   return <div>spinner</div>
    // }
    useEffect(() => {
      // check()
      console.log("mounted")
dispatch(check(setIsLoading))
      // setIsLoading(false)
    }, [])
    // if(isnavloading){
    //   return <p>loading</p>
    // }
  return (

    // isLoggedIn ? 
    // <Outlet/>:
    // <Navigate to="/api/v1/admin/login"   state={{ from: location }} replace/>
    isLoading? <p>Loading...</p>:<Outlet/>
  )
}

export default Protected