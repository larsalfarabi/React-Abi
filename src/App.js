// import logo from './logo.svg';

import React from "react";
import Button from "./module/button";
import { Input, TextArea } from "./module/input";
import Card from "./module/card";
import "./style/style.css";

export default function App() {
  const [values, setValues] = React.useState({
    judul: "",
    catatan: "",
  });
  const [data, setData] = React.useState([]);
  const [errors, setError] = React.useState({});
  const [form, setForm] = React.useState("")
  const handleForm = (e) => {
    e.preventDefault();
    if(values.judul === ""){
      e.preventDefault();
      alert("there's empty form");
      setForm("Form is empty")
    }
    else if(values.catatan === ""){
      e.preventDefault();
      alert("There's Empty Form");
      setForm("Form is empty")
    }
    else if(values.judul !== ""){
      values.id = new Date().getTime();
      setError({
        ...errors,
        [e.target.name]: e.target.value ,
      });
      setData((data) => {
        return [...data, values];
      });
      setValues((values) => {
        return {
          judul: "",
          catatan: "",
        };
      });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");

    values.id = new Date().getTime();
    setData((data) => {
      return [...data, values];
    });
    setValues((values) => {
      return {
        judul: "",
        catatan: "",
      };
    });
  };
  const handleBlur = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    }else {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    }
  };
  const handleChange = (e) => {
    if(values.judul === ""){
      e.preventDefault();
      setForm("")
    }
    else if(values.catatan === ""){
      e.preventDefault();
      setForm("")
    }
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };


  return (
    <React.Fragment>
      <div className="flex">
        <div>
          <h1>Buat Catatan</h1>
          <form onSubmit={handleSubmit} isError={errors?.form}>
            <p className="error">{form}</p>
            <Input
              isError={errors?.judul}
              textError={"wajib diisi"}
              name="judul"
              value={values.judul}
              placeholder="Judul"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextArea
              isError={errors?.catatan  }
              textError={"wajib diisi"}
              name="catatan"
              value={values.catatan}
              type="textArea"
              placeholder="Catatan"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button title={"Simpan"} onClick={handleForm} />
          </form>
        </div>
        <div>
          {" "}
          <Card 
            data={data}
            setData={setData}
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
