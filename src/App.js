import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import DetailUser from "./pages/DetailUser";
import User from "./pages/User";
import UpdateUser from "./pages/UpdateUser";
import ProtectedRoute from "./routers/protectRoute";
import Login from "./pages/auth/login";
import Article from "./pages/article/article.jsx";
import CreateArticle from "./pages/article/createArticle";
import DetailArticle from "./pages/article/detailArticle";
import UpdateArticle from "./pages/article/updateArticle";
// import Input from "./component/Input";
// import TextArea from "./component/TextArea";
// import Button from "./component/Button";
// import Card from "./component/Card;

export default function App() {
  return (
    <div>
      {/* <h1 className="bg-red-500"> branch API</h1> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/article"
          element={
            <ProtectedRoute>
              <Article />
            </ProtectedRoute>
          }
        />
        <Route
          path="/article/createArticle"
          element={
            <ProtectedRoute>
              <CreateArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/:slug"
          element={
            <ProtectedRoute>
              <DetailArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/update/:id/:slug"
          element={
            <ProtectedRoute>
              <UpdateArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/createUser"
          element={
            <ProtectedRoute>
              <CreateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:id/:detail"
          element={
            <ProtectedRoute>
              <DetailUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <ProtectedRoute>
              <UpdateUser />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/user" replace={true} />} />
      </Routes>
    </div>
  );
}
