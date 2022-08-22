import React from "react";

export default function Button({ title, color = "#00b4d8", ...props }) {
  return (
    <div>
      <button
        className="button-simpan"
        {...props}
        style={{ backgroundColor: color }}
      >
        {title}
      </button>
    </div>
  );
}
