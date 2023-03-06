import { Box, Typography,Button } from '@mui/material';
import Carousel2 from './Carousel2';
import React from 'react';
import ptwo from './components/ptwo.svg';
import Hero from './components/herofaa.svg';
/*import Hero from './components/mr.gif';*/
import "./home.css";
export default function Home() {
  return (
    <>
      <Box
        sx={{
          position:'relative',
          width: '100%',
          height: 'auto',
          background: '#FFFFFF',
        }}
      >
      <div style={{display:'flex',flexDirection:'column',position:'absolute',top:'auto',bottom:'33%',left:'4%',zIndex:1000,mb:10}}>
      <h1 className="mainc"> Make every Trade count with <span className="mainc" style={{ color: '#4C3CE5' }}>CRYPTO FUTURES</span>
 </h1>
 <div style={{display:'flex',flexDirection:'row',marginTop:'50px'}}>
      <p  style={{marginTop:25,fontSize: 18}}>
        Get 10 USDT as joining bonus
      </p><img  src={ptwo} style={{width:'15%'}}/></div>
      </div>
      <div style={{position:'absolute',top:'56%',left:'4%',zIndex:1000}}>

      <Button
        sx={{

          color: "#000000",
          display: "flex",
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "clamp(1px,18px, 24px)",
          lineHeight: 18,
          mt: 6,
          padding: "24px 36px",
          width: '30vw',
          "&:hover": {
            background: "#E2FF6F"
          },
          height: 66,
          background: "#E2FF6F"
        }}
        href="https://app.density.exchange/"
      >
        Sign Up Now
      </Button></div>

      <div style={{zIndex:0}}>
        <figure style={{ width: '100%' }}>

          <img className="hero-img" src={Hero} alt="Hero image" style={{paddingBottom:0}}/>
        </figure></div>
      </Box>




    </>
  );
}
