import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "../komponen/select";
import Swal from "sweetalert2"; 

const CreateUser = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    name: "",
    email: "",
    jenis_kelamin: "Laki-Laki",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      //kondisi ketika berhasil
      setIsLoading(true);
      const response = await axios.post(
        "https://belajar-react.smkmadinatulquran.sch.id/api/users/create",
        user
      );

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
        title: "Signed in successfully",
      });
      
      return navigate("/user", { replace: true });
    } catch (err) {
      //kondisi ketika error
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-white  h-[37rem] ">
      <div className=" w-[25rem]  flex flex-col items-center bg-[#e8e8e8] rounded-xl py-3 shadow-xl">
        <h1 className="text-xl my-3 font-bold font-mono">Register</h1>
        <form action="" onSubmit={handleSubmit}>
          <Input
            value={user.username}
            placeHolder={"User Name"}
            onChange={handleChange}
            name={"username"}
          />
          <Input
            value={user.name}
            placeHolder={"Name"}
            onChange={handleChange}
            name={"name"}
          />
          <Input
            value={user.email}
            placeHolder={"Email"}
            onChange={handleChange}
            name={"email"}
            type="email"
          />
          <Select
            className="input mx-5 my-2"
            value={user.jenis_kelamin}
            placeHolder={"Jenis Kelamin"}
            onChange={handleChange}
            name={"jenis_kelamin"}
          >
            <option type="none">Pilih Kelamin:</option>
            <option type="male">laki-Laki</option>
            <option type="female">Perempuan</option>
          </Select>
          <Input
            value={user.password}
            placeHolder={"Password"}
            onChange={handleChange}
            name={"password"}
            type="password"
          />
          <Input
            value={user.password_confirmation}
            placeHolder={"Confirm Password"}
            onChange={handleChange}
            name={"password_confirmation"}
            type="password"
          />
          <div className="grid grid-cols-2 gap-5">
            <Button title={isLoading ? "sedang menyimpan" : "simpan"} />
            <Button
              onClick={() => {
                return navigate("/user", { replace: true });
              }}
              title={"Kembali"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
