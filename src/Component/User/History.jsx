import React from "react";

function History() {
  return (
    <>
      <div>
        <h3 style={{}} className="border-bottom text-center p-3">
          🎲
          <br /> Parity List
        </h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm col-lg-4 col-xxl-4 text-center border-bottom p-4  ">
            <span className="p-4">Period</span>
            <span className="p-4">Price</span>
            <span className="p-4">Number</span>
            <span className="p-4">Result</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm col-lg-4 col-xxl-4 text-center border-bottom p-2 ">
            <span className="text-center p-4">20221126406</span>
            <span className="text-center p-4">15271</span>
            <span className="text-center p-4">1</span>
            <span className="text-center p-4">🟢</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm col-lg-4 col-xxl-4 text-center border-bottom p-2 ">
            <span className="text-center p-4">20221126407</span>
            <span className="text-center p-4">15276</span>
            <span className="text-center p-4">9</span>
            <span className="text-center p-4">🔴</span>
          </div>
        </div>

        <div className="row">
          <div className="col-sm col-lg-4 col-xxl-4 text-center border-bottom p-2 ">
            <span className="text-center p-4">20221126408</span>
            <span className="text-center p-4">15272</span>
            <span className="text-center p-4">3</span>
            <span className="text-center p-4">🟣</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm col-lg-4 col-xxl-4 text-center border-bottom p-2 ">
            <span className="text-center p-4">20221126409</span>
            <span className="text-center p-4">15226</span>
            <span className="text-center p-4">9</span>
            <span className="text-center p-1">🔴🟣</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
