// import logo from './logo.svg';

import React from "react";
import "./style/style.css";
import Card from "./card";
import Warna from "./warna";

export default function App() {
  let [count, setCount] = React.useState(0);
  let [warna, setwarna] = React.useState("blue");

  return (
    <React.Fragment>
      <h1>Branch Main</h1>
      <Card count={count} setCount={setCount} />
      <Warna warna={warna} setwarna={setwarna} />
    </React.Fragment>
  );
}
