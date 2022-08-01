// import logo from './logo.svg';

import React from "react";
import Latihan from "./module/latihanProps";


function App() {

  let [produk,setProduk] = React.useState([
    {
        jenis: "Elektronik",
        produk: "Handphone",
        brand: [
            {
                nama: "Samsung",
                harga: "Rp 1.000.000",
            },
            {
                nama: "Xiaomi",
                harga: "Rp 500.000",
            },
        ],
    },
    {
        jenis: "Transportasi",
        produk: "Mobil",
        brand: [
            {
                nama: "Toyota",
                harga: "Rp 1.000.000,000",
            },
            {
                nama: "Honda",
                harga: "Rp 500.000.00",
            },
        ],
    },

]);

  return (
    <React.Fragment>
      <h1>Latihan 1</h1>
      <h1>Data Produk Indonesia</h1>
      <Latihan data={produk}/>

    </React.Fragment>
  );
}
export default App;
