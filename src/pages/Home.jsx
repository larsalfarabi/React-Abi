import React from "react";
import Button from "../komponen/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="grid grid-cols-8  gap-4">
        {" "}
        <Button className="col-span-1" title={"Home"} />
        <Button
          className="col-span-1 fle"
          title={"Login"}
          onClick={() => {
            return navigate("/admin", { replace: true });
          }}
        />
      </div>
      <div className=" flex justify-center items-center h-full">
        <p className="bg-gray-400  rounded-lg    px-4 py-3">
          PENILAIAN TENGAH SEMESTER 2022
        </p>
      </div>
    </div>
  );
};

export default Home;
