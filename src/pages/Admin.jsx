import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/styles.css";

const Admin = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen grid grid-cols-12  ">
      <div className="space-y-5 col-span-1 flex flex-col py-5 pl-2">
        <NavLink
          to={"/admin/dashboard"}
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/admin/buku"}
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
        >
          Buku
        </NavLink>
        <NavLink
          to={"/admin/about"}
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
        >
          About
        </NavLink>
      </div>
      <div className="bg-white col-span-11 rounded-tl-[30px] rounded-bl-[30px] py-5 pl-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
