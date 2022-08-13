import React from "react";

export default function Select({ label, textError, isError, ...props }) {
  return (
    <div className="input">
      <select {...props} className="input-text" id={label} placeholder="Pilih:">
        <option>Pilih:</option>
        <option>Laki-laki</option>
        <option>Perempuan</option>
      </select>
      <label htmlFor={label}>{label}</label>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
