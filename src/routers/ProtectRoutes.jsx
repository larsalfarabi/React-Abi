import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { syncToken } from "../API/baseUrl";
import { authMe } from "../page/redux/action/authAction";
const ProtectRoutes = ({ children }) => {
  const auth = Cookies.get("myapps_token");
  const isAuth = useSelector((state) => state?.authProcess?.isAuth);

  console.log("auth => ", isAuth);
  let [process, setProcess] = React.useState(true);
  let dispatch = useDispatch();
  const onLoaded = async (values) => {
    let result = await dispatch(authMe(values));
    syncToken();
    setProcess(false);

    console.log("res", result);
  };
  React.useEffect(() => {
    if (!isAuth) {
      if (auth !== undefined) {
        onLoaded();
      } else {
        setProcess(false);
      }
    } else {
      syncToken();
      setProcess(false);
    }
  }, []);

  if (process) {
    return (
      <div className="flex justify-center items-center w-full h-screen  ">
        <div class="loading">
          <div class="d1"></div>
          <div class="d2"></div>
        </div>
      </div>
    );
  } else {
    console.log("auth", auth);
    return auth !== undefined ? children : <Navigate to={"/login"} />;
  }
};

export default ProtectRoutes;
