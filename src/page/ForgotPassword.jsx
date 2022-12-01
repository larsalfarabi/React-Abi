import React from "react";
import "../styles/styles.css";
import Logo from "../asset/icon/Planty's Logo.svg";
import Input from "../component/Input";
import Button from "../component/Button";
import Email from "../asset/icon/Message.svg";
import forgotPassword from "../asset/image/forgot password.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="bg w-screen h-screen p-4">
      <div className="bg-white w-[35%] h-full rounded-3xl p-4 relative">
        <img
          src={forgotPassword}
          className="absolute -right-[38px] top-[8%] w-[75px] select-none"
          alt=""
        />
        <img src={Logo} alt="" className="select-none" />
        <p className="font-Poppins text-gray-600 text-[15px] mt-10 px-3.5">
          How could you forget your cat's name? <br /> Type your email to
          generate a new password.
        </p>{" "}
        <div className="space-y-[20%] mt-[25%]">
          <Input placeHolder={"Email"} icon={Email} />
          <Button
            label={"Submit"}
            onClick={() => {
              navigate("/resetPassword");
            }}
          />
        </div>
        <button
          className="font-Poppins text-xs px-3.5 mt-[25.3%]"
          onClick={() => {
            navigate("/login");
          }}
        >
          « Kembali
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
