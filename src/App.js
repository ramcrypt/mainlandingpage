
import './index.css';
import React from 'react';
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
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
    </div>
    <div className="imagec">
    <div className="imageback"></div>
    <img src="../images/cryptimg.svg"/>
    </div>

    </div>
    </div>
    </>
  );
}

export default App;
