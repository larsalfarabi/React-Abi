import React from "react";
import "../styles/styles.css";
import { FaChevronDown } from "react-icons/fa";
const Feed = () => {
  return (
    <div className="h-1/2" id="home">
      <h1 className="text-[80px] font-semibold text-white">
        learn <span className="text-[#0DCAF0]">English</span> different way
      </h1>
      <p className="text-xl text-center text-white p mt-3">
        Become an English expert with the best method, best mentor and best
        price
      </p>
      <div className="beban mt-10 flex justify-center">
        <a href="#tentang">
          <p
            className="hero__scroll font-semibold text-base"
          >
            Scroll down
            <FaChevronDown className="chevron w-28 text-xl" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Feed;
