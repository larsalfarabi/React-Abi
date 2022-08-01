import React from "react";

export default function Latihan({ data }) {
  return (
    <React.Fragment>
      <div>
        {data?.map((item, index) => {
          return (
            <div>
              <h3>Jenis: {item.jenis}</h3>
              <h3>Produk: {item.produk}</h3>
              <h2>Tipe</h2>
              <p>{item.brand[0].nama}</p>
              <p>{item.brand[0].harga}</p>
            </div>
          );
        })}
        
      </div>
    </React.Fragment>
  );
}
