// import logo from './logo.svg';

import React, { useState } from "react";
import "./style/style.css";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Setting from "./pages/setting";
import About from "./pages/about";
import Detail from "./pages/detail";
import NotFound from "./pages/notFound";
import Computer from "./pages/setting/Computer";
import Phone from "./pages/setting/Phone";
import Profile from "./pages/setting/Profile";
import Lenovo from "./pages/setting/Lenovo";
import Samsung from "./pages/setting/Samsung";
import Apple from "./pages/setting/Apple";

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
            isActive ? { color: "red", padding: "5px" } : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/tes"}
          style={({ isActive }) =>
            isActive ? { color: "red", padding: "5px" } : undefined
          }
        >
          Setting
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-white border py-2 px-3 bg-red-500" : undefined
          }
        >
          About
        </NavLink>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tes" element={<Setting />}>
          <Route path="computer" element={<Computer />} >
            <Route path="apple" element={<Apple />} />
            <Route path="samsung" element={<Samsung />} />
            <Route path="lenovo" element={<Lenovo />} />
          </Route>
          <Route path="phone" element={<Phone />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/:nama" element={<Detail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </React.Fragment>
  );
}
