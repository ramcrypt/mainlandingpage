import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from 'react';
import "./message.css";
 import Faq from "./Faq";
import t from "./components/t.svg";
import groupa from "./components/groupa.svg";
import anim1 from "./components/anim1.svg";
import anim2 from "./components/anim2.svg";
import mask from "./components/mask.svg";
import Vector from "./components/Vector.svg";
import Vector1 from "./components/Vector1.svg";
import { Button,Typography } from "@mui/material";
export default function Message() {

  return (

    <div  className="ms">

      <Parallax pages={2} style={{height:'100vh',position:'relative'}}
      config={{ friction: 50 }} >
        <ParallaxLayer
          offset={0}
          speed={0.5}
          sticky={{ start: 0, end: 1 }}
        >
          <div className="box1">
            <div className="contain">
            <div className="in">

             <img src={mask} className="im1" />
            </div>
              <div className="frame">

                <h1 className="NFR"> Simple Orderform  </h1>
                <p className="conten">
                  Execute orders seamlessly with our easy to use platform
                </p>
              </div>
              <div className="btn1">
                <Button
                  sx={{
                    color: "#FFFFFF",
                    lineHeight: "18px",
                    display: "flex",
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "18px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "24px 100px",
                    ml: 9,
                    mt: 3,
                    height: 6,
                    "&:hover": {
                      background: "#000000"
                    },
                    maxWidth: 400,
                    background: "#000000"
                  }}
                  href="https://app.density.exchange/"
                >
                <Typography>  Explore Now </Typography>
                </Button>

              </div>
              <div>
              <img src={Vector1} style={{paddingBottom:0,marginBottom:0,marginLeft:150,marginTop:300}}/></div>
            </div>
            <div className="boxi">

            <img src={anim1}  style={{width:'5%',marginTop:'-70vh' }}  />
             <img src={anim1}  style={{width:'3%', }}  />
            <img src={t} style={{marginRight:- 80,paddingRight:-100}} />
            <img src={Vector} style={{marginRight:-50,width:'10%',marginLeft:0,position:"relative"}} />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          sticky={{ start: 1, end: 2 }}
        >
        <div className="box1">
          <div className="contain">
          <div className="in">

           <img src={mask} className="im1" />
          </div>
            <div className="frame1">

              <h1 className="NFR"> KYC in just 2 minutes !  </h1>
              <p className="conten">
                Complete your KYC in 3 easy steps
              </p>
            </div>
            <div className="btn1">
              <Button
                sx={{
                  color: "#FFFFFF",
                  lineHeight: "18px",
                  display: "flex",
                  fontFamily: "DM Sans",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "18px",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "24px 100px",
                  ml: 9,
                  mt: 3,
                  height: 6,
                  "&:hover": {
                    background: "#000000"
                  },

                  maxWidth: 400,
                  background: "#000000"
                }}
                href="https://app.density.exchange/"
              >
              <Typography>  Explore Now </Typography>
              </Button>

            </div>
            <div>
            <img src={Vector1} style={{paddingBottom:0,marginBottom:0,marginLeft:150,marginTop:300}}/></div>
          </div>
          <div className="boxi1">
          <img src={groupa} style={{marginRight:- 180,width:'100%'}} />
          <img src={Vector} style={{marginLeft:100,width:'10%',marginRight:-50,position:"relative"}} />
          </div>
        </div>
        </ParallaxLayer>


      </Parallax >



    </div>
  );
}
