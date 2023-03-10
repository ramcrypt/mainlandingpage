import "./wcd.css";
import React from 'react';
import { Button ,Typography} from "@mui/material";
import f1 from "./components/f1.svg";
import f3 from "./components/f3.svg";
import f4 from "./components/f4.svg";
import f2 from "./components/f2.svg";
import wcdb from "./components/wcdb.svg";
import f11 from "./components/f11.svg";
import f22 from "./components/f22.svg";
import f33 from "./components/f22.svg"
export default function Wcd() {
  
  return (
    <div className="wcd" style={{height:'auto',justifyContent:'center',paddingBottom:'20px'}}>
      <div className="contentw" style={{alignItems:'center'}}>


        <h2 className="whead" style={{fontSize:'7vw',marginLeft:0,marginTop:'4vw'}}>Why Choose Density ?</h2>
        <div className="static" style={{marginBottom:'8vw',marginTop:'3vw'}}>
          <div className="col1" style={{marginRight:'5vw'}}>
             <div>
              <div  style={{ position:'relative',marginBottom:'1vw' }}>

              <img src={f11 }style={{position:'absolute',width:'33vw'}}/>
              <img src={f4 }  style={{alignItems:'center',width:'27vw',position:'relative',zIndex:5,marginTop:'2vw',marginLeft:'3vw'}}  />
              </div>
               </div>
               <div>
                <div  style={{ position:'relative' }}>

                <img src={f33 }style={{position:'absolute',width:'33vw'}}/>
                <img src={f2 }  style={{alignItems:'center',width:'27vw',position:'relative',zIndex:5,marginTop:'2vw',marginLeft:'3vw'}}  />
                </div>
                 </div>
          </div>
          <div className="col2">
          <div>
           <div  style={{ position:'relative',marginBottom:'5vw' }}>

           <img src={f11 }style={{position:'absolute',width:'33vw'}}/>
           <img src={f1 }  style={{alignItems:'center',width:'27vw',position:'relative',zIndex:5,marginTop:'2vw',marginLeft:'3vw'}}  />
           </div>
            </div>
            <div>
             <div  style={{ position:'relative' }}>

             <img src={f33 }style={{position:'absolute',width:'33vw'}}/>
             <img src={f3 }  style={{alignItems:'center',width:'9vw',marginTop:'2vw',marginLeft:'9vw'}}  />
               <p  style={{position:'relative',fontWeight:700,fontSize:'3vw',marginLeft:'4vw',color:'#ffffff',zIndex:10}}>Safe and Secured </p>
             </div>
              </div>

          </div>
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
              mt: '3vw',
              ml: '6.5vw',
              padding: "24px 36px",
              width: '70vw',
              "&:hover": {
                background: "#E2FF6F"
              },
              height: 66,
              background: "#E2FF6F",
              '@media (max-width: 840px)': {
                padding:'10px 16px',
                height:"8vw",

            }
            }}
            href="https://app.density.exchange/"
          >
             <Typography className="heort" sx={{fontWeight: 700,fontSize: "clamp(1px,18px, 24px)",
             lineHeight: 18,
             '@media (max-width: 700px)': {
              fontSize:'2.5vw'
           }}} >Trade Now </Typography>
          </Button>
        </div>
      </div>

    </div>
  );
}
