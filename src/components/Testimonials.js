import TestimonialImg from "../assets/testimonials/testimonial-new.jpg";
import TitleBg from "../assets/pricing/titlebg.svg";
import TestimonialBoxes from "./TestimonialBoxes";
import Logo1 from "../assets/testimonials/logo1.png";
import Logo2 from "../assets/testimonials/logo2.png";
import Logo3 from "../assets/testimonials/logo3.png";
import Logo4 from "../assets/testimonials/logo4.png";
import Logo5 from "../assets/testimonials/logo5.png";

function Testimonials() {
  return (
    <>
      <section className="my-[5rem] mx-auto">
        <div className="container page-padding">
          <div className="text-center relative items-center w-full flex flex-col">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img alt="title_img" src={TitleBg} className="w-[21rem] absolute -top-[6px]" />
            <h2 className="text-[24px] lg:text-[3.4rem] font-bold mb-2 mt-[12rem]">What Members Say</h2>
            <p className="text-[#646464] font-medium text-[13px] max-w-[90%] lg:text-[15px] lg:max-w-[45%]">
              This section features the testimonies of our members and how we have helped them to achieve their goals.
            </p>
          </div>
          <div className="border-lightbg lg:mt-[8rem] mt-[3rem] bg-white border-solid border-[9px] p-[30px] h-[42rem] lg:h-[41rem]">
            <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
              <img alt="girl_img" src={TestimonialImg} className="absolute bottom-0 -left-10 z-20 h-[46rem] rounded-tr-[200px] hidden lg:flex" />
              <div className="flex">
                <TestimonialBoxes />
              </div>
              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px]">
                <button title="left" style={{ transition: "all 0.2s" }} className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button title="right" style={{ transition: "all 0.2s" }} className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 justify-center mt-24 border-b border-solid border-[#64646438] pb-20 flex-wrap">
          <img src={Logo1} alt="logo" className="scale-[.8] hover:invert" style={{ transition: "all 0.3s" }} />
          <img src={Logo2} alt="logo" className="scale-[.8] hover:invert" style={{ transition: "all 0.3s" }} />
          <img src={Logo3} alt="logo" className="scale-[.8] hover:invert" style={{ transition: "all 0.3s" }} />
          <img src={Logo4} alt="logo" className="scale-[.8] hover:invert" style={{ transition: "all 0.3s" }} />
          <img src={Logo5} alt="logo" className="scale-[.8] hover:invert" style={{ transition: "all 0.3s" }} />
        </div>
      </section>
    </>
  );
}

export default Testimonials;
