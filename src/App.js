import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/admin";
import Dashboard from "./pages/admin/dashboard"
import User from "./pages/admin/user";
import Kelas from "./pages/Kelas";
import UserDetail from "./pages/admin/userDetail";

function App() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="user" element={<User />} />
                    <Route path="user/:nama/:kelas" element={<UserDetail/>} />
                    <Route path="kelas" element={<Kelas />} />
                </Route>
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </React.Fragment>
    );
  
}

export default App;
