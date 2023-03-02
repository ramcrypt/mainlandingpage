import React from 'react';
import App from "./App";
import Faq from "./Faq";
import Wcd from "./Wcd";
import Footer from "./Footer";
import Message from "./Message";
import Home from "./Home";
import NewNav from "./NewNav";
import Navm from "./Navm";
import Carousel2 from "./Carousel2";
import "./comp.css"
export default function Component(){
  return (
    <div className="overall">

       <Navm />
       <Home />
       <App />
       <Message />

      <Wcd />
      <Carousel2 />
      <Faq />
   <Footer />
    </div>
  );
}
