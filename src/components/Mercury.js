import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";

export default function Mercury() {
  const date = new Date();
  const today = new Date(date);
  const [retrograde, setRetrograde] = useState(true);

  //after render
  useEffect(() => {
    fetchMercury();
  });

  function fetchMercury() {
    fetch(`https://mercuryretrogradeapi.com?date=${date}`)
      .then((response) => response.json())
      .then((r) => setRetrograde(r.is_retrograde));
  }

  function mercuryMesssage(value) {
    console.log(value);
  }

  return (
    <Draggable>
      <div className="mercury-box">
        <p>🌙🌙🌙</p>
        <p>Today is {today.toDateString()}</p>
        <p>Is Mercury In Retrograde?</p>
        <button>find out</button>
      </div>
    </Draggable>
  );
}
