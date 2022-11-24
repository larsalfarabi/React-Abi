import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/page/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )

}
