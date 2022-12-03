import { useState } from "react";
import "../../styles/styles.css";
import Logo from "../../asset/icon/Planty's Logo.svg";
import Input from "../../component/Input";
import Profile from "../../asset/icon/Profile.svg";
import Radio from "../../component/Radio";
import Button from "../../component/Button";
import Email from "../../asset/icon/Message.svg";
import signUp from "../../asset/image/signUp.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputPassword from "../../component/Input Password";
import { authRegister } from "../redux/action/authAction";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [jenisError, setJenisError] = useState("");
  const [statusError, setStatusError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conPasswordError, setConPasswordError] = useState("");
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    jenisKelamin: "",
    password: "",
    confirmPassword: "",
    status: "",
  });

  const handleChange = (e) => {
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
      const response = await dispatch(authRegister(payload));
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
          title: "Sign up in successfully",
        });
        return navigate("/login", { replace: true });
      } else {
        setEmailError(response?.response?.data?.errors?.email?.msg);
        setNameError(response?.response?.data?.errors?.name?.msg);
        setJenisError(response?.response?.data?.errors?.jenisKelamin?.msg);
        setStatusError(response?.response?.data?.errors?.status?.msg);
        setPasswordError(response?.response?.data?.errors?.password?.msg);
        if (payload.password === payload.confirmPassword) {
          setConPasswordError("Password harus sama");
        }
        if (payload.confirmPassword === "") {
          setConPasswordError("confirmasi Password harus diisi");
        }
      }
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
    setPayload(() => {
      return {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        status: "",
        jenisKelamin: "",
      };
    });
  };
  return (
    <div className="bg w-screen h-screen p-4">
      <div className="bg-white w-[35%] h-full rounded-3xl p-4 relative">
        <img
          src={signUp}
          alt=""
          className="absolute -right-[38px] top-[30%] w-[75px] select-none"
        />
        <img src={Logo} alt="" className="select-none" />
        <form action="" onSubmit={handleSubmit}>
          <div className="space-y-[30px] mt-8 mb-4">
            <div className="grid grid-cols-2">
              {" "}
              <div>
                {" "}
                <Input
                  placeHolder={"Full Name"}
                  value={payload.name}
                  onChange={handleChange}
                  name="name"
                  icon={Profile}
                />
                <p className="font-Poppins text-xs text-red-400 italic mt-1 px-3.5">
                  {nameError}
                </p>
              </div>
              <div>
                {" "}
                <Input
                  placeHolder={"Email"}
                  value={payload.email}
                  onChange={handleChange}
                  name="email"
                  icon={Email}
                />
                <p className="font-Poppins text-xs text-red-400 italic mt-1 px-3.5">
                  {emailError}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                {" "}
                <Radio
                  value={payload.jenisKelamin}
                  onChange={handleChange}
                  name="jenisKelamin"
                >
                  <option value="none">Pilih Kelamin</option>
                  <option value="laki-laki">Laki-Laki</option>
                  <option value="perempuan">Perempuan</option>
                </Radio>
                <p className="font-Poppins text-xs text-red-400 italic mt-1 px-3.5">
                  {jenisError}
                </p>
              </div>
              <div>
                {" "}
                <Radio
                  value={payload.status}
                  onChange={handleChange}
                  name="status"
                >
                  <option value="none">Pilih status:</option>
                  <option value="active">Active</option>
                  <option value="nonactive">Non-Active</option>
                </Radio>
                <p className="font-Poppins text-xs text-red-400 italic mt-1 px-3.5">
                  {statusError}
                </p>
              </div>
            </div>
            <div>
              {" "}
              <InputPassword
                placeHolder="Password"
                value={payload.password}
                onChange={handleChange}
                name="password"
              />
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
              />
              <p className="font-Poppins text-xs text-red-400 italic mt-1 px-3.5">
                {conPasswordError}
              </p>
            </div>
          </div>
          <Button label={isLoading ? "Proses" : "Sign Up"} />
        </form>
        <div className="flex items-center justify-center mt-5 space-x-1">
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
