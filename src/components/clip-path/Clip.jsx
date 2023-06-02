import React from "react";
import "./Clip.css";

const Clip = ({ color, amount }) => {
  return (
    <div className="clip__container">
      {" "}
      /* Should be ignored when imported */
      <div className="inner__clip clip" style={{ backgroundColor: color }}>
        <div className="child__clip clip">
          <p className="clip__text">${amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Clip;
