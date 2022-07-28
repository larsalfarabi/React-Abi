// import logo from './logo.svg';

import React from "react";
import "./style/style.css";
import Identitas from "./module/identitas";
import Nilai from "./module/nilai";

function App() {
  let [data, setData] = React.useState([10,20,30,40,50]);
  return (
    <React.Fragment>
      <section className="flex">
        <h2>Latihan Props</h2>
        <Identitas nama={"Ihsan"} kelas={"XI RPL"} nilai={100} />
        <Identitas nama={"Hilmi"} kelas={"XI RPL"} nilai={90} />
        <Identitas nama={"Opang"} kelas={"XI RPL"} nilai={85} />
        <Identitas />
        <Nilai nama={'Alfarabi'} data={data} /> 
      </section>
    </React.Fragment>
  );
}

export default App;
