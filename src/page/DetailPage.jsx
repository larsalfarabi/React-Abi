import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getDetailProduct,
  postBeli,
  postKaranjang,
} from "../API/home";
import { Navbar, Price, RatingDetail } from "../component";

const DetailPage = () => {
  const convertRupiah = require("rupiah-format");
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [payload, setPayload] = useState({
    produkId: "",
  });
  const [load, setLoad] = useState({
    data: [
      {
        id: "",
        produkId: "",
        jumlah: 1,
        userId: 4,
        createdAt: "2022-12-09T02:30:57.000Z",
        updatedAt: "2022-12-09T02:30:57.000Z",
      },
    ],
  });
  const [listDetail, setListDetail] = useState([]);
  const [fetchProduct, setFetchProduct] = React.useState(false);
  const [gambar, setGambar] = useState("");
  const handleBeli = async () => {
    try {
      const response = await postBeli(load);
      console.log("Beli =>", response);
         if (response.data.msg === "Transaksi Berhasil") {
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
    }
  };
  const handleKeranjang = async () => {
    try {
      setFetchProduct(true);
      const response = await postKaranjang(payload);
      console.log("tambah keranjang =>", response);
      if (response.data.status === "Success") {
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
          title: "Berhasil ditambah",
        });
      }
    } catch (err) {
    } finally {
      setFetchProduct(false);
    }
  };
  const getDetail = async () => {
    try {
      setFetchProduct(true);
      const response = await getDetailProduct(uuid);
      console.log("data", response);
      setListDetail(response.data.data);
      setPayload({ produkId: response.data.data.id });
      setLoad({
        data: [
          {
            id: response.data.data.id,
            produkId: response.data.data.id,
            jumlah: 1,
            userId: 4,
            createdAt: "2022-12-09T02:30:57.000Z",
            updatedAt: "2022-12-09T02:30:57.000Z",
          },
        ],
      });
      const json = response.data.data.gambarProduk;
      const obj = JSON.parse(json);
      setGambar(obj);
      console.log("obj =>", obj);
    } catch (err) {
      console.log(err);
    } finally {
      setFetchProduct(false);
    }
  };
  React.useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />

      <div className="flex px-6 pt-5 w-full h-[85%] space-x-3">
        <div className="w-[355px] h-[350px] rounded-lg bg-[#E9EFF3]">
          <img
            src={gambar[0]?.gambar1}
            className="w-full h-full object-cover border border-slate-200 rounded-md"
            alt=""
          />
        </div>
        <div className="space-y-3 col-span-2 w-1/2">
          {" "}
          <p className="font-Poppins font-semibold text-2xl">
            {listDetail.namaProduk}
          </p>
          <div className="flex items-center space-x-3">
            {" "}
            <RatingDetail rating={listDetail.rating} stok={listDetail.stok} />
            <p className="text-[15px] font-Poppins text-[#8A8C95]">
              {listDetail.kategori}
            </p>
          </div>
          <p className="font-Poppins font-semibold text-[15px]">Description:</p>
          <p className="text-justify font-Poppins text-sm text-[#8A8C95] w-[90%]">
            {listDetail.deskripsi}
          </p>
        </div>
        <div className="w-[300px] h-[400px] shadow-lg shadow-slate-100 p-4 rounded-md">
          <p className="font-Poppins font-semibold mb-3">Set Order</p>
          <div className="w-full h-[1px] bg-[#DCDCDC] mb-3"></div>
          <div className="flex items-center space-x-4 ">
            {" "}
            <div className="w-20 h-20 bg-[#E9EFF3] rounded-md">
              <img src={gambar[0]?.gambar1} className="rounded-md w-full h-full border border-slate-200" alt="" />
            </div>
            <p className="font-Poppins text-[#8A8C95] text-sm">
              Stock:{" "}
              <span className="font-Poppins font-semibold text-black">
                {listDetail.stok}
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="font-Poppins text-[#8A8C95] text-sm">Price:</p>
            <Price harga={convertRupiah.convert(listDetail.harga)} />
          </div>
          <div className="space-y-2 mt-4">
            {" "}
            <button
              className="w-full bg-[#2A977D] text-white py-3 rounded-md font-Poppins font-medium text-sm"
              onClick={handleBeli}
            >
              Buy Now
            </button>
            <button
              className="w-full border border-[#2A977D] text-[#2A977D] py-3 rounded-md font-Poppins font-medium text-sm"
              onClick={handleKeranjang}
            >
              Add to bag
            </button>
          </div>{" "}
          <div className="w-full h-[1px] bg-[#DCDCDC] mt-4"></div>
        </div>{" "}
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

export default DetailPage;
