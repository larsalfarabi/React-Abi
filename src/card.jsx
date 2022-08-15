import React from "react";

export default function Card({ count, setCount }) {
  const handleTambah = () => {
    setCount(count + 1);
  };
  const handleKurang = () => {
    setCount (count - 1)
  };
  return (
    <React.Fragment>
      <h1>in Card</h1>
      {count}
      <h1>{count > 10 ? "lebih dari sepuluh" : "kurang dari sepuluh"}</h1>
      <button onClick={handleTambah} className="button1">Tambah</button>
      <button onClick={handleKurang} className="button2">Kurang</button>
    </React.Fragment>
  );
}
