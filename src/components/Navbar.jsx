import React from "react";
import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constans";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between item-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
    </nav>
  );
};

export default Navbar;
