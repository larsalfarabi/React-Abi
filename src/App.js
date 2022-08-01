// import logo from './logo.svg';

import React from "react";
import "./style/style.css";
import Identitas from "./module/identitas";
import Nilai from "./module/nilai";
import DataSiswa from "./module/dataSiswa";

function App() {

  // Array
  let [data, setData] = React.useState([10,20,30,40,50]);

  // Objek
  const [dataSiswa, setDataSiswa] = React.useState([
    {
    nama: "ihsan",
    kelas: "XI RPL",
    nilai: 100,
    },
    {
      nama: "nabil",
      kelas: "XI RPL",
      nilai: 96,
    },
    {
      nama: "sugih",
      kelas: "XI RPL",
      nilai: 90,
    },
  ]);


// Array didalam objek 
  const [nilaiSiswa,setNilaiSiswa] = React.useState({
    nama: "abi",
    kelas: "XI RPL",
    nilai: [80,90,100,80,90],
  });
  return (
    <React.Fragment>
      <section className="flex">
        <h2>Latihan Props</h2>
        <Identitas nama={"Ihsan"} kelas={"XI RPL"} nilai={100} />
        <Identitas nama={"Hilmi"} kelas={"XI RPL"} nilai={90} />
        <Identitas nama={"Opang"} kelas={"XI RPL"} nilai={85} />
        <Identitas />
        <Nilai nama={'Alfarabi'} data={data} /> 
        <DataSiswa data={dataSiswa} nilai={nilaiSiswa} />
      </section>
    </React.Fragment>
  );
}

export default App;