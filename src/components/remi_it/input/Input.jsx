import React from "react";
import "./Input.css";

const Input = ({ ph, func }) => {
  const label = () => {
    const myReturn = `Enter ${ph[0].toUpperCase()}${ph.slice(1)}`;
    if (ph.includes("day")) return `${myReturn} Offering`;
    return myReturn;
  };
  return (
    <div className="input__container">
      <label htmlFor={ph}>{label()}</label>
      <center>
        <input
          aria-label={ph}
          onKeyUp={func}
          onChange={func}
          type="number"
          placeholder={ph}
          className="remit__input"
          name={ph}
        />
      </center>
    </div>
  );
};

export default Input;
