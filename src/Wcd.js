import "./wcd.css";
import React from 'react';
import { Button ,Typography} from "@mui/material";
import f1 from "./components/f1.svg";
import f3 from "./components/f3.svg";
import f4 from "./components/f4.svg";
import f2 from "./components/f2.svg";
import wcdb from "./components/wcdb.svg"

export default function Wcd() {
  const svgCode1 = `<svg width="217" height="175" viewBox="0 0 217 175" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 0.5H199C208.665 0.5 216.5 8.33502 216.5 18V174.5H18C8.33501 174.5 0.5 166.665 0.5 157V18C0.5 8.33501 8.33502 0.5 18 0.5Z" fill="url(#paint0_linear_510_970)" stroke="url(#paint1_linear_510_970)"/>
    <defs>
      <linearGradient id="paint0_linear_510_970" x1="149.375" y1="-96.5123" x2="40.8252" y2="144.523" gradientUnits="userSpaceOnUse">
        <stop stop-color="#98BA13" stop-opacity="0.58"/>
        <stop offset="1" stop-color="#2C2C34" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_510_970" x1="131.933" y1="-11.4924" x2="-57.7637" y2="70.3202" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E2FF6F"/>
        <stop offset="1" stop-color="#E2FF6F" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>`;
  const svgCode2 = `<svg width="211" height="172" viewBox="0 0 211 172" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.712891 153.361C0.712891 163.026 8.54791 170.861 18.2129 170.861H192.213C201.878 170.861 209.713 163.026 209.713 153.361V1.06152H18.2129C8.54791 1.06152 0.712891 8.89653 0.712891 18.5615V153.361Z" fill="url(#paint0_linear_510_971)" stroke="url(#paint1_linear_510_971)"/>
  <defs>
    <linearGradient id="paint0_linear_510_971" x1="144.769" y1="265.557" x2="38.2288" y2="30.9851" gradientUnits="userSpaceOnUse">
      <stop stop-color="#98BA13" stop-opacity="0.58"/>
      <stop offset="1" stop-color="#2C2C34" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_510_971" x1="127.89" y1="182.578" x2="-56.1738" y2="103.866" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E2FF6F"/>
      <stop offset="1" stop-color="#E2FF6F" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>`;
const svgCode3='<svg width="211" height="172" viewBox="0 0 211 172" fill="none" xmlns="http://www.w3.org/2000/svg">' +
'<path d="M209.697 153.361C209.697 163.026 201.862 170.861 192.197 170.861H18.1973C8.53227 170.861 0.697266 163.026 0.697266 153.361V1.06152H192.197C201.862 1.06152 209.697 8.89653 209.697 18.5615V153.361Z" fill="url(#paint0_linear_510_9901)" stroke="url(#paint1_linear_510_9901)"/>' +
'<defs>' +
'<linearGradient id="paint0_linear_510_9901" x1="65.6411" y1="265.557" x2="172.181" y2="30.9851" gradientUnits="userSpaceOnUse">' +
'<stop stop-color="#98BA13" stop-opacity="0.58"/>' +
'<stop offset="1" stop-color="#2C2C34" stop-opacity="0"/>' +
'</linearGradient>' +
'<linearGradient id="paint1_linear_510_9901" x1="-6.48833" y1="171.361" x2="266.425" y2="131.966" gradientUnits="userSpaceOnUse">' +
'<stop stop-color="#E2FF6F"/>' +
'<stop offset="1" stop-color="#E2FF6F" stop-opacity="0"/>' +
'</linearGradient>' +
'</defs>' +
'</svg>';
  return (
    <div className="wcd">
      <div className="contentw">
        <div className="svgi" style={{ margin: 10, position: "absolute" ,  '@media (max-width: 840px)': {
          width:'50%'
        }
      }}>
        <img src={wcdb} style={{width:'100%',
        '@media (max-width: 840px)': {
        width:'70%'
      }}} />
        </div>
        <h2 className="whead">Why Choose Density ?</h2>
        <p className="wp">
          Empower your trading strategy with access to cutting-edge technology and advanced trading tools.
        </p>
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
              width: '30vw',
              "&:hover": {
                background: "#E2FF6F"
              },
              height: 66,
              background: "#E2FF6F",
              '@media (max-width: 840px)': {
                padding:'10px 16px',
                height:"8vw",
                ml:'12vw'
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
      <div className="static">
        <div className="col1">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgCode1
              )}")`,
              marginBotton:"10px",
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "217px",
              height: "175px"
            }}
          >
            <div clasName="cb" style={{ marginLeft: 52, marginTop: 32 }}>
            <img src={f4} />
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgCode2
              )}")`,
              marginTop:"10px",
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "217px",
              height: "175px"
            }}
          >
            <div clasName="cb" style={{ marginLeft: 52, marginTop: 32 }}>
            <img src={f2} />
            </div>
          </div>
        </div>
        <div className="col2">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgCode1
              )}")`,
              marginBottom:"10px",
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "217px",
              height: "175px"
            }}
          >
            <div clasName="cb" style={{ marginLeft: 52, marginTop: 32 }}>
              <img src={f1} />
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgCode3
              )}")`,
              marginBotton:"10px",
              backgroundSize: "cover",
              backgroundPosition: "right",
              width: "217px",
              height: "175px"
            }}
          >
            <div clasName="cb" style={{ marginLeft: 52, marginTop: 32,display:'flex',flexDirection: 'column'}}>
              <img src={f3} style={{marginLeft:30,width:'20%',padding:0}}/>
              <p className="security">Safe and Secured </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
