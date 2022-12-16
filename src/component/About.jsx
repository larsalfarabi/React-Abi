import React from "react";
import apa from "../asset/image/about.svg"
const About = () => {
  return (
    <div className="w-full h-[70%] mt-[12%] bg-[#E2EDFF]">
      <div className="grid grid-rows-2 ">
        {" "}
        <div className="flex justify-center items-center w-full">
          <p className="text-[40px] judul mr-3 mt-5">About </p>
          <img src={apa} alt="" className="w-[40px] mt-5" />
        </div>
        <div className="w-[120px] h-1 bg-[#0dcaf0] mx-[604.5px] mt-1"></div>
      </div>
      <div className="grid grid-cols-2 px-24">
        {" "}
        <div className="space-y-5 ">
          <h1 className="font-semibold text-center text-lg ">Vision</h1>
          <ul className="list-disc ">
            <li>
              To become the leading academic-based English training center in
              Indonesia
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          {" "}
          <h1 className="font-semibold text-center text-lg ">Mision</h1>
          <ul className="list-disc">
            <li>
              Creating a comfortable and fun academic English learning
              environment.
              <li>
                Organizing an effective and efficient teaching and learning
                process according to the needs of learning{" "}
              </li>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-16 ">
        <p className="text-center">
          © Copyright{" "}
          <span className="text-[#0DCAF0] font-semibold">Insight Course</span>.
          All Right Reserved. <br /> Created & Desain with{" "}
          <span className="text-[#0DCAF0] font-semibold">React JS</span> by{" "}
          <span className="text-[#0DCAF0] font-semibold">@Kelompok 2</span>
        </p>
      </div>
    </div>
  );
};

export default About;
