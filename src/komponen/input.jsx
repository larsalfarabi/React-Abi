import React from "react";

function Input({ label, isError = false, textError, ...props }) {
  return (
    <div>
      <input {...props} className="input mx-5 my-2" id={label}></input>
      <label htmlFor={label}>{label}</label>
      {isError && (
        <p className="text-red-500 font-bold text-sm italic  ml-5 ">
          Isi Input tidak sesuai
        </p>
      )}
    </div>
  );
}
function TextArea({ label, isError = false, textError, ...props }) {
  return (
    <div>
      <textarea {...props} className="input mx-5 my-2" id={label}></textarea>
      <label htmlFor={label}>{label}</label>
      {isError && (
        <p className="text-red-500 font-bold text-sm italic ml-5 ">
          Isi Input tidak sesuai
        </p>
      )}
    </div>
  );
}

export { Input, TextArea };
