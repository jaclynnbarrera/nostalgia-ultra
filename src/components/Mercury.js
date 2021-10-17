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

  function handleClick(e) {
    if (retrograde === true) {
      console.log("yes mercury is in retrograde");
    } else {
      console.log(
        `phew mercury is not in regrorade! The next time mercury is in retrograde is in...`
      );
    }
  }

  return (
    <Draggable>
      <div className="mercury-box">
        <p>🌙🌙🌙</p>
        <p>Today is {today.toDateString()}</p>
        <p>Is Mercury In Retrograde?</p>
        <button onClick={handleClick}>find out</button>
      </div>
    </Draggable>
  );
}
