import React from "react";

import "../styles/styles.css";
const Input = ({ label, isError, textError, icon, ...props }) => {
  return (
    <div className="input-group px-3.5">
      <img src={icon} alt="" className="icon" />
      <input {...props} className="input" />
    </div>
  );
};

export default Input;
