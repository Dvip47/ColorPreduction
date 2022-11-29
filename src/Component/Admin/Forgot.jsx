import React from "react";

function Forgot() {
  return (
    <div className="container-xxl pb-3 " style={{}}>
      <div
        className="row p-3"
        style={{ backgroundColor: "#148075", color: "white", height: "20%" }}
      >
        <h5>&nbsp;⬅ &nbsp;&nbsp;&nbsp; Register</h5>
      </div>
      <div className="row pt-3 ml-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="📱  Mobile Number"
          style={{ width: "95%", height: "45px" }}
        />
      </div>
      <div className="row pt-4 ml-2">
        <div className="col">
          <input
            type="text"
            name=""
            id=""
            placeholder="✉  Varification"
            style={{ width: "65%", height: "45px" }}
          />
          <button
            className="btn ml-4"
            style={{ width: "20%", height: "45px", backgroundColor: "white" }}
          >
            OTP
          </button>
        </div>
      </div>
      <div className="row pt-3 ml-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="🔑   New Password"
          style={{ width: "95%", height: "45px" }}
        />
      </div>

      <center>
        <button
          className="btn mt-3"
          style={{
            backgroundColor: "#148075",
            color: "white",
            width: "130px",
          }}
        >
          Continue
        </button>
      </center>
    </div>
  );
}

export default Forgot;
