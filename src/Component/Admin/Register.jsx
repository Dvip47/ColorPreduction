import React from "react";

function Register() {
  return (
    <div className="container-xxl pb-3 " style={{}}>
      <div
        className="row p-3"
        style={{ backgroundColor: "#148075", color: "white", height: "20%" }}
      >
        <h5>
          &nbsp;<a>⬅</a> &nbsp;&nbsp;&nbsp; Register
        </h5>
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
          placeholder="🔑   Password"
          style={{ width: "95%", height: "45px" }}
        />
      </div>
      <div className="row pt-3 ml-4">
        <input
          type="text"
          name=""
          id=""
          placeholder="🎁   Recommetation Code"
          style={{ width: "95%", height: "45px" }}
        />
      </div>
      <div className="row pt-3 ml-4">
        <input type="checkbox" />
        <label for="" className="ml-2">
          I agree <a href="#">Term and Condition</a>
        </label>
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
          Register
        </button>
      </center>
    </div>
  );
}

export default Register;
