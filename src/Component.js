import React from 'react';
import App from "./App";
import Faq from "./Faq";
import Wcd from "./Wcd";
import Message from "./Message";
export default function Component(){
  return (
    <div className="All"
    style={{  height: "100%", width: "100%"}}>

       <App />
       <Message />
      <Faq />
      <Wcd />

    </div>
  );
}
