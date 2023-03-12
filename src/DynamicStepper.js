import React, { useState, useEffect } from "react";
import "./ds.css";
import ds1 from "./components/ds1.svg";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import useScrollPosition from "./useScrollPosition";
import {useLocation} from 'react-router-dom';
export default function DynamicStepper(props) {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((currentStep) => currentStep + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container1">
      <div className={`step ${currentStep >= 0 ? "active" : ""}`}>
        <div className="one">
          <Box
            sx={{
              position: "relative",
              mt: 2,
              width: "4.75vw",
              height: '4.75vw',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E2FF6F",
              borderRadius: 2,
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
              zIndex: 1,

              "&::after": {
                content: '""',
                position: "absolute",
                width: "1.85vw",
                height: "1.85vw",
                top: "-2vw",
                left: '3.2vw',

                borderRadius: 2,
                backgroundColor: "#E2FF6F",
                transform: "translate(50%, 50%) rotate(90deg)",
                zIndex: -1
              },
              '@media (max-width: 750px)': {
                position: "relative",
                mt: 2,
                width: "10vw",
                height: '10vw',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#E2FF6F",
                borderRadius: 2,
                transform: "matrix(-1, 0, 0, 1, 0, 0)",
                zIndex: 1,

                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "3vw",
                  height: "3vw",
                  top: "-3vw",
                  left: '6.9vw',

                  borderRadius: 0.7,
                  backgroundColor: "#E2FF6F",
                  transform: "translate(50%, 50%) rotate(90deg)",
                  zIndex: -1
                }
            }
            }}
          />{" "}
        </div>
        <div clasName="contd">
          <h1 className="subdy"> Create An Account </h1>

        </div>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <div className="dot">
        <img src={ds1} />
        </div>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <div className="one">
        <Box
          sx={{
            position: "relative",
            mt: 2,
            width: "4.75vw",
            height: '4.75vw',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E2FF6F",
            borderRadius: 2,
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            zIndex: 1,

            "&::after": {
              content: '""',
              position: "absolute",
              width: "1.85vw",
              height: "1.85vw",
              top: "-2vw",
              left: '3.2vw',

              borderRadius: 2,
              backgroundColor: "#E2FF6F",
              transform: "translate(50%, 50%) rotate(90deg)",
              zIndex: -1
            },
            '@media (max-width: 750px)': {
              position: "relative",
              mt: 2,
              width: "10vw",
              height: '10vw',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E2FF6F",
              borderRadius: 2,
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
              zIndex: 1,

              "&::after": {
                content: '""',
                position: "absolute",
                width: "3vw",
                height: "3vw",
                top: "-3vw",
                left: '6.9vw',

                borderRadius: 0.7,
                backgroundColor: "#E2FF6F",
                transform: "translate(50%, 50%) rotate(90deg)",
                zIndex: -1
              }
          }
          }}
        />{" "}
        </div>
        <div clasName="contd">
          <h1 className="subdy"> Quick Deposit </h1>

        </div>
      </div>
      <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
        <div className="dot">
          <img src={ds1} />
        </div>
      </div>
      <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
        <div className="one">
        <Box
          sx={{
            position: "relative",
            mt: 2,
            width: "4.75vw",
            height: '4.75vw',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E2FF6F",
            borderRadius: 2,
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            zIndex: 1,

            "&::after": {
              content: '""',
              position: "absolute",
              width: "1.85vw",
              height: "1.85vw",
              top: "-2vw",
              left: '3.2vw',

              borderRadius: 2,
              backgroundColor: "#E2FF6F",
              transform: "translate(50%, 50%) rotate(90deg)",
              zIndex: -1
            },
            '@media (max-width: 750px)': {
              position: "relative",
              mt: 2,
              width: "10vw",
              height: '10vw',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E2FF6F",
              borderRadius: 2,
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
              zIndex: 1,

              "&::after": {
                content: '""',
                position: "absolute",
                width: "3vw",
                height: "3vw",
                top: "-3vw",
                left: '6.9vw',

                borderRadius: 0.7,
                backgroundColor: "#E2FF6F",
                transform: "translate(50%, 50%) rotate(90deg)",
                zIndex: -1
              }
          }
          }}
        />{" "}
        </div>
        <div clasName="contd">
          <h1 className="subdy"> Trade Seamlessly </h1>

        </div>
      </div>
      <div className={`step ${currentStep >= 5 ? "active" : ""}`}>
        <div className="dot">
          <img src={ds1} />
        </div>
      </div>
      <div className={`step ${currentStep >= 6 ? "active" : ""}`}>
        <div className="one">
        <Box
          sx={{
            position: "relative",
            mt: 2,
            width: "4.75vw",
            height: '4.75vw',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E2FF6F",
            borderRadius: 2,
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            zIndex: 1,

            "&::after": {
              content: '""',
              position: "absolute",
              width: "1.85vw",
              height: "1.85vw",
              top: "-2vw",
              left: '3.2vw',

              borderRadius: 2,
              backgroundColor: "#E2FF6F",
              transform: "translate(50%, 50%) rotate(90deg)",
              zIndex: -1
            },
            '@media (max-width: 750px)': {
              position: "relative",
              mt: 2,
              width: "10vw",
              height: '10vw',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E2FF6F",
              borderRadius: 2,
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
              zIndex: 1,

              "&::after": {
                content: '""',
                position: "absolute",
                width: "3vw",
                height: "3vw",
                top: "-3vw",
                left: '6.9vw',

                borderRadius: 0.7,
                backgroundColor: "#E2FF6F",
                transform: "translate(50%, 50%) rotate(90deg)",
                zIndex: -1
              }
          }
          }}
        />{" "}
        </div>
        <div clasName="contd">
          <h1 className="subdy"> Become A Trader </h1>

        </div>
      </div>

    </div>
  );
}
