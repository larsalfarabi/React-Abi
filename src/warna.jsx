import React from "react";

export default function Warna({warna, setWarna}) {
  const handleMerah = () => {
    setWarna("red");
  };
  const handleHijau = () => {
    console.log('hijau')
    setWarna("green");
  };
  const handleKuning = () => {
    setWarna("yellow");
  };
  return (
      <div>
        <div style={{ backgroundColor: warna, width: 300, height: 300 }}>
          <p>{warna}</p>
        </div>
        <button onClick={handleMerah}>red</button>
        <button onClick={handleKuning}>yellow</button>
        <button onClick={handleHijau}>green</button>
      </div>
  );
}
