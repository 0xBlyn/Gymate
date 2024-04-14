import TitleBg from "../assets/pricing/titlebg.svg";
import Button from "./Button";

function Hero() {
  return (
    <>
      <section id="home" className="hero-section w-full flex flex-col h-screen">
        <div className="container-hero">
          <div className="flex flex-col text-white absolute hero-text w-[80%] max-w-full lg:w-[72%] lg:-right-[22rem] left-[50%] lg:left-[50%]">
            <p className="text-black text-[16px] uppercase font-medium relative z-10 pl-16 mb-8">find your body</p>
            <img src={TitleBg} alt="text_bg" className=" absolute -top-3 title-white w-[24rem]" />
            <h1 className="font-bold lg:text-[48px] uppercase mb-[4rem] text-[35px]">stronger with <br /><span className="font-thin">fit & perfect</span></h1>
            <Button color={`text-black`} bg={`bg-white`} text="our classes" goTo="/classes" />
          </div>
        </div>
        <div className="flex flex-row-reverse lg:-rotate-90 text-white absolute left-[12%] top-[80%] lg:top-2/4 lg:left-[80%] items-center">
          <p className="uppercase text-4xl lg:text-3xl font-bold tracking-widest">share</p>
          <span className="w-[35px] bg-primary h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
            <i className="fa-brands lg:rotate-90 hover:text-primary fa-facebook text-3xl cursor-pointer ease-in duration-200 "></i>
            <i className="fa-brands lg:rotate-90 hover:text-primary fa-twitter text-3xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands lg:rotate-90 hover:text-primary fa-linkedin-in text-3xl cursor-pointer ease-in duration-200 "></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
