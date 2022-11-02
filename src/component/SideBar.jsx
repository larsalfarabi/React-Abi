import React from "react";
import { rgbToHex, Stack } from "@mui/system";
import { categories } from "../utils/constants";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const SideBar = () => (
  <Stack
    direction={"row"}
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((categories) => (
      <Link to={categories.element}>
        <button className="animation">
          <span className="mr-[24px]">{categories.icon}</span>
          <span>{categories.name}</span>
        </button>
      </Link>
    ))}
  </Stack>
);

export default SideBar;
