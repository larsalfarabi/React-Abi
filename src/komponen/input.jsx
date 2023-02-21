import React from "react";

export default function Input({ label, isError, textError, ...props }) {
  return (
    <div className="relative">
      <input
        {...props}
        className="w-full my-2.5 focus:outline-none focus:border focus:border-gray-400 border border-gray-200 py-3 px-4 rounded-lg placeholder-gray-600 text-sm font-medium"
      />
      {isError && <p className="text-red-300 text-sm">{textError}</p>}
    </div>
  );
}
