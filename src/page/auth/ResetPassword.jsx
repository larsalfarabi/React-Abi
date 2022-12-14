import React, { useState } from "react";
import { Button, InputPassword } from "../../component";
import Logo from "../../asset/icon/Planty's Logo.svg";
import resetPassword from "../../asset/image/Reset password.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authReset } from "../redux/action/authAction";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [conPasswordError, setConPasswordError] = useState("");
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
      if (payload.passwordBaru === "" || payload.confirmPassword === "") {
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

        return Toast.fire({
          icon: "error",
          title: "Password / konfirmasi password tidak boleh kosong",
        });
      }
      if (payload.confirmPassword !== payload.passwordBaru) {
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

        return Toast.fire({
          icon: "error",
          title: "Password dan konfirmasi password tidak sama",
        });
      }
      if (
        payload.passwordBaru.length < 8 ||
        payload.confirmPassword.length < 8
      ) {
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

        return Toast.fire({
          icon: "error",
          title: "Password kurang dari 8 huruf",
        });
      }
      if (
        payload.passwordBaru.length > 8 &&
        payload.confirmPassword.length > 8 &&
        payload.confirmPassword === payload.passwordBaru &&
        payload.passwordBaru !== "" &&
        payload.confirmPassword !== ""
      ) {
        const response = await dispatch(authReset(id, token, payload));
        console.log("responseResetPassword =>", response);
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
          return navigate("/login", { replace: true });
        }
      }

      const response = await dispatch(authReset(id, token, payload));
      console.log("response =>", response);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

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
            <div>
              {" "}
              <InputPassword
                placeHolder="Password"
                value={payload.passwordBaru}
                onChange={handleChange}
                name="passwordBaru"
              />{" "}
              <p className="font-Poppins text-xs text-red-400 italic mt-1 px-3.5">
                {passwordError}
              </p>
            </div>
            <div>
              {" "}
              <InputPassword
                placeHolder="Confirm Password"
                value={payload.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
              />{" "}
              <p className="font-Poppins text-xs text-red-400 italic mt-1 px-3.5">
                {conPasswordError}
              </p>
            </div>
            <Button label={isLoading ? "Proses" : "Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
