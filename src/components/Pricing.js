import React from "react";
import TitleRed from "../assets/who-we-are/title-bg.svg";
import BgText from "../assets/pricing/bg-text.png";
import dumbell from "../assets/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";
import Img1 from "../assets/pexels-mister-mister-3490348.jpg";
import Img2 from "../assets/pexels-binyamin-mellish-116078.jpg";
import Img3 from "../assets/pexels-andrea-piacquadio-868483.jpg";

function Pricing() {
  return (
    <section id="pricing" className="pricing-section relative">
      <div className="container page-padding py-[5rem]">
        <img src={BgText} className="absolute left-0" alt="Background Text" />
        <div className="flex flex-col text-center relative items-center">
          <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
            PRICING CHART
          </p>
          <img
            src={TitleRed}
            alt="Title Background"
            className="absolute w-[23rem] -top-[10px]"
          />
          <h2 className="text-[24px] lg:text-[3.4rem] font-bold mb-2">Exclusive Pricing Plan</h2>
          <p className="text-[#646464] font-medium text-[13px] max-w-[90%] lg:text-[15px] lg:max-w-[45%]">
            Affordable deals and plans to suit your needs. Pick a plan and start right away.
          </p>
        </div>
        <img src={dumbell} alt="illustration" className="absolute right-0 bottom-0 -z-1" />
        <div className="flex gap-10 mt-20 flex-col lg:flex-row items-center">
          <PricingBox img={Img1} price="39" />
          <PricingBox img={Img2} price="65" />
          <PricingBox img={Img3} price="100" />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
