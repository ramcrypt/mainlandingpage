import React from "react";
import "./Faq.css";

import Accordion from "./Accordion";
export default function Faq() {
  
  const sections = [
    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes. "
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes. "
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes. "
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes. "
    }
  ];

  return (
    <div className="faqm">
      <h2 className="heading">Frequently Asked Questions</h2>
      <div className="pdiv">
        <p className="para">
          Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie
          atole elementum eu facilisis faucibus interdum posuere.
        </p>
      </div>
      <div className="accord">
        <Accordion sections={sections} />
      </div>
    </div>
  );
}
