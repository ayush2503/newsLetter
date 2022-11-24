import { Box } from '@mui/system';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../Config/firebase';

function SearchPage() {
    const params = useParams()
    const [article, setarticle] = useState([])
    const [searchedPost, setsearchedPost] = useState([])
    const getSearchResults=(query)=>{
        const results = article.filter((elem)=>{
            return checkArticle(elem)
        })
        setsearchedPost(results)
    }
    const fetchArticles=async (query)=>{
        const querySnapshot = await getDocs(collection(db, "Articles"));
        const articles=[]
        // const data=querySnapshot.data()
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
            articles.push({...doc.data(),id:doc.id})
        });
        setarticle(article)
        getSearchResults(query)
      

    }
    const abc="sds"
    const checkArticle=(elem)=>{
        if(
            elem.body.toLowerCase().includes(params.label.toLowerCase()) ||
            elem.heading.toLowerCase().includes(params.label.toLowerCase()) ||
            elem.tag.toLowerCase().includes(params.label.toLowerCase())||
            elem.alternateHeading.toLowerCase().includes(params.label.toLowerCase())
        
        
        ){
            return true
        }
        else{
            return false
        }
        
    } 
    
    useEffect(() => {
        fetchArticles(params.label)
        
      
    }, [params.label])
    
  return (
    <Box>
        <p>helep</p>
    </Box>
  )
}

export default SearchPage