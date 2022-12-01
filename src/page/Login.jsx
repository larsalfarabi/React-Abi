import React from "react";
import "../styles/styles.css";
import Logo from "../asset/icon/Planty's Logo.svg";
import Input from "../component/Input";
import signIn from "../asset/image/signIn.png";
import Show from "../asset/icon/Show.svg";
import Hide from "../asset/icon/Hide.svg";
import CheckBox from "../component/CheckBox";
import Button from "../component/Button";
import Devide from "../asset/icon/Line 1.svg";
import Email from "../asset/icon/Message.svg";
import Circle from "../asset/icon/Arrow - Down Circle.svg";
import { Link, useNavigate } from "react-router-dom";
import InputPassword from "../component/Input Password";

const Login = () => {
  const [changePassword, setChangePassword] = React.useState(true);
  const changeIcon = changePassword === true ? false : true;
  const navigate = useNavigate();
  return (
    <div className="bg w-screen h-screen p-4">
      <div className="bg-white w-[35%] h-full rounded-3xl p-4 relative">
        <img
          src={signIn}
          className="absolute -right-[38px] top-[30%] w-[75px] select-none"
          alt=""
        />
        <img src={Logo} alt="" className="select-none" />
        <div className="space-y-[25px] mt-[50px]">
          {" "}
          <Input placeHolder={"Email"} icon={Email} />
          <InputPassword placeHolder="Password" />
        </div>
        <div className="flex justify-between items-center mt-5 px-[18px] mb-10">
          <div className="flex items-center space-x-[10px] ">
            <CheckBox />
            <p className="font-Poppins font-medium text-xs text-[#637A30]">
              Remember me
            </p>
          </div>
          <div>
            {" "}
            <Link
              className="font-Poppins font-medium text-xs text-[#637A30]"
              to={"/forgotPassword"}
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <Button
          label={"Sign In"}
          onClick={() => {
            navigate("/home");
          }}
        />
        <div className="flex justify-between items-center px-3.5 mt-10">
          <img src={Devide} alt="" className="select-none" />
          <img src={Circle} alt="" className="select-none" />
          <img src={Devide} alt="" className="select-none" />
        </div>
        <div className="flex justify-between items-center px-10 mt-10">
          <p className="font-Poppins font-semibold text-[13px] ">Facebook</p>
          <p className="font-Poppins font-semibold text-[13px] ">Twitter</p>
          <p className="font-Poppins font-semibold text-[13px] ">Google</p>
        </div>
        <div className="flex items-center justify-center mt-[4.7rem] space-x-1">
          <p className="font-Poppins font-medium text-[13px] text-[#000]">
            New User?
          </p>
          <Link
            className="font-Poppins font-medium text-[13px] text-[#637A30]"
            to={"/register"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
