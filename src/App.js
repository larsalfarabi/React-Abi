import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutEffect from "./page/LayoutEffect";
import ReducerMateri from "./page/ReducerMateri";
import RefTutorial from "./page/RefTutorial";
import Optimize from "./page/UseOptimaze";
export default function App() {
  useEffect(() => {}, []);
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/useRef" element={<Optimize />} />
        <Route path="/useReducer" element={<ReducerMateri />} />
        <Route path="/useEffectLayout" element={<LayoutEffect />} />
        <Route path="*" element={<Navigate to="/useRef" />} />
      </Routes>
    </div>
  );
}
