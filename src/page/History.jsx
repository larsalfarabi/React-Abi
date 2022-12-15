import React, { useState, useEffect } from "react";
import { getHistory } from "../API/home";
import { Navbar, Price, RatingDetail, Star } from "../component";
import { useNavigate } from "react-router-dom";


const History = () => {
  const navigate = useNavigate();
 
  const convertRupiah = require("rupiah-format");
  const [listHistory, setListHistory] = useState([]);
  const [fetchProduct, setFetchProduct] = useState(false);
  const [payload, setPayload] = useState({
    kategori: "",
    keyword: "",
    hargaTerendah: "",
    hargaTertinggi: "",
  });
  const handleChange = async (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const getListHistory = async () => {
    try {
      setFetchProduct(true);
      const response = await getHistory();
      setListHistory(response.data.data);
      console.log("history =>", response.data.data);
    } catch (err) {
    } finally {
      setFetchProduct(false);
    }
  };
  console.log("listHistory", listHistory);
  useEffect(() => {
    getListHistory();
  }, []);
  return (
    <div className="w-screen h-screen bg-[#F1F3F4]">
      <Navbar change={handleChange} value={payload.keyword} name={"keyword"} />{" "}
      <div className="grid grid-cols-1 h-[84%]">
        <div className="overflow-auto scroll-smooth bar ">
          <div className="space-y-3 gap-4 p-5">
            {listHistory?.map((item, index) => {
              // const json = item?.produk?.gambarProduk;
              // const obj = JSON.parse(json);
              // console.log("obj",obj);
              return (
                <div
                  key={index}
                  className="flex-col border-b-[1px] border-slate-200"
                >
                  <div className="flex justify-between w-full ">
                    <div className="flex space-x-4">
                      {" "}
                      <img
                        // src={obj[0]?.gambar1}
                        className="border border-slate-200  w-20 h-20 rounded-md"
                        alt={item?.produk?.namaProduk}
                      />{" "}
                      <p className="font-Poppins font-semibold text-sm">
                        {item?.produk?.namaProduk}
                      </p>
                    </div>
                    <div className="flex space-x-10">
                      <RatingDetail
                        rating={item?.produk?.rating}
                        stok={item?.produk?.stok}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2 ml-24">
                    {" "}
                    <Price harga={convertRupiah.convert(item?.produk?.harga)} />
                    <div className="flex space-x-3">
                      {" "}
                      <p className="text-[#2A977D] font-Poppins font-semibold text-base items-center">
                        Total:
                      </p>
                      <Price
                        harga={convertRupiah.convert(item?.produk?.harga)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        className="font-Poppins text-xs px-3.5"
        onClick={() => {
          navigate("/home");
        }}
      >
        « Kembali
      </button>
    </div>
  );
};

export default History;
