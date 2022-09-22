import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Select from "../komponen/select";

const UpdateUser = () => {
  let { id } = useParams();
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

  React.useEffect(() => {
    getDetailUser(id);
  }, []);

  const getDetailUser = async () => {
    try {
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/detail/${id}`
      );
        console.log("response =>", response.data);
        const dataUser = response.data.data;
        setUser(() => {
            return {
              username: dataUser.username,
              name: dataUser.name,
              email: dataUser.email,
              jenis_kelamin: dataUser.jenis_kelamin,
            };
        })
    } catch (err) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      //   kondisi ketika berhasil
      setIsLoading(true);
          const response = await axios.put(
            `https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${id}`,
            user
          );
        setIsLoading(false);
      return navigate("/user", { replace: true });
    } catch (err) {
      //kondisi ketika error
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-white  h-[37rem] ">
      <div className=" w-[25rem]  flex flex-col items-center bg-[#e8e8e8] rounded-xl py-3 shadow-xl">
        <h1 className="text-xl my-3 font-bold font-mono">Update User {id}</h1>
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

          <div className="grid grid-cols-2 gap-5">
            <Button title={isLoading ? "Sedang Perbarui" : "Perbarui"} />
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

export default UpdateUser;
