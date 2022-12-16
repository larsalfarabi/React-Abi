import React from "react";
import NavBar from "../NavBar";
import Feed from "../feed";
import About from "../About";
import OurPrograms from "../OurPrograms";
import Blog from "../Blog";

const Home = () => {
  return (
    <div className="h-screen w-screen image -z-0 ">
      <NavBar />
      <div className="flex justify-center mt-20 h-[75.9%]">
        {" "}
        <Feed />
      </div>
      <div className="bg-[#0DCAF0] h-1/3 flex justify-center items-center">
        <p className="text-6xl text-white font-bold">We have what you need!</p>
      </div>
      <OurPrograms />
      <Blog />
      {/* <About /> */}
    </div>
  );
};

export default Home;
