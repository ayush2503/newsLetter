import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardBox from '../../Components/Cards/CardBox';
import { db } from '../../Config/firebase';

function SearchPage() {
    const params = useParams()
    const [article, setarticle] = useState([])
    const [searchedPost, setsearchedPost] = useState([])
    const getSearchResults=(query)=>{
        console.log("query",query);
        const results = query.filter((elem)=>{
            return checkArticle(elem)===true
        })

        setsearchedPost(results)
        // console.log("searched posts",results)
    }
    const fetchArticles=async (query)=>{
        const querySnapshot = await getDocs(collection(db, "Articles"));
        const articles=[]
        // const data=querySnapshot.data()
        querySnapshot.forEach((doc) => {
        //   console.log(doc.data())
        const d = doc.data();
        const cardDetail = {
            title: d.alternateHeading,
            image: d.image,
            timeStamp: d.createdAt,
            id: doc.id,
            tag: d.tag,
            isTrending:d.isTrending,
            alternateHeading:d.alternateHeading,
            body:d.body
          };
            articles.push(cardDetail)
        });
        setarticle([...articles])
        // console.log("searched",article)
    //     getSearchResults([...articles])
    //   console.log(searchedPost);

    }
    useEffect(() => {
        console.log("here",article)
        getSearchResults(article)
    }, [article])
    
    
    const abc="sds"
    const checkArticle=(elem)=>{
        console.log("here")
        // console.log( elem.tag?.toLowerCase().includes(params.query?.toLowerCase()));
        // clg
        if(
            elem.body?.toLowerCase().includes(params.query?.toLowerCase()) ||
            elem.heading?.toLowerCase().includes(params.query?.toLowerCase()) ||
            elem.tag?.toLowerCase().includes(params.query?.toLowerCase())||
            elem.alternateHeading?.toLowerCase().includes(params.query?.toLowerCase())
        
        
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
    <Box sx={{mt:"3vmax"}}>

    <Typography variant="h5" sx={{fontSize:"1.3vmax"}}>Search Results</Typography>
    <Box style={{display:"flex",flexWrap:"wrap",flexGrow:1}}>
       {/* searchedPost */}
       {console.log("search",searchedPost)}
       <CardBox data={searchedPost}/>
    </Box>
    </Box>
  )
}

export default SearchPage