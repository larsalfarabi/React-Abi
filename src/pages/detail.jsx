import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  let navigate = useNavigate();
  let { id, nama } = useParams();
  return (
    <React.Fragment>
      <p>ini adalah detail</p>
      <p>
        id nya adalah {id} {nama}
      </p>
      <button
        onClick={() => {
          return navigate("/home", {replace: true});
        }}
      >
        Home
      </button>
    </React.Fragment>
  );
}
