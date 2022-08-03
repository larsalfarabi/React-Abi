// import logo from './logo.svg';

import React from "react";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import "./style/style.css";

function App() {
  return (
    <React.Fragment>
      <h1> belajar Props 2 </h1>{" "}
      <Layout title={"Nomor 1"}>
        <h1> SMK MADINATUL QURAN </h1>{" "}
      </Layout>{" "}
      <Layout title={"Nomor 2"}>
        <h1> SMK IDN </h1>{" "}
      </Layout>{" "}
      <Layout title={"Nomor 3"}>
        <h1> SMKN 1 CIBINONG </h1>{" "}
      </Layout>{" "}
      <Button
        onClick={() => {
          console.log("Button simpan diklik");
        }}
        color="blue"
        title={"Simpan"}
      />{" "}
      <Button
        onClick={() => {
          console.log("Button batal diklik");
        }}
        disabled={true}
        title={"Batal"}
      />{" "}
      <Button color="green" title={"Update"} />{" "}
    </React.Fragment>
  );
}

export default App;
