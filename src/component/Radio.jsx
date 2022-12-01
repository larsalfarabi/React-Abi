import React from "react";
import "../styles/styles.css";

const Radio = ({ label, isError, textError, children, ...props }) => {
  return (
    <div className="px-3.5">
      <label htmlFor={label}>{label}</label>
      <select {...props} className="input" id={label}>
        {children}
      </select>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
};

export default Radio;
