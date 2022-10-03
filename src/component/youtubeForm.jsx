import React from "react";
// eslint-disable-next-line no-unused-vars
import { Formik, useFormik } from "formik";
import "../styles/styles.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "harus diisi";
  }
  if (!values.email) {
    errors.email = "harus diisi";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "invalid email format";
  }
  if (!values.channel) {
    errors.channel = "harus diisi";
  }
  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("form errors", formik.errors);
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-red-300"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="text-red-500 italic font-mono">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="text-red-500 italic font-mono">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? (
            <div className="text-red-500 italic font-mono">
              {formik.errors.channel}
            </div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
