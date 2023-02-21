import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { authLogin } from "../redux/action/authAction";
import { useDispatch } from "react-redux";
import PasswordInput from "../../komponen/inputPassword";
import Sosmed from "../../komponen/sosmed";
import Select from "../../komponen/select";

const Login = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  // const [payload, setPayload] = React.useState({
  //   email: "",
  //   password: "",
  // });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      role: Yup.string().required("Role is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
      return navigate("/outlet/createOutlet", { replace: true });
    },
  });
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setPayload((payload) => {
  //     return {
  //       ...payload,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };
  const [isLoading, setIsLoading] = React.useState(false);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setIsLoading(true);
  //     const response = await dispatch(authLogin(payload));
  //     console.log("response", response);
  //     // return navigate("/article", { replace: true });
  //     if (response?.status === "Success") {
  //       return navigate("/article", { replace: true });
  //     } else {
  //       setErrorEmail(response?.response?.data?.errors?.email);
  //       setErrorPassword(response?.response?.data?.errors?.password);
  //       setMessageError(response?.response?.data?.message);
  //     }
  //   } catch (err) {
  //     console.log("error =>", err);
  //   } finally {
  //     setIsLoading(false);
  //   }

  //   setPayload(() => {
  //     return {
  //       email: "",
  //       password: "",
  //     };
  //   });
  // };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white relative before:absolute before:z-[-1] before:top-2 before:left-2 before:w-full before:h-full before:bg-gray-400 before:rounded-md w-[26rem] px-[2rem] py-[2.3rem]  rounded-[1.5rem]  ">
        <div className="text-center px-9">
          {" "}
          <h1 className="font-semibold text-2xl">Login</h1>
          <p className="my-4 text-[15px] font-medium">
            Hey, Enter your details to get sing In to your account
          </p>
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <Input
            value={formik.values.email}
            placeholder={"Enter Email"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            name={"email"}
            isError={formik.touched.email && formik.errors.email}
            textError={formik.errors.email}
          />
          <PasswordInput
            value={formik.values.password}
            placeholder={"Passcode"}
            name={"password"}
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isError={formik.touched.password && formik.errors.password}
            textError={formik.errors.password}
          />
          <Select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            isError={formik.errors.role && formik.touched.role}
            textError={formik.errors.role}
          >
            <option value="">Select an option</option>
            <option value="admin">Admin</option>
            <option value="kasir">Kasir</option>
            <option value="owner">Owner</option>
          </Select>
          <div className="grid grid-cols-1 gap-5 mt-5">
            <Button title={isLoading ? "Proses" : "Sign in"} />
          </div>
        </form>
        <p className="text-sm text-center font-medium my-5">
          - or sign in with -
        </p>
        <div className="grid grid-cols-3 gap-1 my-5">
          <Sosmed title={"Google"} />
          <Sosmed title={"Apple ID"} />
          <Sosmed title={"Facebook"} />
        </div>
        <p className="text-[13px] text-center">
          Don't have an account?{" "}
          <span
            className="font-semibold text-[13px] cursor-pointer"
            onClick={() => {
              return navigate("/register", { replace: true });
            }}
          >
            Request Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
