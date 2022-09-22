import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import DetailUser from "./pages/DetailUser";
import User from "./pages/User";
import UpdateUser from "./pages/UpdateUser";
// import Input from "./component/Input";
// import TextArea from "./component/TextArea";
// import Button from "./component/Button";
// import Card from "./component/Card;

export default function App() {
  return (
    <div>
      {/* <h1 className="bg-red-500"> branch API</h1> */}
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/user/createUser" element={<CreateUser />} />
        <Route path="/user/:id/:detail" element={<DetailUser />} />
        <Route path="/user/update/:id" element={<UpdateUser />} />
        <Route path="*" element={<Navigate to="/user" replace={true} />} />
      </Routes>
    </div>
  );
}
