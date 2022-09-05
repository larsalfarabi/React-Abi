import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Computer = () => {
  let location = useLocation();
  let path = location.pathname.split("/")[1];
  let cekPath = location.pathname.split("/")[3];

  return (
    <div>
      <div>Ini Adalah Computer</div>
      <div>
        <Link to={`/${path}/computer/apple`}>
          {" "}
          <span
            className="ml-1"
            style={{
              color: cekPath === "apple" ? "red" : "",
            }}
          >
            Apple
          </span>
        </Link>
        <Link to={`/${path}/computer/samsung`}>
          {" "}
          <span
            className="mx-2"
            style={{
              color: cekPath === "samsung" ? "red" : "",
            }}
          >
            Samsung
          </span>
        </Link>
        <Link to={`/${path}/computer/lenovo`}>
          {" "}
          <span
            style={{
              color: cekPath === "lenovo" ? "red" : "",
            }}
          >
            Lenovo
          </span>
        </Link>
      </div>
      <div className="m-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Computer;
