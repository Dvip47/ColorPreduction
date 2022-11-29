import React from "react";
import Balance from "./Balance";
import BetPoint from "./BetPoint";
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
