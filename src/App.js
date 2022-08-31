// import logo from './logo.svg';

import React, { useState } from "react";
import "./style/style.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Setting from "./pages/setting";
import About from "./pages/about";
import Detail from "./pages/detail";

export default function App() {
  return (
    <React.Fragment>
      <section className="space-x-5 border py-5">
        {/* <Link className="px-2 py-2 bg-slate-500 text-white" to={'/'}>Home</Link>
        <Link className="px-2 py-2 bg-slate-500 text-white" to={'/setting'}>Setting</Link>
        <Link className="px-2 py-2 bg-slate-500 text-white" to={'/about'}>About</Link> */}
        <NavLink
          to={"/"}
          style={({ isActive }) =>
            isActive
              ? { color: "red",padding: "5px"}
              : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/setting"}
          style={({ isActive }) =>
            isActive
              ? { color: "red", padding: "5px"}
              : undefined
          }
        >
          Setting
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? 'text-white border py-2 px-3 bg-red-500'
              : undefined
          }
        >
          About
        </NavLink>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/:nama/:kelas" element={<Detail />} />
      </Routes>
    </React.Fragment>
  );
}
