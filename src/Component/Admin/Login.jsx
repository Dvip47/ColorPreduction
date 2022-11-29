import React from "react";

function Login() {
  return (
    <div className="container-xxl pb-3 " style={{ backgroundColor: "#f7faf8" }}>
      <div
        className="row p-3"
        style={{ backgroundColor: "#148075", color: "white", height: "20%" }}
      >
        <h5>&nbsp;⬅ &nbsp;&nbsp;&nbsp; Login</h5>
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
      <div className="row pt-4 ml-4">
        <input
          type="text"
          name=""
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
          Register
        </button>
        <button
          className="btn mt-3 ml-3"
          style={{
            backgroundColor: "white",
            // color: "white",
            width: "100px",
          }}
        >
          Forgot Password?
        </button>
      </center>
    </div>
  );
}

export default Login;
