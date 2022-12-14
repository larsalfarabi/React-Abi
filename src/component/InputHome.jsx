import React from "react";

const InputHome = ({ label, ...props }) => {
  return (
    <div class="input-group1">
      <div>
        <label className="label1">{label}</label>
        <input
          {...props}
          autoComplete="off"
          className="w-full rounded-md px-3 py-2 border border-slate-200"
        />
      </div>
    </div>
  );
};

export default InputHome;
