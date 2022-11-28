import React, { useEffect } from "react";
import usePage from "./hook/usePage";
import useList from "./hook/useList";
import useJuz from "./hook/usejuzz";
// import { Routes, Route, Navigate } from "react-router-dom";
// import CustomHook from "./page/CustomHook";
// import LayoutEffect from "./page/LayoutEffect";
// import ReducerMateri from "./page/ReducerMateri";
// import RefTutorial from "./page/RefTutorial";
// import Optimize from "./page/UseOptimaze";

export default function App() {
  // const { alquran } = useList();
  const { alquran: data, juz, setJuz } = useJuz();
  console.log("alquran =>", data);
  // const { page, setPage, pageSize, setPageSize, handlePage, handlePageSize } =
  //   usePage();

  return (
    <div className="w-full h-screen px-3 py-2">
      <h1>Belajar Custom Hook</h1>

      <h2 className="">{juz}</h2>
      <button
        onClick={() => {
          setJuz(juz + 1);
        }}
      >Ubah Juz</button>

      {/* useList */}
      {/* <p> Page Size = {pageSize}</p>
      <p>page = {page} </p>
      <div>
        <select
          onChange={handlePageSize}
          value={pageSize}
          className="w-[30%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <div className="flex space-x-3">
          <button
            onClick={handlePage}
            value={1}
            className="w-9 h-9 rounded-lg flex items-center justify-center  font-semibold bg-slate-900 text-white"
          >
            1
          </button>
          <button
            onClick={handlePage}
            value={2}
            className="w-9 h-9 rounded-lg flex items-center justify-center  font-semibold bg-slate-900 text-white"
          >
            2
          </button>
          <button
            onClick={handlePage}
            value={3}
            className="w-9 h-9 rounded-lg flex items-center justify-center  font-semibold bg-slate-900 text-white"
          >
            3
          </button>
          <button
            onClick={handlePage}
            value={4}
            className="w-9 h-9 rounded-lg flex items-center justify-center  font-semibold bg-slate-900 text-white"
          >
            4
          </button>
          <button
            onClick={handlePage}
            value={5}
            className="w-9 h-9 rounded-lg flex items-center justify-center  font-semibold bg-slate-900 text-white"
          >
            5
          </button>
        </div>
      </div> */}
      {/* <Routes>
        <Route path="/useRef" element={<Optimize />} />
        <Route path="/customHook" element={<CustomHook />} />
        <Route path="/useReducer" element={<ReducerMateri />} />
        <Route path="/useEffectLayout" element={<LayoutEffect />} />
        <Route path="*" element={<Navigate to="/useRef" />} />
      </Routes> */}
    </div>
  );
}
