import { useState } from "react";
import "../styles/styles.css";
import Logo from "../asset/icon/Planty's Logo.svg";
import Input from "../component/Input";
import Profile from "../asset/icon/Profile.svg";
import Radio from "../component/Radio";
import Button from "../component/Button";
import Email from "../asset/icon/Message.svg";
import signUp from "../asset/image/signUp.png";
import { Link } from "react-router-dom";
import InputPassword from "../component/Input Password";

const Register = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    status: "",
    jenisKelamin: "",
  });

  const handleSubmit = () => {};
  return (
    <div className="bg w-screen h-screen p-4">
      <div className="bg-white w-[35%] h-full rounded-3xl p-4 relative">
        <img
          src={signUp}
          alt=""
          className="absolute -right-[38px] top-[30%] w-[75px] select-none"
        />
        <img src={Logo} alt="" className="select-none" />
        <div className="space-y-[25px] mt-10 mb-8">
          <Input
            placeHolder={"Full Name"}
            value={payload.name}
            name="name"
            icon={Profile}
          />
          <Input
            placeHolder={"Email"}
            name="email"
            value={payload.email}
            icon={Email}
          />
          <Radio value={payload.jenisKelamin} name="jenisKelamin" />
          <InputPassword
            placeHolder="Password"
            value={payload.password}
            name="password"
          />
          <InputPassword
            placeHolder="Confirm Password"
            value={payload.password}
            name="confirmPassword"
          />
        </div>
        <Button label={"Sign Up"} />
        <div className="flex items-center justify-center mt-8 space-x-1">
          <p className="font-Poppins font-medium text-[13px] text-[#000]">
            Already an account?
          </p>
          <Link
            className="font-Poppins font-medium text-[13px] text-[#637A30]"
            to={"/login"}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
