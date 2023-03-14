import React ,{useState,useEffect}from 'react';
import { motion } from 'framer-motion';
import App from "./App";
import Faq from "./Faq";
import Wcd from "./Wcd";
import Wcdformob from "./Wcdformob";
import Footer from "./Footer";
import Message from "./Message";
import Home from "./Home";

import Navm from "./Navm";
import { useMediaQuery } from '@mui/material';
import Carousel2 from "./Carousel2";
import "./comp.css"
export default function Component(){
  const isLarge = useMediaQuery('(min-width:924px)');
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }



  return (

    <div className="overall" >
    <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />

       <Navm />
       <Home />
       <App />
       <Message />

    {isLarge? (<Wcd />): (<Wcdformob />)}
      <Carousel2 />
      <Faq />
   <Footer />
    </div>
  );
}
