import { useState } from "react";
import "./Printer.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/* 
===========  Run the following to use ============
===========  npm i html2canvas jspdf ============
*/

const Printer = () => {
  const [loader, setLoader] = useState(false);
  const handleDownload = () => {
    const pageToDownload = document.querySelector(".printPage");
    setLoader(true);
    html2canvas(pageToDownload).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, -5, pageWidth, pageHeight);
      setLoader(false);
      doc.save("demoName.pdf");
    });
  };
  return (
    <div className="Printer__container">
      <div className="printPage">
        <h1>Hello world!</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          asperiores voluptas quasi eius sapiente repellendus accusantium ut ab!
          Quae sint minus corporis exercitationem commodi, adipisci ad
          dignissimos ex soluta accusamus!
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          asperiores voluptas quasi eius sapiente repellendus accusantium ut ab!
          Quae sint minus corporis exercitationem commodi, adipisci ad
          dignissimos ex soluta accusamus!
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          asperiores voluptas quasi eius sapiente repellendus accusantium ut ab!
          Quae sint minus corporis exercitationem commodi, adipisci ad
          dignissimos ex soluta accusamus!
        </p>
      </div>
      <button
        onClick={handleDownload}
        disabled={!(loader === false)}
        type="button"
      >
        {loader ? "Downloading" : "Download"}
      </button>
    </div>
  );
};

export default Printer;
