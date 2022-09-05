import React from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

export default function Setting() {
  let location = useLocation();
  let navigate = useNavigate();
  let path = location.pathname.split("/")[1];
  let cekPath = location.pathname.split("/")[2];

  console.log(location.pathname);
  console.log(location.pathname.split("/"));
  console.log("item 1 =>", path);

  return (
    <div className="grid grid-cols-8 border">
      <section className="space-y-5 col-span-1 flex flex-col">
        <Link to={`/${path}/phone`}>
          <span
            style={{
              color: cekPath === "phone" ? "red" : "",
            }}
          >
            Phone
          </span>
        </Link>
        <Link to={`/${path}/profile`}>
          <span
            style={{
              color: cekPath === "profile" ? "red" : "",
            }}
          >
            {" "}
            Profile
          </span>
        </Link>
        <Link to={`/${path}/computer`}>
          <span
            style={{
              color: cekPath === "computer" ? "red" : "",
            }}
          >
            {" "}
            Computer
          </span>
        </Link>
      </section>
      <section className="col-span-7 border">
        <Outlet />
      </section>
      <button
        onClick={() => {
          return navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}
