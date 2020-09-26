import React, { useState, useEffect } from "react";
import "./salatInfo.css";
import SalatCards from "../SalatCards/SalatCards";

const SalatInfo = ({ data }) => {
  const getDate = () => {
    const date = new Date();
    let min = date.getMinutes();
    let hour = date.getUTCHours();
    let seconds = date.getSeconds();
    if (hour === 23) hour = 0;
    else hour++;
    if (seconds < 10) seconds = `0${seconds}`;
    if (min < 10) min = `0${min}`;
    if (hour < 10) hour = `0${hour}`;
    return `${hour}:${min}:${seconds}`;
  };
  const [time, setTime] = useState(getDate());

  useEffect(() => {
    setInterval(() => {
      setTime(getDate());
    }, 1000);
  }, []);

  return (
    <div className="cards-container">
      <div className="overlay">
        <div className="case-one">
          <div className="row">
            <div className="time">{time}</div>
          </div>
          {data ? (
            <div className="row">
              <SalatCards data={data} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SalatInfo;
