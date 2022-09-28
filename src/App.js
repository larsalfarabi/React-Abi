import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateBuku from "./pages/CreateBuku";
import DetailBuku from "./pages/DetailBuku";
import Buku from "./pages/Buku";
import UpdateBuku from "./pages/UpdateUser";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// import Input from "./component/Input";
// import TextArea from "./component/TextArea";
// import Button from "./component/Button";
// import Card from "./component/Card;

export default function App() {
  return (
    <div>
      {/* <h1 className="bg-red-500"> branch API</h1> */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="buku" element={<Buku />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/admin/buku/tambah" element={<CreateBuku />} />
        <Route path="/admin/buku/:id/update" element={<UpdateBuku />} />
        <Route path="/admin/buku/:id/view" element={<DetailBuku />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="notFound" replace={true} />} />
      </Routes>
    </div>
  );
}
