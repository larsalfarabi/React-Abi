// import logo from './logo.svg';

import React from "react";
<<<<<<< HEAD
// import Layout from "./komponen/layout";
import Button from "./komponen/button";
import Input from "./komponen/input";
import "./style/style.css";
import Card from "./komponen/card";
import Select from "./komponen/select";
=======
import "./style/style.css"
>>>>>>> 596655e14b132dfcbbd160c0a962250d3687a74e

export default function App() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    tempat: "",
    date: "",
    kelamin: "",
    password: "",
    confirmPassword: "",
  });

  const [data, setData] = React.useState([]);
  const [errors, setError] = React.useState({});

  const handleBlur = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    }
  };


  const handleReset = (e) =>{
    e.preventDefault()
    console.log('reset');
    
    setValues((values)=>{
      return {
        name: "",
        email: "",
        tempat: "",
        date: "",
        kelamin: "",
        password: "",
        confirmPassword: "",
      }
    })
  }
  const handleChange = (e) => {
    e.preventDefault();
    console.log("ok siap jalan");
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
    if (e.target.value === "") {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    } else {
      setError({
        ...errors,
        [e.target.name]: false,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");

    values.id = new Date().getTime();
    setData((data) => {
      return [...data, values];
    });

    setError((errors)=>{
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
    setValues((values) => {
      return {
        name: "",
        email: "",
        tempat: "",
        date: "",
        kelamin: "",
        password: "",
        confirmPassword: "",
      };
    });
  };

  console.log("error", errors);
  return (
    <React.Fragment>
      <div className="kotak">
        <div className="form" isError={errors?.name} textError={"Form wajib diisi"}>
          <form onSubmit={handleSubmit}>
            <Input
              isError={errors?.name}
              textError={"wajib diisi"}
              name="name"
              value={values.name}
              label={"Username"}
              placeholder={"Username"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Input
              isError={errors?.email}
              textError={"wajib diisi"}
              name="email"
              value={values.email}
              label={"Email"}
              placeholder={"Email"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Input
              isError={errors?.tempat}
              textError={"wajib diisi"}
              name="tempat"
              value={values.tempat}
              label={"Tempat Lahir"}
              placeholder={"Tempat Lahir"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Input
              isError={errors?.date}
              textError={"wajib diisi"}
              name="date"
              type="date"
              value={values.date}
              label={"Tanggal Lahir"}
              placeholder={"Tanggal Lahir"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Select
              isError={errors?.kelamin}
              textError={"wajib diisi"}
              name="kelamin"
              value={values.kelamin}
              label={"Jenis Kelamin"}
              placeholder={"Pilih:"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Input
              isError={errors?.password}
              textError={"wajib diisi"}
              name="password"
              value={values.password}
              label={"Password"}
              placeholder={"Password"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Input
              isError={errors?.confirmPassword}
              textError={"wajib diisi"}
              name="confirmPassword"
              value={values.confirmPassword}
              label={"Konfirmasi Password"}
              placeholder={"Ulangi Password"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Button title={"Reset"} onClick={handleReset}/>{" "}
            <Button title={"Simpan"} color={"blue"}  />{" "}
          </form>{" "}
        </div>
        <div className="data">
          <Card data={data} setData={setData} />
        </div>
      </div>
    </React.Fragment>
  );
}

