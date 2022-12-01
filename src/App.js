import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from "./page/ForgotPassword";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import ResetPassword from "./page/ResetPassword";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}
