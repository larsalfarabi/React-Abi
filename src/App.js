import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  ForgotPassword,
  Home,
  Login,
  Register,
  ResetPassword,
} from "./page/auth";
import ProtectRoutes from "./routers/ProtectRoutes";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route
          path="home"
          element={
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          }
        />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}
