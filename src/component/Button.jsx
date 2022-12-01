import React from "react";

const Button = ({ label, ...props }) => {
  return (
    <div className="px-3.5">
      <button
        {...props}
        className="w-full h-[50px] bg-[#637A30] rounded-[12px]"
      >
        <p className="font-Poppins font-semibold text-sm text-white">{label}</p>
      </button>
    </div>
  );
};

export default Button;
