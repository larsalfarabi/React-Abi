import React from "react";
import Show from "../asset/icon/Show.svg";
import Hide from "../asset/icon/Hide.svg";
import "../styles/styles.css";
const InputPassword = ({ ...props }) => {
  const [changePassword, setChangePassword] = React.useState(true);
  const changeIcon = changePassword === true ? false : true;
  return (
    <div className="input-group px-3.5">
      <img
        src={changeIcon ? Show : Hide}
        alt=""
        className="icon"
        onClick={() => {
          setChangePassword(changeIcon);
        }}
      />
      <input
        {...props}
        type={changePassword ? "password" : "text"}
        className="input"
      />
    </div>
  );
};

export default InputPassword;
