import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  ForgotPassword,
  Home,
  Login,
  Register,
  ResetPassword,
} from "./page/auth";
import DetailPage from "./page/DetailPage";
import History from "./page/History";
import Keranjang from "./page/Keranjang";
import ProtectRoutes from "./routers/ProtectRoutes";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route
          path="/home"
          element={
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          }
        />
        <Route
          path="/produk/detail/:uuid"
          element={
            <ProtectRoutes>
              <DetailPage />
            </ProtectRoutes>
          }
        />
        <Route
          path="/keranjang"
          element={
            <ProtectRoutes>
              <Keranjang />
            </ProtectRoutes>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectRoutes>
              <History />
            </ProtectRoutes>
          }
        />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}
