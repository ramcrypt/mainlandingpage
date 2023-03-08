
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
      <Button
        sx={{
          color: "#000000",
          display: "flex",
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: 18,
          mt: '4vh',
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
      <Typography sx={{fontWeight: 700,fontSize: "clamp(1px,18px, 24px)",
      lineHeight: 18,}} >Sign Up Now </Typography>
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
