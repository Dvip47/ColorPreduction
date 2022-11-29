import React from "react";
import { useState } from "react";
import { CountDown } from "./CountDown";
function BetPoint() {
  const [betModal, setbetModal] = useState(false);
  const [show, setShow] = useState(true);
  // console.log(betModal);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <CountDown /> */}
          <div className="row">
            <div className="col text-center">
              <button
                className=" btn btn-success  ml-3 mt-2"
                onClick={() => {
                  setbetModal(true);
                  setShow(true);
                  // console.log(betModal);
                }}
              >
                Join Green
              </button>
            </div>
            {show && <betModal setbetModal={setbetModal} betModal={betModal} />}
            <div className="col text-center">
              <button
                className=" btn  mt-2"
                style={{ backgroundColor: "#4b0275", color: "white" }}
                onClick={() => {
                  setbetModal(true);
                  console.log(betModal);
                }}
              >
                Join Violet
              </button>
            </div>
            <betModal setbetModal={setbetModal} betModal={betModal} />
            <div className="col text-center">
              <button className=" btn btn-danger mt-2 "> Join Green</button>
            </div>
          </div>
          <div className="row ml-1">
            <div className="col">
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                0
              </button>
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                1
              </button>
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                2
              </button>
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                3
              </button>
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                4
              </button>
            </div>
          </div>
          <div className="row ml-1">
            <div className="col">
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                5
              </button>
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                6
              </button>
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                7
              </button>
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                8
              </button>
              <button
                className="btn btn-primary p-2 m-1"
                style={{ width: "16%" }}
              >
                9
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BetPoint;
