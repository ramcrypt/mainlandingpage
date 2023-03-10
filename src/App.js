
import './index.css';
import React from 'react';
import { styled } from "@mui/material/styles";
import { Typography,Button } from "@mui/material";
import VerticalStepper from "./VerticalStepper"
import DynamicStepper  from "./DynamicStepper"
function App() {

  return (

    < >

    <div className="App"
    sx={{


        bgColor: '#1F1F24',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'}}>
    <div className="container">
    <div className="cont">

    <h1 className="head">

    Get Started With Density

    </h1>

    <p className="headp">Become a trader in 3 easy steps!</p>
    <div className="stepper">
    <DynamicStepper />
    </div>
    <div className="btn">
    <Button className="herobutton"
      sx={{

        color: "#000000",
        display: "flex",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "clamp(1px,18px, 24px)",
        lineHeight: 18,
        mt:'2.5vw',
        padding: "24px 36px",
        width: '30vw',
        "&:hover": {
          background: "#E2FF6F"
        },
        height: 66,
        background: "#E2FF6F",
        '@media (max-width: 750px)': {
          width:'60vw',
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
    </Button>
    </div>
    </div>
    <div className="imagec">
    <div className="imageback"></div>
    <img src="../images/cryptimg.svg"  alt="main-img"/>
    </div>

    </div>
    </div>
    </>
  );
}

export default App;
