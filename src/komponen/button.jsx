import React from "react";

// export default function Button({
//   title,
//   color = "red",
//   onClick,
//   name,
//   id,
//   disabled = false,
// }) {
//   return (
//     <React.Fragment>
//       <button
//         onClick={onClick}
//         id={id}
//         name={name}
//         disabled={disabled}
//         style={{
//           backgroundColor: color,
//         }}
//         className="button"
//       >
//         {title}
//       </button>
//     </React.Fragment>
//   );
// }

export default function Button({ title, color = "red", ...props }) {
  return (
    <React.Fragment>
      <button
        {...props}
        style={{
          backgroundColor: color,
        }}
        className="button"
      >
        {title}
      </button>
    </React.Fragment>
  );
}
