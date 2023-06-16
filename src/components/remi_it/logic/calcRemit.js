import roundUp from "./roundUp";

const calcRemit = (amount, setRemit) => {
  const percent = amount * 0.31;
  const roundUpRemit = roundUp(percent);
  setRemit(roundUpRemit);
};

export default calcRemit;
