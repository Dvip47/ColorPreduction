import React from "react";

function Footer() {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col text-center">
          <button className="btn">
            🏠
            <br />
            Home
          </button>
        </div>
        <div className="col text-center">
          <button className="btn">
            🔍
            <br />
            Search
          </button>
        </div>
        <div className="col text-center">
          <button className="btn">
            👤
            <br />
            My
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
