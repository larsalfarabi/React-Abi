import React from "react";

export default function Input({ label, isError, textError, ...props }) {
  return (
    <div className="input">
      <input {...props} className="input-text" id={label}></input>
      <label htmlFor={label}>{label}</label>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
