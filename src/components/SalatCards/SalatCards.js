import React from "react";
import "./salatCards.css";

const SalatCards = ({ data }) => {
  const SALAT_NAME = Object.keys(data);
  const date = new Date();
  let nextSalat = SALAT_NAME.findIndex((elem) => {
    const splitedDate = data[elem].split(":");
    const h = splitedDate[0];
    const min = splitedDate[1];
    if (parseInt(h) === date.getUTCHours() + 1) {
      return parseInt(min) > date.getUTCMinutes();
    }
    return parseInt(h) > date.getUTCHours() + 1;
  });
  if (nextSalat === -1) nextSalat = 0;
  return (
    <div className="slat-cards">
      {SALAT_NAME.map((salat, index) => (
        <div
          className={`salat ${index === nextSalat ? "active" : null}`}
          key={index}
        >
          <div className="salat-name">{salat}</div>
          <div className="salat-time">{data[salat]}</div>
        </div>
      ))}
    </div>
  );
};

export default SalatCards;
