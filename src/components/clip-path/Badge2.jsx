import React from "react";
import PropTypes from "prop-types";
import "./Badge2.css";

const Badge2 = ({ color, amount }) => (
  <div className="badge2__container">
    <div
      className="inner__clip clip2"
      style={{ border: `8px solid ${color}`, backgroundColor: "white" }}
    >
      <p className="clip__text">${amount}</p>
    </div>
  </div>
);

Badge2.propTypes = {
  color: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};
export default Badge2;
