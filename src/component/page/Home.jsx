import React from "react";
import NavBar from "../NavBar";
import Feed from "../feed";
import About from "../About";

const Home = () => {
  return (
    <div className="h-screen w-screen px-4 py-3">
      <NavBar />
      <Feed />
      <About />
    </div>
  );
};

export default Home;
