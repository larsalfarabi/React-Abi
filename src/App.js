// import logo from './logo.svg';

import React from "react";
import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from "./komponen/input";
import "./style/style.css";

export default function App() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log("ok siap jalan");
    setValues((values)=>{
        return{
            ...values,
            [e.target.name]: e.target.value
        }
    })
  };
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <form>
            <Input
              name="name"
              value={values.name}
              label={"Username"}
              placeholder={"Username"}
              onChange={(event) => {
                event.preventDefault();
                console.log("ok jalan");
                setValues((values) => {
                  return {
                    ...values,
                    name: event.target.value,
                  };
                });
              }}
            />{" "}
            <Input
              name="email"
              value={values.email}
              label={"Email"}
              placeholder={"Email"}
              onChange={handleChange}
            />{" "}
            <Input
              name="password"
              value={values.password}
              label={"Password"}
              placeholder={"Password"}
              onChange={handleChange}
            />{" "}
            <Input
              name="confirmPassword"
              value={values.confirmPassword}
              label={"Konfirmasi Password"}
              placeholder={"Ulangi Password"}
              onChange={handleChange}
            />{" "}
            <Button title={"Simpan"} />{" "}
          </form>{" "}
        </div>
        <div>
          <p>Username: {values?.name}</p>
          <p>Email: {values?.email}</p>
          <p>Password: {values?.password}</p>
          <p>Konfirmasi Password: {values?.confirmPassword} </p>
        </div>
      </div>
    </React.Fragment>
  );
}

// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   };
//   const handleResets = () => {
//     setCount(0);
//   };

//   return (
//     <React.Fragment>
//       <h1>Count = {count}</h1>
//       <Button onClick={handleTambah} title="Tambah" color="blue" />
//       <Button
//         disabled={count <= 0 ? true : false}
//         onClick={handleKurang}
//         title="Kurang"
//         color="blue"
//       />
//       <Button
//         disabled={count === 0 ? true : false}
//         onClick={handleResets}
//         title="Resets"
//       />
//     </React.Fragment>
//   );
// }

// export default App;
