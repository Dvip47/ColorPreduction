import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
  const [data, setData] = useState([]);
  const [cookies, setCookie] = useCookies([]);
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const userLogin = async () => {
    const res = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Mobile: data.Mobile,
        pass: data.pass,
      }),
    });
    let a = await res.json();
    if (a.statuscode == 1) {
      console.log("User Login");
      let userDeatails =
        "fhbvjndkl;adahbchkzlchudbsfnerogwiocpwlkojifklfke8ojy7gvhufiklpofvgkjehntmvo0i9erujhnmklovit9sfuvym";
      setCookie("user", userDeatails);
    } else {
      console.log("Server Error", a);
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-xxl pb-3 " style={{ backgroundColor: "#f7faf8" }}>
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
      <div className="row pt-4 ml-4">
        <input
          type="text"
          name="pass"
          onChange={inputHandler}
          id=""
          placeholder="🔑   Password"
          style={{ width: "95%", height: "45px" }}
        />
      </div>
      {/* <div className="row pt-3 ml-4"> */}
      <center>
        <button
          className="btn mt-3"
          style={{
            backgroundColor: "#148075",
            color: "white",
            width: "100px",
          }}
          onClick={userLogin}
        >
          Login
        </button>
        <br />
        <button
          className="btn mt-3"
          style={{
            backgroundColor: "white",
            // color: "white",
            width: "100px",
          }}
        >
          <Link to="/signup" style={{ color: "black" }}>
            Register
          </Link>
        </button>
        <button
          className="btn mt-3 ml-3"
          style={{
            backgroundColor: "white",
            // color: "white",
            width: "100px",
          }}
        >
          <Link to="/signup" style={{ color: "black" }}>
            Forgot Password?
          </Link>
        </button>
      </center>
    </div>
  );
}

export default Login;
