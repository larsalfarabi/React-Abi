import React, { useState } from "react";
import "../styles/styles.css";
import { Navbar, Star, Price, Button } from "../component";
import plant from "../asset/image/palm-tree-house-plant-pot-removebg-preview.png";
import { Link } from "react-router-dom";
import { getKategori, getProduct } from "../API/home.js";
import InputHome from "../component/InputHome";
const Home = () => {
  const convertRupiah = require("rupiah-format");
  // let number = {  };
  // let rupiah = convertRupiah.convert(number);
  const [listProduct, setListProduct] = useState([]);
  const [listKategori, setListKategori] = useState([]);
  const [payload, setPayload] = useState({
    kategori: "",
    keyword: "",
    hargaTerendah: "",
    hargaTertinggi: "",
  });
  const [fetchProduct, setFetchProduct] = React.useState(false);

  const handleChange = async (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const getListKategori = async () => {
    try {
      setFetchProduct(true);
      const response = await getKategori();
      console.log("kategori =>", response.data.data);
      setListKategori(response.data.data);
    } catch (err) {
    } finally {
      setFetchProduct(false);
    }
  };
  const getListProduk = async (e) => {
    // e.preventDefault();
    try {
      setFetchProduct(true);
      const response = await getProduct(
        payload.kategori,
        payload.keyword,
        payload.hargaTerendah,
        payload.hargaTertinggi
      );
      console.log("response =>", response);
      console.log("Produk =>", response.data.data.rows);
      setListProduct(response.data.data.rows);
    } catch (err) {
      console.log(err);
    } finally {
      setFetchProduct(true);
    }
  };
  React.useEffect(() => {
    getListProduk();
    getListKategori();
  }, [
    payload.kategori,
    payload.hargaTerendah,
    payload.hargaTertinggi,
    payload.keyword,
  ]);
  console.log("payload", payload);
  console.log("listProduct =>", listProduct);
  // console.log("payload =>", payload);
  return (
    <div className="w-screen h-screen bg-[#F1F3F4]">
      <Navbar change={handleChange} value={payload.keyword} name={"keyword"} />
      <div className="grid grid-cols-5 h-[90%]">
        <div className="overflow-auto col-span-4 scroll-smooth bar">
          <div className="grid grid-cols-4 gap-4 p-5">
            {listProduct.length === 0 ? (
              <div className="col-span-4 h-[80vh] flex justify-center items-center">
                {" "}
                <svg viewBox="25 25 50 50" className="svg">
                  <circle r="20" cy="50" cx="50"></circle>
                </svg>
              </div>
            ) : (
              listProduct?.map((item, index) => {
                const json = item?.gambarProduk;
                const obj = JSON.parse(json);
                return (
                  <Link to={`/produk/detail/${item.uuid}`} key={index}>
                    <div className="h-[275px] rounded-lg bg-white shadow-lg shadow-slate-100 ">
                      <div className="h-[60%] bg-[#E9EFF3] rounded-tl-lg border border-slate-100 rounded-tr-lg flex justify-center items-center ">
                        {" "}
                        <img
                          src={obj[0]?.gambar1}
                          alt=""
                          className="rounded-tl-lg w-full h-full  rounded-tr-lg "
                        />
                      </div>
                      <div className="h-1/2 p-2.5 space-y-3">
                        <div className="space-y-1">
                          {" "}
                          <p className="text-[13px] font-Poppins  text-[#8A8C95]">
                            {item?.kategori}
                          </p>
                          <p className="font-Poppins font-semibold text-[15px] text-[#161828] truncate">
                            {item?.namaProduk}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <Price harga={convertRupiah.convert(item?.harga)} />
                          <Star rating={item?.rating} stok={item?.stok} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>{" "}
        <div className="w-full h-full bg-inherit p-2">
          <div className="w-full h-full rounded-lg bg-white shadow-lg shadow-slate-100 px-3 py-4 space-y-5">
            {" "}
            <select
              className="bg-transparent border border-slate-200 rounded-md py-2 px-1 font-Poppins text-sm w-full"
              onChange={handleChange}
              name="kategori"
            >
              <option
                name="kategori"
                value={payload.kategori}
                className="text-[#8A8C95]"
              >
                Pilih Semua
              </option>
              {listKategori?.map((item, index) => {
                return (
                  <option
                    value={item?.kategori}
                    name="kategori"
                    key={index}
                    className="text-black"
                  >
                    {item?.kategori}
                  </option>
                );
              })}
            </select>{" "}
            <InputHome
              label={"harga Terendah"}
              name="hargaTerendah"
              value={payload.hargaTerendah}
              type="number"
              onChange={handleChange}
            />
            <InputHome
              label={"harga Tertinggi"}
              name="hargaTertinggi"
              value={payload.hargaTertinggi}
              type="number"
              onChange={handleChange}
            />{" "}
           
              {" "}
              <Button
                onClick={() => {
                  setPayload(() => {
                    return {
                      kategori: "",
                      keyword: "",
                      hargaTerendah: "",
                      hargaTertinggi: "",
                    };
                  });
                }}
                label={"Reset"}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
