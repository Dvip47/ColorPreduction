import React from "react";
import { useEffect, useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Pagination } from "rsuite";

function History() {
  const [data, setData] = useState([]);
  // console.log(data);
  const [win, setWin] = useState("");
  const winner = () => {
    let countGreen = 0;
    let countViolet = 0;
    let countRed = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].betColor === "green") {
        countGreen += 1;
      } else if (data[i].betColor === "violet") {
        countViolet += 1;
      } else if (data[i].betColor === "red") {
        countRed += 1;
      } else {
        return false;
      }
    }
    if (countGreen < countViolet && countGreen < countRed) {
      setWin("🟢");
    } else if (countRed < countGreen && countRed < countViolet) {
      setWin("🔴");
    } else if (countViolet < countGreen && countViolet < countRed) {
      setWin("🟣");
    } else {
      console.log("Else condition running");
      setWin("Draw match");
    }

    historySubmit();
  };

  const WinnerList = async () => {
    try {
      const res = await fetch("/win", {
        method: "get",
        credentials: "include",
      });
      let responce = await res.json();
      if (responce.statuscode == 1) {
        setData(responce.msg);
        getColorHistory();
        console.log(responce.msg);
      } else {
        console.log(responce);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    WinnerList();
    winner();
  }, []);
  var date = new Date();
  const historySubmit = async () => {
    try {
      const res = await fetch("/postBetHistory", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          betColor: win,
          betPeriod: "123456",
          betDate: date.getTime(),
        }),
      });
      let data = await res.json();
      if (data.statuscode == 1) {
        console.log("History Saved");
      } else {
        console.log("History Saved Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [colorHistory, setColorHistory] = useState();
  const getColorHistory = async () => {
    try {
      const res = await fetch("/getBetHistory", {
        method: "get",
        credentials: "include",
      });
      let responce = await res.json();
      if (responce.statuscode == 1) {
        setColorHistory(responce.msg);
        // console.log(responce.msg);
      } else {
        console.log(responce);
      }
    } catch (error) {
      console.log(error);
    }
  };
  setInterval(() => {
    console.log(`Winner is ${win}`);
    winner();
    WinnerList();
  }, 36000000);
  return (
    <>
      <div>
        <h3 style={{}} className="border-bottom text-center p-3">
          🎲
          <br /> Parity List
        </h3>
      </div>
      <div className="container scroll">
        <div className="row">
          <div className="col-sm col-lg-4 col-xxl-4 text-center border-bottom p-4  ">
            <span className="p-4">Period</span>
            <span className="p-4">Price</span>
            <span className="p-4">Number</span>
            <span className="p-4">Result</span>
          </div>
        </div>
        <div className="row">
          {colorHistory?.reverse().map((item, id) => {
            return (
              <div
                className="col-sm col-lg-4 col-xxl-4 text-center border-bottom p-2 "
                key={id}
              >
                <span className="text-center p-4">20221126406</span>
                <span className="text-center p-4">15271</span>
                <span className="text-center p-4">1</span>
                <span className="text-center p-4">{item?.betColor}</span>
              </div>
            );
          })}
          <div className="col-sm col-lg-4 col-xxl-4 text-center border-bottom p-2 ">
            <Pagination
              prev
              last
              next
              first
              total={10}
              limit={10}
              size="sm"
              pages={10}
              maxButtons={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
