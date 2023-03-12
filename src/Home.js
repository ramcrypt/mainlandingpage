import { Box, Typography,Button } from '@mui/material';
import Carousel2 from './Carousel2';
import React from 'react';
import ptwo from './components/ptwo.svg';
import Hero from './components/heroimg.svg';
/*import Hero from './components/mr.gif';*/
import "./home.css";
export default function Home() {
  return (
    <>
      <Box
        sx={{
          position:'relative',
          width: '100%',
          height: '100%',
          background: '#FFFFFF',
        }}
      >
   <div style={{display:'flex',displayDirection:'column',marginLeft:'5vw'}}>
      <div style={{display:'flex',flexDirection:'column',bottom:'36%',top:'20%',left:'4%',zIndex:1000,mb:100,marginTop:'12vw',marginBottom:'14vw'}}>
      <h1 className="mainc"> Make every Trade count with <span className="mainc" style={{ color: '#4C3CE5' }}>CRYPTO FUTURES</span>
 </h1>
 <div style={{display:'flex',flexDirection:'row',paddingBottom:'1vw'}}>
      <p  style={{marginTop:'1.7vw',fontSize: '1.5vw',
      '@media (max-width: 700px)': {
        marginTop:'1.2vw'
    }}}>
        Get 10 USDT as joining bonus
      </p><img  src={ptwo} style={{width:'15%'}}/></div>



      <Button className="herobutton"
        sx={{

          color: "#000000",
          display: "flex",
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "clamp(1px,18px, 24px)",
          lineHeight: 18,

          padding: "24px 36px",
          width: '35vw',
          "&:hover": {
            background: "#E2FF6F"
          },
          height: 66,
          background: "#E2FF6F",
          '@media (max-width: 700px)': {
            padding:'10px 16px',
            height:"8vw"
        }
        }}
        href="https://app.density.exchange/"
      >
         <Typography className="heort" sx={{fontWeight: 700,fontSize: "clamp(1px,18px, 24px)",
         lineHeight: 18,
         '@media (max-width: 700px)': {
          fontSize:'2.5vw'
       }}} >Sign Up Now </Typography>
      </Button>  </div>
      <div style={{zIndex:0}}>
        <figure style={{ width: '50vw' }}>

          <img className="hero-img" src={Hero} alt="Hero image"  style={{paddingBottom:'10vw',paddingTop:'10vw'}}/>
        </figure></div>

</div>
      </Box>




    </>
  );
}
