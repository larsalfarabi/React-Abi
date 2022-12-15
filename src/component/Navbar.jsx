import React from "react";
import logo from "../asset/icon/Planty's Logo-light.svg";
import bag from "../asset/icon/Bag-white.svg";
import { Link } from "react-router-dom";
import InputHome from "./InputHome";
import { FaHistory } from "react-icons/fa";

const Navbar = ({ change, value, name }) => {
  return (
    <div className="w-full h-[10%] bg-[#161828] px-10 flex items-center justify-between ">
      <img src={logo} alt="" className="w-[88px] " />
      <div className="w-1/3">
        <InputHome
          placeholder="Search"
          name={name}
          value={value}
          type="text"
          onChange={change}
        />
      </div>
      <div className="flex items-center space-x-5 ">
        {" "}
        <Link to={"/keranjang"}>
          {" "}
          <img src={bag} alt="" className="w-[22px]" />
        </Link>
        <Link to={"/history"}>
          {" "}
          <FaHistory color="white" className="w-[22px]" />
        </Link>
        <p className="text-white text-[22px] font-extralight mb-1">|</p>
        <div className="w-9 h-9 rounded-full user"></div>
      </div>
    </div>
  );
};

export default Navbar;
