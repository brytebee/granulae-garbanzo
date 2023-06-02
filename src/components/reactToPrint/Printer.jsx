import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

/* 
===========  Run the following to use ============
===========  npm i react-to-print ============
*/

export const Printer = ({ combo }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => console.log("Printed"),
  });
  return (
    <div>
      <div className="print__this" ref={componentRef}>
        {combo}
      </div>
      <button type="button" onClick={handlePrint}>
        Download
      </button>
    </div>
  );
};
