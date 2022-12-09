import React from "react";

const Blog = () => {
  return (
    <div className="w-full h-full">
      <p>Blog</p>
      <div className="flex justify-evenly">
        {" "}
        <div className="bg1 rounded-2xl">
          <p>Things to consider before taking an English course</p>
        </div>
        <div className="bg2 rounded-2xl"></div>
        <div className="bg3 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Blog;
