import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [data, setData] = useState([]);
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const getOTP = async () => {
    const res = await fetch("/generateOTP", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Mobile: data.Mobile,
      }),
    });
    let a = await res.json();
    if (a.statuscode == 1) {
      console.log("OTP generated", a);
    } else {
      console.log("Server Error", a);
    }
    try {
    } catch (error) {}
  };

  const registation = async () => {
    const res = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Mobile: data.Mobile,
        OTP: data.OTP,
        pass: data.pass,
      }),
    });
    let a = await res.json();
    if (a.statuscode == 1) {
      console.log("OTP generated", a);
    } else {
      console.log("Server Error", a);
    }
    try {
    } catch (error) {}
  };

  return (
    <div className="container-xxl pb-3 " style={{}}>
      <div
        className="row p-3"
        style={{ backgroundColor: "#148075", color: "white", height: "20%" }}
      >
        <Link to="/" style={{ color: "white" }}>
          <h5>&nbsp;⬅ &nbsp;&nbsp;&nbsp; Login</h5>
        </Link>
      </div>
      <div className="row pt-3 ml-4">
        <input
          type="text"
          name="Mobile"
          id=""
          onChange={inputHandler}
          placeholder="📱  Mobile Number"
          style={{ width: "95%", height: "45px" }}
        />
      </div>
      <div className="row pt-4 ml-2">
        <div className="col">
          <input
            type="text"
            name="OTP"
            id=""
            onChange={inputHandler}
            placeholder="✉  Varification"
            style={{ width: "65%", height: "45px" }}
          />
          <button
            className="btn ml-4"
            style={{ width: "20%", height: "45px", backgroundColor: "white" }}
            onClick={getOTP}
          >
            OTP
          </button>
        </div>
      </div>
      <div className="row pt-3 ml-4">
        <input
          type="text"
          name="pass"
          id=""
          onChange={inputHandler}
          placeholder="🔑   Password"
          style={{ width: "95%", height: "45px" }}
        />
      </div>
      <div className="row pt-3 ml-4">
        <input
          type="text"
          name=""
          id=""
          onChange={inputHandler}
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
          onClick={registation}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default Register;
