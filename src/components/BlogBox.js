import React from "react";
import { Link } from "react-router-dom";

function BlogBox({ date, title, description }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="lg:w-[37rem] w-full md:mx-[10rem] lg:mx-0 shadow-xl flex flex-col px-[3rem] py-[6%] lg:py-[3%] relative h-[35rem]">
      <p className="text-[15px] font-bold text-[#323232] border-[#323232] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-4">
        {date}
      </p>
      <h3 className="text-[22px] font-bold py-3">{title}</h3>
      <p className="text-[15px] text-[#646464] font-medium">{description}</p>
      <div className="mt-auto">
        <Link
          to="/blog"
          onClick={scrollToTop}
          className="text-[15px] uppercase font-bold w-[16rem] h-[5rem] bg-[#FF0336] text-white text-center flex items-center justify-center"
        >
          Read more <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
}

export default BlogBox;


