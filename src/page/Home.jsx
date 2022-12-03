import React from "react";
import logo from "../asset/icon/Planty's Logo-light.svg";
import { UilShoppingBag } from "@iconscout/react-unicons";
import User from "../component/User";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[10%] bg-[#161828] px-10 flex items-center justify-between ">
        <img src={logo} alt="" className="w-[88px] " />
        <div className="flex items-center space-x-4">
          {" "}
          <UilShoppingBag className="text-white w-[20px]" />
         <User/>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
