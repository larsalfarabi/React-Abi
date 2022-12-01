import React from "react";
import logo from "../asset/icon/Planty's Logo-light.svg";
const Home = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[10%] bg-[#161828] px-5 flex items-center ">
        <img src={logo} alt="" className="w-[88px] " />
      </div>
    </div>
  );
};

export default Home;
