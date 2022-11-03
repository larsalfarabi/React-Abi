import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/button";
import Input from "../../komponen/input";

import { authLogin } from "../redux/action/authAction";
import { useDispatch } from "react-redux";

const Login = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const [messageError, setMessageError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await dispatch(authLogin(payload));
      console.log("response", response);
      // return navigate("/article", { replace: true });
      if (response?.status === "Success") {
        return navigate("/article", { replace: true });
      } else {
        setMessageError(
          response?.response?.data?.message
        );
      }
    } catch (err) {
      console.log("error =>", err);
    } finally {
      setIsLoading(false);
    }

    setPayload(() => {
      return {
        email: "",
        password: "",
      };
    });
  };
  return (
    <div className="mt-5 flex flex-col justify-center items-center ">
      <p>{}</p>
      <h1>login page</h1>
      <p className="text-red-300 bg-red-500 p-1 rounded-md">{messageError}</p>
      <div className="bg-gray-300  relative  before:absolute before:z-[-1] before:top-2 before:left-2 before:w-full before:h-full before:bg-gray-400 before:rounded-md w-[25rem] px-5 py-5 rounded-lg mt-5 ">
        <form action="" onSubmit={handleSubmit}>
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
          <div className="grid grid-cols-2 gap-5 mt-2">
            <Button title={isLoading ? "Proses" : "login"} />
            <Button
              onClick={() => {
                return navigate("/register", { replace: true });
              }}
              title={"Register"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
