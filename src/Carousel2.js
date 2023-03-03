import card from './components/Testimonial Card.svg';
import React from 'react';
import "./Cours.css";
import testb from "./components/testb.svg"
import {Typography} from "@mui/material";
export default function Carousel2() {
  return (
    <>
    <div style={{width:'100%',height:'100%',backgroundImage:{testb}}}>
    <p className="test">Testimonials</p>
      <div className="slider">

        <div className="slide-track">
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
          <div className="slide">
            <img src={card} alt="" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
