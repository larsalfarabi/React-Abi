import React from "react";
import { Link } from "react-router-dom";
import Button from "../komponen/button";
import { categories } from "../utils/constant";
const Home = () => {
  return (
    <div className="grid grid-cols-6 py-5 ">
      <div className="flex-col flex items-center ">
        {" "}
        <img src="" alt="logo" />{" "}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XHbhDY5ZwNVcHm8z3sdNy_CU3HzTgrdIOw&usqp=CAU"
          alt=""
          className="rounded-full w-20"
        />
        <h1 className="font-semibold">Daniel Kevin</h1>
        <p className="text-gray-500 text-sm">danielKevin@gmail.com</p>
        {categories?.map((categories) => (
          <Link to={categories.element}>
            <button className="button2">
              <span>{categories.icon}</span>
              <span>{categories.name}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
