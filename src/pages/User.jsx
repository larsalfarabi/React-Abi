import axios from "axios";
import React from "react";
import "../styles/styles.css";

const User = () => {
  const [quran, setQuran] = React.useState([]); //state untuk menyimpan data user dari API
  const [page, setPage] = React.useState(1);

  const getUsersHandle = async () => {
    try {
      const response = await axios.get(`https://equran.id/api/surat`);
      console.log("Response =>", response.data);
      setQuran(response.data);
      setPage(response.data);
    } catch (err) {}
  };

  console.log("User =>", quran);
  console.log("page =>", page);

  React.useEffect(() => {
    getUsersHandle();
  }, []);
  return (
    <div className=" grid grid-cols-3 gap-3 p pt-3">
      {quran.map((quran, index) => {
        return (
          <div className="card">
          
            <div className="card__content py-4">
              <div className="card-title px-5 flex">
                <h3 className="mr-1 text-l mb-2">{quran.nomor}</h3>
                <h3>{quran.nama_latin}</h3>
              </div>
              <div className="card-body px-5 mt-5 ">
                <h1 className="text-right"> {quran.nama}</h1>
              </div>
              <div className="card-tempat flex justify-end px-5">
                <p className="mr-1">{quran.tempat_turun}</p>
                <p>{quran.arti}</p>
              </div>
            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
