import React from "react";

export default function PasswordInput({ label, isError, textError, ...props }) {
  const [changePassword, setChangePassword] = React.useState(true);
  const change = changePassword === true ? false : true;
  return (
    <div className="relative ">
      <input
        {...props}
        type={change ? "text" : "password"}
        className="w-full focus:outline-none focus:border focus:border-gray-400 border border-gray-200 py-3 px-4 rounded-lg placeholder-gray-600 text-sm font-medium"
      ></input>

      <label
        className="text-[13px] font-medium absolute right-[20px] top-[14px] cursor-pointer"
        onClick={() => {
          setChangePassword(change);
        }}
      >
        {change ? "Hide" : "Show"}
      </label>
      {isError && <p className="text-red-300 text-sm">{textError}</p>}
    </div>
  );
}
