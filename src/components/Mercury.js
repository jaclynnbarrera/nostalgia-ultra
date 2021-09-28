import Draggable from "react-draggable";

export default function Mercury() {
  const date = new Date();
  console.log(date.toISOString().split("T")[0]);

  function fetchMercury() {
    fetch(`https://mercuryretrogradeapi.com?date=${date}`)
      .then((response) => response.json())
      .then((r) => console.log(r));
  }

  fetchMercury();

  return (
    <Draggable>
      <div className="mercury">
        <p>today is </p>
        <p>Is Mercury In Retrograde? 🌙</p>
      </div>
    </Draggable>
  );
}
