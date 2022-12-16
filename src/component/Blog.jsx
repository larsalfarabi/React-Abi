import React from "react";
import blog from "../asset/image/blog.png";
const Blog = () => {
  return (
    <div className="w-full h-full" id="blog">
      <div className="grid grid-rows-2 ">
        {" "}
        <div className="flex justify-center items-center ">
          <p className="text-[40px] judul mr-3 mt-5">Blog </p>
          <img src={blog} alt="" className="w-[40px] mt-5" />{" "}
        </div>
        <div className="w-[120px] h-1 bg-[#0dcaf0] mx-[604.5px] mt-1"></div>
      </div>
      <div className="flex justify-evenly">
        {" "}
        <div className="bg1 rounded-2xl -z-10 justify-center items-center flex ">
          <div className="space-y-8 ">
            {" "}
            <p className="font-semibold text-center text-lg text-white z-10">
              Things to consider before taking an English course
            </p>
            <div className="space-y-4">
              {" "}
              <p className="font-medium px-6 text-[15px] text-white z-10 text-justify">
                Learning to master English is important. One of them is through
                many English language course institutions available. But before
                you intend to learn it, make sure you pay attention to the
                following points:
              </p>
              <div className="px-10">
                {" "}
                <ol className="list-decimal">
                  <li className="font-medium text-sm z-10 text-white">
                    Know How Far You Are
                  </li>
                  <li className="font-medium text-sm z-10 text-white">
                    Consider Location
                  </li>
                  <li className="font-medium text-sm z-10 text-white">
                    Learn to Share Time
                  </li>
                  <li className="font-medium text-sm z-10 text-white">
                    Cost Availability
                  </li>
                  <li className="font-medium text-sm z-10 text-white">
                    Institutional Survey
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="bg2 rounded-2xl -z-10 justify-center items-center flex">
          {" "}
          <div className="space-y-8">
            {" "}
            <p className="font-semibold text-center text-lg text-white z-10">
              The Best English Course For Beginners Lots Of Practice
            </p>{" "}
            <p className="font-medium px-6 text-[15px] text-white z-10 text-justify">
              You are a beginner and want to master English easily and quickly,
              find the best English course for beginners. More practice with a
              fun way of learning. If you are still a beginner, it would be
              better if you look for a class that is really for beginners,
              because this will help you be more confident in learning. As a
              result, your language skills can be better. Where is a good place
              to learn English for beginners?
            </p>
          </div>
        </div>
        <div className="bg3 rounded-2xl -z-10 justify-center items-center flex">
          {" "}
          <div className="space-y-8">
            {" "}
            <p className="font-semibold text-center text-lg text-white z-10">
              How to Choose a Place for English Language Courses for Beginners
            </p>
            <div className="space-y-4">
              {" "}
              <p className="font-medium px-6 text-[15px] text-white z-10 text-justify">
                How to Choose a Kurd Place For those of you who are looking for
                the nearest English course, make sure you first listen to the
                following tips. The goal is that the school you choose is good
                and of good quality.sus English For Beginners
              </p>
              <div className="px-10">
                {" "}
                <ol className="list-decimal">
                  <li className="font-medium text-sm z-10 text-white">
                    Program Availability
                  </li>
                  <li className="font-medium text-sm z-10 text-white">
                    Provides 2 Choice of Course Methods
                  </li>
                  <li className="font-medium text-sm z-10 text-white">
                    Offers Multiple Tiers
                  </li>
                  <li className="font-medium text-sm z-10 text-white">
                    Certified
                  </li>
                  <li className="font-medium text-sm z-10 text-white">
                    Education Cost Survey
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
