import React, { useState } from "react";
import "./Faq.css";
import RemoveIcon from "@mui/icons-material/Remove";

function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!props.sections || props.sections.length === 0) {
    return null;
  }

  return (
    <div className="accordion-container">
      {props.sections.map((section, index) => (
        <div key={index} className="conhr">
          <div className={`accordion ${activeIndex === index ? "active" : ""}`}  onClick={() => handleClick(index)}>
            <span className="title"  >{section.title}</span>
            {activeIndex === index ? (
              ""
            ) : (
              <RemoveIcon
                style={{ float: "right" ,justifyContent:"cente"}}
                onClick={() => handleClick(index)}
              />
            )}
          </div>
          <div
            className="panel"
            style={{ display: activeIndex === index ? "block" : "none" }}
          >
            {section.content}
          </div>
          {index !== props.sections.length - 1 && (
            <hr style={{ maxWidth: "116%" }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
