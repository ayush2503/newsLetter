import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ADMIN_DETAILS, IS_ADMIN_AUTHENTICATED, NAV_LOADING } from "../../../Types/AdminType/AuthTypes";
import { auth } from "../../../../Config/firebase";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// const auth = getAuth();
export const check=(stopLoad)=>dispatch=>{
  console.log("in check")
  dispatch({
    type:NAV_LOADING,
    isnavloading:true
  })
    const loggedInUser = localStorage.getItem("isAuthenticated");
    console.log("check bc",loggedInUser)
    try{
    if(loggedInUser){
      const foundUser = JSON.parse(loggedInUser)
      console.log("here it is",foundUser)
      // setauthState(foundUser)
      // setIsloading(false)
      dispatch({
        type:IS_ADMIN_AUTHENTICATED,
        ifAuthenticated:foundUser
      })
    }
    else{
      console.log("elese part");
    
      dispatch({
        type:IS_ADMIN_AUTHENTICATED,
        ifAuthenticated:false
      })
    }
   } catch (error) {
    console.log("eerr")
   
    dispatch({
      type:IS_ADMIN_AUTHENTICATED,
      ifAuthenticated:false
    })
   }
   finally{
    stopLoad(false)
   }
 
   
    
  
  
        // dispatch({
        //     type:ADMIN_DETAILS,
        //     userDetails:{}
        //   })
        
    
    dispatch({
      type:NAV_LOADING,
      isnavloading:false
    })
}
export const checkAuth = ()=>dispatch=>{
  dispatch({
    type:NAV_LOADING,
    isnavloading:true
  })
  console.log("hereabc")
  const res= localStorage.getItem("isAuthenticated")
  console.log("checkAuth",res);
  dispatch({
    type:IS_ADMIN_AUTHENTICATED,
    ifAuthenticated:true
  })
  dispatch({
    type:NAV_LOADING,
    isnavloading:false
  })
}
export const loginAction=(payload,navigate)=>dispatch=>{
    console.log("here")
    dispatch({
      type: NAV_LOADING,
      isnavloading:true
    })
    // createUserWithEmailAndPassword(auth, "admin1234@gmail.com", "admin)(*&")
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   console.log(user)
    //   dispatch({
    //     type:ADMIN_DETAILS,
    //     userDetails:user
    //   })
    //   dispatch({
    //     type:IS_ADMIN_AUTHENTICATED,
    //     ifAuthenticated:true
    //   })
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // 
    //   console.log("error",errorCode)
    // });
    // signInWithEmailAndPassword(auth, "admin1234@gmail.com","admin)(*&")
    signInWithEmailAndPassword(auth, payload.email,payload.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
       dispatch({
        type:ADMIN_DETAILS,
        userDetails:user
      })
      localStorage.setItem('isAuthenticated',  JSON.stringify(true));
      dispatch({
        type:IS_ADMIN_AUTHENTICATED,
        ifAuthenticated:true
      })
      toast.success("Successfully Logged In !!")
    navigate("/api/v1/admin/article",{replace:true})
    dispatch({
      type: NAV_LOADING,
      isnavloading:false
    })
      
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.log(errorMessage)
    toast.error("Invalid Username / Password")
  });
}

export const logoutAction=()=>dispatch=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signed out successfully")
        dispatch({
            type:ADMIN_DETAILS,
            userDetails:[]
          })
          dispatch({
            type:IS_ADMIN_AUTHENTICATED,
            ifAuthenticated:false
          })
          localStorage.setItem('isAuthenticated',  JSON.stringify(false));
          // console.log("logout action")
          toast.success("Successfully Logged Out !!")
         
      }).catch((error) => {
        // An error happened.
      });
      
}