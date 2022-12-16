import React from "react";
import { CgList } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import "../styles/styles.css";
const OurPrograms = () => {
  return (
    <div className="h-full w-full bg-[#E2EDFF]">
      <div className="grid grid-rows-2 ">
        {" "}
        <div className="flex justify-center items-center ">
          {" "}
          <p className="text-[40px] judul mr-3 mt-5"> Our Programs </p>
          <CgList className="text-[40px] mt-5" />{" "}
        </div>
        <div className="w-[100px] h-1 bg-[#0dcaf0] mx-[624.5px] mt-1"></div>
      </div>
      <div className="flex px-16 justify-around ">
        <div
          className="bg-white h-[350px] w-[350px] rounded-lg border border-gray-300 p-8 "
          id="toeic"
        >
          <p className="font text-base font-semibold mb-3">01</p>
          <h1 className="font text-lg font-semibold text-[#FF6651]">TOEIC ®</h1>
          <div className="mt-5 space-y-2">
            {" "}
            <p className="flex items-center isi text-lg">
              <FaCheck className="text-[13px] text-[#2d2f6a] mr-2.5" /> Score
              Accuracy
            </p>
            <p className="flex items-center isi text-lg">
              <FaCheck className="text-[13px] text-[#2d2f6a] mr-2.5" />{" "}
              International Certification
            </p>
            <button>
              <span className="button_top"> Join now</span>
            </button>
          </div>
        </div>
        <div
          className="bg-white h-[350px] w-[350px] rounded-lg border border-gray-300 p-8"
          id="toefl"
        >
          {" "}
          <p className="font text-base font-semibold mb-3">02</p>
          <h1 className="font text-lg font-semibold text-[#54BAF3] ">
            TOEFL ®
          </h1>
          <div className="mt-5 space-y-2">
            {" "}
            <p className="flex items-center isi text-lg">
              <FaCheck className="text-[13px] text-[#2d2f6a] mr-2.5" /> Score
              Accuracy
            </p>
            <p className="flex items-center isi text-lg">
              <FaCheck className="text-[13px] text-[#2d2f6a] mr-2.5" />{" "}
              International Certification
            </p>
            <button>
              <span className="button_top"> Join now</span>
            </button>
          </div>
        </div>
        <div
          className="bg-white h-[350px] w-[350px]  rounded-lg border border-gray-300 p-8"
          id="private"
        >
          <p className="font text-base font-semibold">03</p>
          <h1 className="font text-lg font-semibold text-[#705DF2] ">
            PRIVATE CLASS
          </h1>
          <div className="mt-5 space-y-2">
            {" "}
            <p className="flex items-center isi text-lg">
              <FaCheck className="text-[13px] text-[#2d2f6a] mr-2.5" />
              good at speaking english
            </p>
            <p className="flex items-center isi text-lg">
              <FaCheck className="text-[13px] text-[#2d2f6a] mr-2.5" />
              good at listening to English
            </p>
            <p className="flex items-center isi text-lg">
              <FaCheck className="text-[13px] text-[#2d2f6a] mr-2.5" />
              good at reading English
            </p>
            <p className="flex items-center isi text-lg">
              <FaCheck className="text-[13px] text-[#2d2f6a] mr-2.5" />
              Certification
            </p>
            <button>
              <span className="button_top"> Join now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
