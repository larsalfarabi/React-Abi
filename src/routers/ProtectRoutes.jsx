import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }) => {
    const auth = Cookies.get("");
    console.log("auth", auth);

    return auth !== undefined ? children : <Navigate to={"/login"} />
};

export default ProtectRoutes;
