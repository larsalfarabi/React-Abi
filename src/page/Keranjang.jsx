/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import { getKaranjang, hapusKaranjang, postBeli, ubahItem } from "../API/home";
import { Button, Navbar, Price, RatingDetail, Star } from "../component";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import no_produk from "../asset/image/no-shopping-cart.png";
import Swal from "sweetalert2";
import "../styles/styles.css";
import { item } from "./redux/action/authAction";
import { useDispatch } from "react-redux";

const Keranjang = () => {
  const convertRupiah = require("rupiah-format");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [load, setLoad] = useState({
    data: "",
  });
  const [listKeranjang, setListKeranjang] = useState([]);
  const [fetchProduct, setFetchProduct] = React.useState(false);
  const [payload, setPayload] = useState({});
  const tambahItem = async (id, jumlah) => {
    try {
      getListKeranjang();
      const response = await dispatch(item(payload));
      setPayload({ id: id, jumlah: jumlah });
      console.log("item =>", response);
    } catch (err) {
    } finally {
    }
  };
  const handleBeli = async () => {
    try {
      setFetchProduct(true);
      const response = await postBeli(load);
      console.log("Beli =>", response);
      getListKeranjang();
      if (response.status === 201) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response.data.msg,
        });
      }
    } catch (err) {
    } finally {
      setFetchProduct(false);
    }
  };
  const handleDelete = async (id) => {
    try {
      setFetchProduct(true);
      const response = await hapusKaranjang(id);
      getListKeranjang();
      console.log("delete =>", response);
    } catch (err) {
    } finally {
      setFetchProduct(false);
    }
  };
  const getListKeranjang = async () => {
    try {
      setFetchProduct(true);
      const response = await getKaranjang();
      console.log("keranjang =>", response.data.data);
      setListKeranjang(response.data.data);
      setLoad(response.data);
    } catch (err) {
    } finally {
      setFetchProduct(false);
    }
  };
  let array = listKeranjang.map((value) => value?.produk?.harga * value.jumlah);
  const hasil = array.reduce((total, currentValue) => total + currentValue, 0);
  console.log("hasil =>", hasil);
  useEffect(() => {
    getListKeranjang();
  }, []);
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-[#F1F3F4]">
      <Navbar />
      <div className="grid grid-cols-5 h-[80%] ml-2 mb-5">
        <div className="overflow-auto col-span-3 scroll-smooth bar">
          <div className="gap-4 p-5 space-y-5">
            {listKeranjang.length === 0 ? (
              <div className="w-1/2 ml-[22%]">
                {" "}
                <img src={no_produk} alt="" />
              </div>
            ) : (
              listKeranjang?.map((item, index) => {
                const json = item?.produk?.gambarProduk;
                const obj = JSON.parse(json);
                const increment = () => {
                  tambahItem(item?.id, item?.jumlah + 1);
                  getListKeranjang();
                };
                const decrement = () => {
                  tambahItem(item?.id, item?.jumlah - 1);
                  getListKeranjang();
                };
                return (
                  <div
                    key={index}
                    className="flex-col border-b-[1px] border-slate-200"
                  >
                    <div className="flex justify-between w-full ">
                      <div className="flex space-x-4">
                        <img
                          src={obj[0].gambar1}
                          className="border border-slate-200  w-20 h-20 rounded-md"
                          alt=""
                        />
                        <p className="font-Poppins font-semibold text-sm">
                          {item?.produk?.namaProduk}
                        </p>
                      </div>
                      <div className="flex space-x-10">
                        <RatingDetail
                          rating={item?.produk?.rating}
                          stok={item?.produk?.stok}
                        />
                        <FiTrash
                          color="red"
                          onClick={() => {
                            handleDelete(item?.id);
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      {" "}
                      <div className="flex items-center space-x-3 ml-24">
                        <FaMinusCircle
                          onClick={() => {
                           return decrement();
                          }}
                        />
                        <p>{item?.jumlah}</p>
                        <FaPlusCircle
                          onClick={() => {
                           return increment();
                          }}
                        />
                      </div>
                      <Price
                        harga={convertRupiah.convert(
                          item?.produk?.harga * item?.jumlah
                        )}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>{" "}
        <div className="col-span-2 bg-white rounded-md mx-5 my-2 px-3 py-5 flex-col flex justify-between h-full">
          <p className="font-Poppins font-medium">Ringkasan Belanja</p>
          <div className="flex justify-between">
            {" "}
            <p>Total harga:</p>
            <Price harga={convertRupiah.convert(hasil)} />
          </div>
          <Button label={"Beli"} onClick={handleBeli} />
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

export default Keranjang;
