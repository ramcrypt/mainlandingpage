
import React from 'react';
import Testimonials from "./Testimonials"
import "./Cours.css";

export default function Carousel2() {
  return (
    <>
    <div style={{backgroundColor:'#000000'}}>
    <p className="test">Testimonials</p>

   <div style={{display:'flex',flexDirection:'row'}}>
           <Testimonials />
</div>

      </div>
    </>
  );
}
