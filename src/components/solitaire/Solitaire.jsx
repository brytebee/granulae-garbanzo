import React from "react";
import "./Solitaire.css";

function Solitaire() {
  return (
    <div className="solitaire">
      <div className="board">
        <div className="tableau">
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
        </div>
        <div className="tableau">
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
        </div>
        <div className="tableau">
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
        </div>
        <div className="tableau">
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
        </div>
        {/* <div className="tableau">
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
        </div>
        <div className="tableau">
          <div className="card stack black"></div>
          <div className="card stack red"></div>
          <div className="card stack black"></div>
          <div className="card stack red"></div>
        </div> */}
        {/* <div className="foundation">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <div className="foundation">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <div className="foundation">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <div className="foundation">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div> */}
      </div>
      {/* <div className="deck">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        ...
      </div> */}
    </div>
  );
}

export default Solitaire;
