import React from "react";
import "../style/style.css"

export default function Latihan({ data }) {
  return (
    <React.Fragment>
      <h1>Data Produk Indonesia</h1>
      <div className="border">
      {data?.map((item, index) => {
          return (
            <div key={index}>
              <h3>Jenis: {item.jenis}</h3>
              <div>
                {item?.produk?.map((value,index3)=>{
                  return(
                    <div key={index3}>
                      {value.nama}
                    </div>
                  )
                })}
              </div>
              <div>
              <h2>Tipe {index+1}</h2>
               <div>
                {item?.brand?.map((value,index2)=>{
                  return(
                    <div key={index2}>
                      <p>{value.nama}</p>
                      <p>{value.harga}</p>
                      <p></p>
                    </div>
                  )
                })}
               </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
