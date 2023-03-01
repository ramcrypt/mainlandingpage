import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from 'react';
import "./message.css";
 import Faq from "./Faq";


import { Button,Typography } from "@mui/material";
export default function Message() {

  return (

    <div>

      <Parallax pages={3}  style={{height:'100vh',position:'relative'}}
      config={{ friction: 50 }} >
        <ParallaxLayer
          offset={0}
          speed={0.5}
          sticky={{ start: 0, end: 1 }}
        >
          <div className="box1">
            <div className="contain">
              <div className="frame">
                <div className="in">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.657227"
                      y="1.42969"
                      width="17.8428"
                      height="17.8413"
                      stroke="black"
                    />
                    <line
                      y1="-0.5"
                      x2="26.3962"
                      y2="-0.5"
                      transform="matrix(0.707135 0.707078 -0.707135 0.707078 0.175537 1.26562)"
                      stroke="black"
                    />
                    <line
                      y1="-0.5"
                      x2="26.3962"
                      y2="-0.5"
                      transform="matrix(-0.707135 0.707078 -0.707135 -0.707078 18.6658 0.929688)"
                      stroke="black"
                    />
                  </svg>
                  <span className="sub">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
                <h1 className="NFR"> New Feature release </h1>
                <p className="conten">
                  Lorem ipsum dolor sit amet consectetur. Mauris at arcu lacinia
                  consectetur nunc. Faucibus sagittis tellus a magna volutpat
                  praesent quis. Mattis dolor faucibus non mauris proin diam.
                  Sapien nunc mauris est etiam et. Dui aenean tristique eget
                  quisque sapien.
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
                >
                <Typography>  Explore Now </Typography>
                </Button>
              </div>
            </div>
            <div className="boxi">
              <svg
                width="470"
                height="473"
                viewBox="0 0 470 473"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.87988"
                  y="1.42969"
                  width="464.12"
                  height="467.058"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="653.657"
                  y2="-0.5"
                  transform="matrix(0.704878 0.709329 -0.704878 0.709329 4.83398 9.27148)"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="653.657"
                  y2="-0.5"
                  transform="matrix(-0.704878 0.709329 -0.704878 -0.709329 461.248 0.929688)"
                  stroke="black"
                />
              </svg>
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
              <div className="frame">
                <div className="in">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.657227"
                      y="1.42969"
                      width="17.8428"
                      height="17.8413"
                      stroke="black"
                    />
                    <line
                      y1="-0.5"
                      x2="26.3962"
                      y2="-0.5"
                      transform="matrix(0.707135 0.707078 -0.707135 0.707078 0.175537 1.26562)"
                      stroke="black"
                    />
                    <line
                      y1="-0.5"
                      x2="26.3962"
                      y2="-0.5"
                      transform="matrix(-0.707135 0.707078 -0.707135 -0.707078 18.6658 0.929688)"
                      stroke="black"
                    />
                  </svg>
                  <span className="sub">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
                <h1 className="NFR"> New Feature release </h1>
                <p className="conten">
                  Lorem ipsum dolor sit amet consectetur. Mauris at arcu lacinia
                  consectetur nunc. Faucibus sagittis tellus a magna volutpat
                  praesent quis. Mattis dolor faucibus non mauris proin diam.
                  Sapien nunc mauris est etiam et. Dui aenean tristique eget
                  quisque sapien.
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
                    maxHeight: 6,
                    "&:hover": {
                      background: "#000000"
                    },
                    maxWidth: 400,
                    background: "#000000"
                  }}
                >
                  Explore Now
                </Button>
              </div>
            </div>
            <div className="boxi">
              <svg
                width="470"
                height="473"
                viewBox="0 0 470 473"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.87988"
                  y="1.42969"
                  width="464.12"
                  height="467.058"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="653.657"
                  y2="-0.5"
                  transform="matrix(0.704878 0.709329 -0.704878 0.709329 4.83398 9.27148)"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="653.657"
                  y2="-0.5"
                  transform="matrix(-0.704878 0.709329 -0.704878 -0.709329 461.248 0.929688)"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          sticky={{ start: 2, end: 3 }}

        >
          <div className="box1">
            <div className="contain">
              <div className="frame">
                <div className="in">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.657227"
                      y="1.42969"
                      width="17.8428"
                      height="17.8413"
                      stroke="black"
                    />
                    <line
                      y1="-0.5"
                      x2="26.3962"
                      y2="-0.5"
                      transform="matrix(0.707135 0.707078 -0.707135 0.707078 0.175537 1.26562)"
                      stroke="black"
                    />
                    <line
                      y1="-0.5"
                      x2="26.3962"
                      y2="-0.5"
                      transform="matrix(-0.707135 0.707078 -0.707135 -0.707078 18.6658 0.929688)"
                      stroke="black"
                    />
                  </svg>
                  <span className="sub">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </div>
                <h1 className="NFR"> New Feature release </h1>
                <p className="conten">
                  Lorem ipsum dolor sit amet consectetur. Mauris at arcu lacinia
                  consectetur nunc. Faucibus sagittis tellus a magna volutpat
                  praesent quis. Mattis dolor faucibus non mauris proin diam.
                  Sapien nunc mauris est etiam et. Dui aenean tristique eget
                  quisque sapien.
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
                    maxHeight: 6,
                    "&:hover": {
                      background: "#000000"
                    },
                    maxWidth: 400,
                    background: "#000000"
                  }}
                >
                  Explore Now
                </Button>
              </div>
            </div>
            <div className="boxi">
              <svg
                width="470"
                height="473"
                viewBox="0 0 470 473"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.87988"
                  y="1.42969"
                  width="464.12"
                  height="467.058"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="653.657"
                  y2="-0.5"
                  transform="matrix(0.704878 0.709329 -0.704878 0.709329 4.83398 9.27148)"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="653.657"
                  y2="-0.5"
                  transform="matrix(-0.704878 0.709329 -0.704878 -0.709329 461.248 0.929688)"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
        </ParallaxLayer>

      </Parallax >
       


    </div>
  );
}
