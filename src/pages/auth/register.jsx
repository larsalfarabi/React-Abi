import React from "react";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "../redux/action/authAction";
import '../../../src/styles/styles.css'

const Register = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [messageError, setMessageError] = React.useState("");
  const [payload, setPayload] = React.useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
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
      const response = await dispatch(authRegister(payload));
      console.log("response", response);
      if (payload.email === "") {
        setMessageError(response?.response?.data?.errors?.email);
      }
      if (payload.name === "") {
        setMessageError(response?.response?.data?.errors?.name);
      }
      if (payload.password === "") {
        setMessageError(response?.response?.data?.errors?.password);
      }
        if (payload.password_confirmation === "") {
          setMessageError(response?.response?.data?.errors?.password);
        }

      if (payload.password !== payload.password_confirmation) {
        setMessageError(response?.response?.data?.errors?.password);
      }
      if (response?.status === "Success") {
        return navigate("/article", { replace: true });
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <div>
      <div className="mt-5 flex flex-col justify-center items-center ">
        <p>{}</p>
        <h1>Register page</h1>
        <p className="text-red-300 bg-red-500 p-1 rounded-md  ">
          {messageError}
        </p>
        <div className="bg-gray-300  relative  before:absolute before:z-[-1] before:top-2 before:left-2 before:w-full before:h-full before:bg-gray-400 before:rounded-md w-[25rem] px-5 py-5 rounded-lg mt-5 ">
          <form onSubmit={handleSubmit}>
            <Input
              value={payload.name}
              placeholder={"name"}
              onChange={handleChange}
              type="text"
              name={"name"}
            />
            <Input
              value={payload.email}
              placeholder={"Email"}
              onChange={handleChange}
              type="email"
              name={"email"}
            />
            <Input
              value={payload.password}
              placeholder={"Password"}
              name={"password"}
              type="password"
              onChange={handleChange}
            />
            <Input
              value={payload.password_confirmation}
              placeholder={"Confirm Password"}
              name={"password_confirmation"}
              type="password"
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-5 mt-2">
              <Button
                title={"login"}
                onClick={() => {
                  return navigate("/login", { replace: true });
                }}
              />
              <Button
                title={isLoading ? <div class="line-wobble"></div> : "register"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
