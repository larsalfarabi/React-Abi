import React, { useState } from "react";
import Button from "../../component/Button";
import Logo from "../../asset/icon/Planty's Logo.svg";
import resetPassword from "../../asset/image/Reset password.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputPassword from "../../component/Input Password";
import { authReset } from "../redux/action/authAction";
import Swal from "sweetalert2";
const ResetPassword = () => {
  const { id, token } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
    passwordBaru: "",
    confirmPassword: "",
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
    try {
      setIsLoading(true);
      const response = await dispatch(authReset(id, token, payload));
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
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
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
        <form action="" onSubmit={handleSubmit}>
          <div className="space-y-[30px] mt-[25%]">
            <InputPassword
              placeHolder="Password"
              value={payload.passwordBaru}
              onChange={handleChange}
              name="passwordBaru"
            />{" "}
            <InputPassword
              placeHolder="Confirm Password"
              value={payload.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
            <Button label={isLoading ? "Proses" : "Submit"} />
          </div>
        </form>
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
