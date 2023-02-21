import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Button from "../../komponen/button";
import Input from "../../komponen/input";

const CreateOutlet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
    },
    validationSchema: Yup.object().shape({
      phone: Yup.string()
        .matches(/^\+?\d{10,14}$/, "Phone number must be a valid format")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      <div className="bg-white w-[23em] px-[2.3rem] py-[2rem] rounded-md">
        <form action="" onSubmit={formik.handleSubmit}>
          <Input
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            placeholder="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            placeholder="Phone Number"
            name="phone"
            type="tel"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.phone && formik.touched.phone}
            textError={formik.errors.phone}
          />
          <Button title={isLoading ? "Proses" : "Submit"} />
        </form>
      </div>
    </div>
  );
};

export default CreateOutlet;
