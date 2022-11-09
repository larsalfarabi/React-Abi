import React from "react";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "../redux/action/authAction";
import "../../../src/styles/styles.css";

const Register = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [messageError, setMessageError] = React.useState("");
  const [errorName, setErrorName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = React.useState("");
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
      setIsLoading(true);
      const response = await dispatch(authRegister(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        return navigate("/article", { replace: true });
      } else {
        setErrorName(response?.response?.data?.errors?.name);
        setErrorEmail(response?.response?.data?.errors?.email);
        setErrorPassword(response?.response?.data?.errors?.password);
        setErrorConfirmPassword(
          response?.response?.data?.errors?.password_confirmation
        );
        setMessageError(response?.response?.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mt-5 flex flex-col justify-center items-center ">
        <h1>Register page</h1>
        <div className="text-red-300 bg-red-500 p-1 rounded-md flex flex-col">
          <p>{messageError}</p>
          <p>{errorName}</p>
          <p>{errorEmail}</p>
          <p>{errorPassword}</p>
          <p>{errorConfirmPassword}</p>
        </div>
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
