import React, { useEffect, useState } from 'react'
import axios from "axios"
import { makeStyles } from '@material-ui/core'
import AliceCarousel from 'react-alice-carousel'
import { img_300, unavailable } from '../config/config'
import SecondCarousel from '../components/SecondCarousel'
import TopRated from '../components/TopRated'
const Homepage = () => {
const [top, setTop] = useState()

const useStyles = makeStyles(() => ({
    first:{
          display:"flex",
          flexDirection:"column",
          margin:"10px",
          textAlign:"center",
          backgroundColor:"#1A5276"
    },

    poster: {
        borderRadius: "10px"
      },

      title: {
        width: "100%",
        textAlign: "center",
        fontSize: "17px",
        padding: "8px 0"
      },

      subTitle: {
      
       textAlign:"center",
        paddingBottom: "3px",
        
      },
      all: {
        display:"flex",
        flexDirection:"column",
      },
      hello: {
        objectFit: "contain",
        borderRadius: "10px"
      }
      
    
  }));
const classes=useStyles()

const fetchtop=async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=1c11234814d81ec360a938da254bd1ed&language=en-US&page=1`)
    setTop(data.results);
    console.log(data.results)
}
useEffect(() => {
  fetchtop()
}, [])


const items = top?.map((c) => {
 
    
    return (
     
       <div className={classes.hello}>
    <div className={classes.first}>
      <img
        className={classes.poster}
        src={c.poster_path ? `${img_300}${c.poster_path}` : unavailable}
        
        
      />


<b className={classes.title}>{c.title}</b>
      <span className={classes.subTitle}>
        {c.media_type === "tv" ? "TV Series" : "Movie"}
      </span>

              </div>
         
              </div> 
           
);
});

  
  

  const responsive = {
    0: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  };


  return (
    <div className={classes.all}>
    <div  className="classes.top" >
    <h1 style={{color: "brown",  fontSize: "50px",marginTop:"10px",fontFamily:"cursive"}}>TOP HITS THIS WEEK</h1>
  <div className={classes.carousel}>
    <AliceCarousel
      // for infinite time
      infinite
      // after how much time it slides to next coin
      animationDuration={1500}
      responsive={responsive}
      items={items}
      autoPlay
      disableButtonsControls
      disableDotsControls
    />
  </div>
  <SecondCarousel/>
  <TopRated/>
  </div>
  </div>
  )
}

export default Homepage