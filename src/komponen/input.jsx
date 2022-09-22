import React from "react";

export default function Input({ label, isError, textError, ...props }) {
  return (
    <div >
      <input {...props} className="input mx-5 my-2" id={label}></input>
      <label htmlFor={label} >
        {label}
      </label>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
