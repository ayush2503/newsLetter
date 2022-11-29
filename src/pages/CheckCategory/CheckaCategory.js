import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { db } from '../../Config/firebase';

function CheckaCategory({ isLoggedIn, children }) {
    const params=useParams()
    const [cat, setcat] = useState([]);
    const [loaderState, setLoaderState] = useState(false);
    
    useEffect(() => {
            setLoaderState(true)
            getDocs(collection(db, "Categories")).then((snapData) => {
              const cata = [];
              // const data=querySnapshot.data()
              snapData.forEach((doc) => {
                console.log(doc.data());
                cata.push( doc.data().label.toLowerCase());
              });
        
              setcat([...cata]);
            });
            setLoaderState(false)
}, [params.label]);
    
if(cat.length>0 && !cat.includes(params.label.toLowerCase())){
    return <Navigate to="/404" replace />;
}
            
return (
    
    children
  )
}



export default CheckaCategory