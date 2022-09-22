import React from "react";
import "../styles/styles.css"

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

export default function Button({ title, color = "#1a73e8", disabled,...props }) {
  return (
    <React.Fragment>
      <button
        disabled={disabled}
        // style={{
        //   backgroundColor: color,
        //   opacity: disabled ? 0.5 : 1
        // }}
        className="font-mono font-medium px-4 my-1 "
        {...props}
      >
        {title}
      </button>
    </React.Fragment>
  );
}
