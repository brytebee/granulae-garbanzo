import { useEffect, useState } from "react";
import "./Remi_it.css";
import Input from "./input/Input";
import calcRemit from "./logic/calcRemit";
import remitBreakdown from "./logic/remitBreakdown";
import AddBtn from "./utils/AddBtn";
import AddInput from "./addIput/AddInput";

const Remi_it = () => {
  const [remit, setRemit] = useState(0);
  const [total, setTotal] = useState(0);
  const [titles, setTitles] = useState([
    "Wednesday",
    "Friday",
    "Tithe",
    "Offerings",
  ]);
  const [input, setInput] = useState({
    Wednesday: 0,
    Friday: 0,
    Tithe: 0,
    Offering: 0,
  });

  const handleAddInput = () => {
    console.log("Before", titles);
    setTitles([...titles, "Extra"]);
    console.log("Afer", titles);
  };

  useEffect(() => {
    handleAddInput();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((preInput) => ({ ...preInput, [name]: +value }));
    const nums = Object.values(input);
    const computedAmount = nums.reduce((acc, val) => acc + val);
    setTotal(computedAmount);
    calcRemit(computedAmount, setRemit);
  };

  const renderInput = (el) => {
    return (
      <>
        {el.map((title, i) => (
          <div key={i}>
            <Input ph={title} func={handleInput} />
          </div>
        ))}
      </>
    );
  };

  return (
    <form>
      {/* <Input ph={"Wednesday"} func={handleInput} />
      <Input ph={"Friday"} func={handleInput} />
      <Input ph={"Tithe"} func={handleInput} />
      <Input ph={"Offerings"} func={handleInput} /> */}
      {renderInput(titles)}
      <button onClick={handleAddInput} type="button">
        <span>Add </span>
        <AddBtn />
      </button>
      <div className="report">
        <div className="total__off">
          <label>Total</label>
          <div className="remit">{total}</div>
        </div>
        <div className="thirty__one">
          <label>31%^</label>
          <div className="remit">{remit}</div>
        </div>
        <a href="breakdown">View Remittance Breakdown</a>
      </div>
    </form>
  );
};

export default Remi_it;
