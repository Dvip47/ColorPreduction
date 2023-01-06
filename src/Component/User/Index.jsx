import React from "react";
import Balance from "../User/Balance";
import BetPoint from "../User/BetPoint";
import History from "./History";
import NavBar from "./NavBar";
import UserHistory from "./UserHistory";

function Index() {
  return (
    <div style={{ backgroundColor: "#f2f0f0" }}>
      <Balance />
      <NavBar />
      <BetPoint />
      <History />
      <UserHistory />
    </div>
  );
}

export default Index;
