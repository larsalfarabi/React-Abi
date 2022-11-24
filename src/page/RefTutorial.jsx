import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styles.css";
const RefTutorial = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToTop = (ref) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //* --- latihan input menggunakan useRef ---
  // const inputRef = useRef(null);

  // const onClick = () => {
  //   console.log("Input =>", inputRef.current);
  //   inputRef.current.focus();
  //   inputRef.current.value = "Lars Alfarabi";
  //   inputRef.current.type = "password";
  // };
  return (
    <div ref={topRef}>
      <div className="space-x-5 fixed bg-white w-full">
        <button
          onClick={() => {
            navigate("/useEffectLayout");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            scrollToSection(aboutRef);
          }}
        >
          About
        </button>
        <Link to={"/useReducer"}>to page useReducer</Link>
      </div>
      <div ref={homeRef} className="h-screen w-full bg-red-500 pt-10">
        <h2>Home</h2>
      </div>
      <div ref={aboutRef} className="h-screen w-full bg-blue-500 pt-10">
        <h2>About</h2>
      </div>
      <button
        onClick={() => {
          scrollToTop(topRef);
        }}
        className="fixed bg-green-500 cursor-pointer z-10 bottom-2 right-5"
      >
        Back To Top
      </button>
    </div>

    //*  --- latihan input menggunakan useRef ---
    // <div className="space-y-5 p-5">
    //   <h1 className="text-white">abi</h1>
    //   <div className="inputbox">
    //     <input ref={inputRef} required="required" type="text" />
    //     <span>Username</span>
    //     <i />
    //   </div>

    //   <button onClick={onClick} className="text-white">
    //     Change Name
    //   </button>
    // </div>
  );
};

export default RefTutorial;
