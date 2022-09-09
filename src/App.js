import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DetailUser from "./pages/DetailUser";
import User from "./pages/User";
// import Input from "./component/Input";
// import TextArea from "./component/TextArea";
// import Button from "./component/Button";
// import Card from "./component/Card;

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<User/>} />
        <Route path="/user/:id/:detail" element={<DetailUser/>} />
        <Route path="*" element={<Navigate to="/user" replace={true} />} />
      </Routes>
    </div>
  );
}
