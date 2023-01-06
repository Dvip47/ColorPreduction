import React from "react";
import { useState } from "react";
import CountDown from "./CountDown";

function BetPoint() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.betColor);

  const [betModal, setbetModal] = useState(false);
  const [show, setShow] = useState(true);
  var date = new Date();
  const betSubmit = async (color) => {
    try {
      const res = await fetch("/colorbet", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          betMoney: "10",
          betColor: color,
          betDate: date.getTime(),
        }),
      });
      let data = await res.json();
      // console.log(data);
      if (data.statuscode == 1) {
        console.log("bet successfull add");
      } else {
        console.log("bet failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">Period</div>
            <div className="col">
              <CountDown />
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button
                className=" btn btn-success  ml-3 mt-2"
                onClick={() => {
                  setbetModal(true);
                  setShow(true);
                  betSubmit("green");
                  // dispatch(betGreen());
                  // console.log(betModal);
                }}
              >
                Join Green
              </button>
            </div>
            {/* {show && <betModal setbetModal={setbetModal} betModal={betModal} />} */}
            <div className="col text-center">
              <button
                className=" btn  mt-2"
                style={{ backgroundColor: "#4b0275", color: "white" }}
                onClick={() => {
                  betSubmit("violet");
                  // setbetModal(true);
                  // console.log(betModal());
                  // dispatch(betViolet());
                }}
              >
                Join Violet
              </button>
            </div>
            {/* <betModal setbetModal={setbetModal} betModal={betModal} /> */}
            <div className="col text-center">
              <button
                className=" btn btn-danger mt-2 "
                onClick={() => {
                  betSubmit("red");
                  // dispatch(betRed());
                }}
              >
                {" "}
                Join Red
              </button>
            </div>
          </div>
          {/* {sec >= 10 ? (
            <div className="row">
              <div className="col text-center">
                <button
                  className=" btn btn-success  ml-3 mt-2"
                  onClick={() => {
                    setbetModal(true);
                    setShow(true);
                    betSubmit("green");
                    // dispatch(betGreen());
                    // console.log(betModal);
                  }}
                >
                  Join Green
                </button>
              </div>
              {show && (
                <betModal setbetModal={setbetModal} betModal={betModal} />
              )}
              <div className="col text-center">
                <button
                  className=" btn  mt-2"
                  style={{ backgroundColor: "#4b0275", color: "white" }}
                  onClick={() => {
                    betSubmit("violet");
                    // setbetModal(true);
                    // console.log(betModal());
                    // dispatch(betViolet());
                  }}
                >
                  Join Violet
                </button>
              </div>
              <betModal setbetModal={setbetModal} betModal={betModal} />
              <div className="col text-center">
                <button
                  className=" btn btn-danger mt-2 "
                  onClick={() => {
                    betSubmit("red");
                    // dispatch(betRed());
                  }}
                >
                  {" "}
                  Join Red
                </button>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col text-center">
                <button
                  disabled
                  className=" btn btn-success  ml-3 mt-2"
                  onClick={() => {
                    setbetModal(true);
                    setShow(true);
                    betSubmit("green");
                    // dispatch(betGreen());
                    // console.log(betModal);
                  }}
                >
                  Join Green
                </button>
              </div>
              {show && (
                <betModal setbetModal={setbetModal} betModal={betModal} />
              )}
              <div className="col text-center">
                <button
                  disabled
                  className=" btn  mt-2"
                  style={{ backgroundColor: "#4b0275", color: "white" }}
                  onClick={() => {
                    betSubmit("violet");
                    // setbetModal(true);
                    // console.log(betModal());
                    // dispatch(betViolet());
                  }}
                >
                  Join Violet
                </button>
              </div>
              <betModal setbetModal={setbetModal} betModal={betModal} />
              <div className="col text-center">
                <button
                  disabled
                  className=" btn btn-danger mt-2 "
                  onClick={() => {
                    betSubmit("red");
                    // dispatch(betRed());
                  }}
                >
                  {" "}
                  Join Red
                </button>
              </div>
            </div>
          )} */}

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
