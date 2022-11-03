import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routers/protectRoute";
import Login from "./pages/auth/login";
import Article from "./pages/article/article.jsx";
import CreateArticle from "./pages/article/createArticle";
import DetailArticle from "./pages/article/detailArticle";
import UpdateArticle from "./pages/article/updateArticle";
import { useSelector } from "react-redux";
import Register from "./pages/auth/register";
// import Input from "./component/Input";
// import TextArea from "./component/TextArea";
// import Button from "./component/Button";
// import Card from "./component/Card;

export default function App() {
  const color = useSelector((state) => state.color);
  console.log(color);

  return (
    <div className="">
      <h1
        style={{
          backgroundColor: color.color,
        }}
      >
        {" "}
        branch API
      </h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
          path="/artikel/update/:slug"
          element={
            <ProtectedRoute>
              <UpdateArticle />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/article" replace={true} />} />
      </Routes>
    </div>
  );
}
