import React, { useState } from "react";
import "../../styles/styles.css";
import Logo from "../../asset/icon/Planty's Logo.svg";
import Input from "../../component/Input";
import Button from "../../component/Button";
import Email from "../../asset/icon/Message.svg";
import forgotPassword from "../../asset/image/forgot password.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { authForgot } from "../redux/action/authAction";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
  });
  const handleChange = (e) => {
    console.log("Berjalan");
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("jalan");
    try {
      setIsLoading(true);
      const response = await dispatch(authForgot(payload));
      console.log("response =>", response);
      if (response?.status === "Success") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response?.msg,
        });
        return;
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: response?.response?.data?.msg,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
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
        <form action="" onSubmit={handleSubmit}>
          <div className="space-y-[20%] mt-[25%]">
            <Input
              placeHolder={"Email"}
              icon={Email}
              name="email"
              value={payload.email}
              onChange={handleChange}
            />
            <Button label={isLoading ? "Proses" : "Submit"} />
          </div>
        </form>
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
