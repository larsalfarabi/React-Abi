import React from "react";
import logo from "../asset/icon/Planty's Logo-light.svg";
import { UilShoppingBag } from "@iconscout/react-unicons";
import User from "../component/User";
import "../styles/styles.css";
import plant from "../asset/image/palm-tree-house-plant-pot-removebg-preview.png";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-[#F1F3F4]">
      <div className="w-full h-[10%] bg-[#161828] px-10 flex items-center justify-between ">
        <img src={logo} alt="" className="w-[88px] " />
        <div className="flex items-center space-x-4">
          {" "}
          <UilShoppingBag className="text-white w-[20px]" />
          <User />
        </div>
      </div>{" "}
      <div className="grid grid-cols-4 h-[90%]">
        {" "}
        <div className="overflow-auto col-span-3 scroll-smooth bar">
          <div className="grid grid-cols-4 gap-4 p-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map(() => {
              return (
                <div className="h-[275px] rounded-xl bg-white">
                  <div className="h-1/2 bg-[#E9EFF3] rounded-tl-xl rounded-tr-xl flex justify-center items-center">
                    {" "}
                    <img src={plant} alt="" className="w-20" />
                  </div>
                  <div className="h-1/2 "></div>
                </div>
              );
            })}
          </div>
        </div>{" "}
        <div className="w-full h-full bg-black ">
          <p className="text-white">apa</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
