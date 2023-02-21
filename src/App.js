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
import CreateOutlet from "./pages/outlet/createOutlet";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
// import Input from "./component/Input";
// import TextArea from "./component/TextArea";
// import Button from "./component/Button";
// import Card from "./component/Card;

export default function App() {
  const color = useSelector((state) => state.color);
  console.log(color);

  return (
    <div className="bg-[#F5F2EA] h-screen">
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
        <Route path="/home" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/outlet/createOutlet" element={<CreateOutlet />} />
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

        {/* <Route path="*" element={<Navigate to="/home" replace={true} />} /> */}
      </Routes>
    </div>
  );
}
