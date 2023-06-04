import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PropTypes from "prop-types";
import "./Printer.css";

/* 
===========  Run the following to use ============
===========  npm i react-to-print ============
*/

const Printer = ({ contentToPrint }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => console.log("Printed"),
  });
  return (
    <div>
      <div className="print__this" ref={componentRef}>
        {contentToPrint}
      </div>
      <button type="button" onClick={handlePrint}>
        Download
      </button>
    </div>
  );
};

Printer.propTypes = {
  contentToPrint: PropTypes.node.isRequired,
};

export default Printer;
