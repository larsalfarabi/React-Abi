import React from "react";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: "0",
      background: "#000",
      justifyContent: "space-between",
      zIndex:'10'
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" className="h-[30px] " />
      <p className="text-white font-bold text-xl font-mono">Youtube</p>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
