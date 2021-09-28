import Draggable from "react-draggable";
import React, { useEffect } from "react";

export default function Mercury() {
  const date = new Date();
  const today = new Date(date);

  useEffect(() => {
    fetchMercury();
  });

  function fetchMercury() {
    fetch(`https://mercuryretrogradeapi.com?date=${date}`)
      .then((response) => response.json())
      .then((r) => mercuryMesssage(r.is_retrograde));
  }

  function mercuryMesssage(value) {}

  return (
    <Draggable>
      <div className="mercury-box">
        <p>Today is {today.toDateString()}</p>
        <p>Is Mercury In Retrograde? 🌙</p>
      </div>
    </Draggable>
  );
}
