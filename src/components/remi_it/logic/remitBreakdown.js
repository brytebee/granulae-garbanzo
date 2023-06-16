import roundUp from "./roundUp";

const remitBreakdown = (amount) => {
  const returnData = {};
  returnData.eighteen = roundUp(amount * 0.5804);
  returnData.three = roundUp(amount * 0.0966);
  returnData.five = roundUp(amount * 0.1613);

  return returnData;
};

export default remitBreakdown;
