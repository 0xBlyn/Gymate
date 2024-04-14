import React from "react";
import { Link } from "react-router-dom";

function Sunday() {
  return (
    <>
      <div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
        <Link to="/schedule/monday" className="text-[12px] lg:text-[15px] font-bold border-solid border border-border py-[9px] px-[10px] lg:px-[32px] rounded-[23px] hover:bg-primary ease-in duration-200 hover:shadow-2xl hover:text-white">Monday</Link>
        <Link to="/schedule/tuesday" className="text-[12px] lg:text-[15px] font-bold border-solid border border-border py-[9px] px-[10px] lg:px-[32px] rounded-[23px] hover:bg-primary ease-in duration-200 hover:shadow-2xl hover:text-white">Tuesday</Link>
        <Link to="/schedule/wednesday" className="text-[12px] lg:text-[15px] font-bold border-solid border border-border py-[9px] px-[10px] lg:px-[32px] rounded-[23px] hover:bg-primary ease-in duration-200 hover:shadow-2xl hover:text-white">Wednesday</Link>
        <Link to="/schedule/thursday" className="text-[12px] lg:text-[15px] font-bold border-solid border border-border py-[9px] px-[10px] lg:px-[32px] rounded-[23px] hover:bg-primary ease-in duration-200 hover:shadow-2xl hover:text-white">Thursday</Link>
        <Link to="/schedule/friday" className="text-[12px] lg:text-[15px] font-bold border-solid border border-border py-[9px] px-[10px] lg:px-[32px] rounded-[23px] bg-primary ease-in duration-200 hover:shadow-2xl text-white">Friday</Link>
        <Link to="/schedule/saturday" className="text-[12px] lg:text-[15px] font-bold border-solid border border-border py-[9px] px-[10px] lg:px-[32px] rounded-[23px] hover:bg-primary ease-in duration-200 hover:shadow-2xl hover:text-white">Saturday</Link>
        <Link to="/schedule/sunday" className="text-[12px] lg:text-[15px] font-bold border-solid border border-border py-[9px] px-[10px] lg:px-[32px] rounded-[23px] hover:bg-primary ease-in duration-200 hover:shadow-2xl hover:text-white">Sunday</Link>
      </div>

      <div className="mt-[5rem]">
        <div className="flex flex-col gap-3">
          <ul className="flex justify-between w-full flex-col lg:flex-row text-center lg:text-left">
            <li className="class-info py-[5%] lg:py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
              <p className="text-[18px] text-black font-bold mt-3">Crossfit</p>
            </li>
            <li className="class-info py-[3%] lg:py-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">9:00am - 10:00am</p>
            </li>
            <li className="class-info py-[3%] lg:py-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">Alicia Keys</p>
            </li>
            <li className=" py-[3%] lg:py-[25px] px-[55px] bg-[#f2f2f2] w-full lg:text-right text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-primary ease-in duration-200">Join Now</button>
            </li>
          </ul>

          <ul className="flex justify-between w-full lg:flex-row lg:text-left flex-col text-center pt-[5%] lg:pt-0">
            <li className="class-info py-[5%] lg:py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
              <p className="text-[18px] text-black font-bold mt-3">Karate</p>
            </li>
            <li className="class-info py-[3%] lg:py-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">10:00pm - 11:00pm</p>
            </li>
            <li className="class-info py-[3%] lg:py-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">Derek Esee</p>
            </li>
            <li className=" py-[3%] lg:py-[25px] px-[55px] bg-[#f2f2f2] w-full lg:text-right text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-primary ease-in duration-200">Join Now</button>
            </li>
          </ul>

          <ul className="flex justify-between w-full lg:flex-row flex-col text-center lg:text-left pt-[5%] lg:pt-0">
            <li className="class-info py-[5%] lg:py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
              <p className="text-[18px] text-black font-bold mt-3">Meditation</p>
            </li>
            <li className="class-info py-[3%] lg:py-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">4:00pm - 5:00pm</p>
            </li>
            <li className="class-info py-[3%] lg:py-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">P'Faye</p>
            </li>
            <li className=" py-[3%] lg:py-[25px] px-[55px] bg-[#f2f2f2] w-full lg:text-right text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-primary ease-in duration-200">Join Now</button>
            </li>
          </ul>

          <ul className="flex justify-between w-full lg:flex-row flex-col text-center lg:text-left pt-[5%] lg:pt-0">
            <li className="class-info py-[5%] lg:py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
              <p className="text-[18px] text-black font-bold mt-3">Yoga</p>
            </li>
            <li className="class-info py-[3%] lg:py-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">6:00pm - 7:00pm</p>
            </li>
            <li className="class-info py-[3%] lg:py-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Workout</p>
              <p className="text-[18px] text-black font-bold mt-3">Jesse Stone</p>
            </li>
            <li className=" py-[3%] lg:py-[25px] px-[55px] bg-[#f2f2f2] w-full lg:text-right text-center">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-primary ease-in duration-200">Join Now</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sunday;
