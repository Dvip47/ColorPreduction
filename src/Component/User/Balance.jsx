import React from "react";

function Balance() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#148075", color: "white" }}
    >
      <div className="row pt-2">
        <div className="col" style={{ color: "white" }}>
          {" "}
          Available balance : Rs 0.00
        </div>
      </div>
      <div className="row pb-2">
        <button type="button" class="btn btn-primary m-2">
          Reacharge
        </button>
        <button type="button" class="btn btn-light m-2">
          Light
        </button>
        <div className="pt-3 float-end">
          <a href="#" style={{ color: "white" }}>
            🔄
          </a>
        </div>
      </div>
    </div>
  );
}

export default Balance;
