import React from "react";
import Input from "../input/Input";

const AddInput = ({ text }) => {
  const handleAddInput = () => {
    console.log("I'm here");
  };
  return (
    <div>
      <Input ph={text} />
    </div>
  );
};

export default AddInput;
