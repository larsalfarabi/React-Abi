import React from "react";
import NavBar from "../NavBar";
import Feed from "../feed";

const Home = () => {
  return (
    <div className="h-screen w-screen px-4 py-3">
      <NavBar />

      <Feed />
    </div>
  );
};

export default Home;
