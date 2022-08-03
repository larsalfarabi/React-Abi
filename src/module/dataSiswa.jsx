import React from "react";

export default function DataSiswa({ data, nilai }) {
  return (
    <React.Fragment>
      <h1>isi komponen data siswa</h1>
      {data?.map(function (item, index) {
        return (
          <div className="identitas">
            <p>Nama : {item.nama}</p>
            <p>Kelas : {item.kelas}</p>
            <p>Nilai : {item.nilai}</p>
          </div>
        );
      })}
      <div>
        <p>Nama: {nilai.nama}</p>
        <p>Kelas: {nilai.kelas}</p>
        <div>
          nilai yang didapat
          {nilai.nilai?.map((item,index) => {
            return (
              <div>
                <p>Matematika: {item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
