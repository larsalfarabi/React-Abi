import React from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import Logo from "../asset/icon/Planty's Logo.svg";
import Show from "../asset/icon/Show.svg";
import resetPassword from "../asset/image/Reset password.png";
import { useNavigate } from "react-router-dom";
import InputPassword from "../component/Input Password";
const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="bg w-screen h-screen p-4">
      <div className="bg-white w-[35%] h-full rounded-3xl p-4 relative">
        <img
          src={resetPassword}
          className="absolute -right-[38px] top-[10%] w-[75px] select-none"
          alt=""
        />
        <img src={Logo} alt="" className="select-none" />
        <p className="font-Poppins text-gray-600 text-[15px] mt-10 px-3.5">
          Provide new password for your account.
        </p>{" "}
        <div className="space-y-[30px] mt-[25%]">
          <InputPassword placeHolder={"New Password"}/>
          <InputPassword placeHolder={"Confirm New Password"}/>
          <Button label={"Submit"} />
        </div>
        <button
          className="font-Poppins text-xs px-3.5 mt-[20%]"
          onClick={() => {
            navigate("/forgotPassword");
          }}
        >
          « Kembali
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
