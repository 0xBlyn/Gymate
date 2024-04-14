import React from "react";
import Button from "./Button";

function PricingBox({ img, price }) {
  return (
    <div className="flex flex-col w-full md:w-[40rem] bg-white shadow-xl relative min540:w-[100%]">
      <div className="relative grayscale hover:grayscale-0 transition-all duration-300">
        <img src={img} alt="Pricing" className="w-full h-full" />
        <div className="absolute bg-white text-[20px] font-bold w-[25rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto">
          Beginners
        </div>
      </div>
      <div className="flex flex-col items-center pt-[20px] pb-[50px]">
        <p className="text-center text-[55px] font-bold relative py-[10px] ">
          <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">$</span>
          {price}
          <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[6rem]">p/m</span>
        </p>
        <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#646464] ">
          <p>Free Hand</p>
          <p>Gym Fitness</p>
          <p>Weight Loss</p>
          <p>Personal Trainer</p>
          <p>Cycling</p>
        </div>
        <Button color="text-white" bg="bg-[#ff0336]" text="Purchase Now" arrowColor="text-white" cN="pricing-cta" goTo="/contact"/>
      </div>
    </div>
  );
}

export default PricingBox;
