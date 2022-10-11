import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/button";
import Cookies from "js-cookie";
import Input from "../../komponen/input";
import { loginProses } from "../../API/auth";
const Login = () => {
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
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await loginProses(payload);
      const data = response.data;
      Cookies.set("myapps_token", data?.token);

      return navigate("/article", { replace: true });
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
      <h1>login page</h1>
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
          <div className="grid grid-cols-2 gap-5">
            <Button title={"login"} />
            <Button
              // onClick={() => {
              //   Cookies.set("myapps_token");
              //   return navigate("/user", { replace: true });
              // }}
              title={"Register"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
