import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { img_300, unavailable } from '../config/config';

const TopRated = () => {

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
            paddingBottom: "3px"
          },
          
        
      }));
    const classes=useStyles()
    const [top, setTop] = useState()
    const fetchtop=async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=1c11234814d81ec360a938da254bd1ed&language=en-US&page=1`)
        setTop(data.results);
        console.log(data.results)
    }
    useEffect(() => {
      fetchtop()
    }, [])


    const items = top?.map((c) => {
 

        return (
           <div>
        <div className={classes.first}>
          <img
            className={classes.poster}
            src={c.poster_path ? `${img_300}${c.poster_path}` : unavailable}
            
          />
    
    
    <b className={classes.title}>{c.title}</b>
          <span className={classes.subTitle}>
            {c.media_type === "tv" ? "TV Series" : "Movie"}
            <span className={classes.subTitle}>{c.date}</span>
          </span>
    
                  </div>
              <secondcarousel/>   
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
    
    <div  className="classes.top" >
    <h1 style={{color: "brown", fontSize: "50px",marginTop:"10px",fontFamily:"cursive"}}>Recently Released</h1>
  <div className={classes.carousel}>
    <AliceCarousel
      // for infinite time
      infinite
      // after how much time it slides to next coin
      animationDuration={1500}
      responsive={responsive}
      items={items}
    />
  </div>
  </div>
  )
}

export default TopRated