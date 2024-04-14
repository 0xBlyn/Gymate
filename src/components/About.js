import AboutCarts from "./AboutCarts";
import TitleRed from "../assets/who-we-are/title-bg.svg";
import TrainersIcon from "../assets/who-we-are/weightlifter.png";
import ModernIcon from "../assets/who-we-are/equpments.png";
import LiftIcon from "../assets/who-we-are/gym.png";
import GirlRunning from "../assets/who-we-are/girl-run.png";
import GirlRedBg from "../assets/who-we-are/girl-redbg.svg";
import GirlText from "../assets/who-we-are/girl-side-text.png";
import GirlWind from "../assets/who-we-are/wind.png";
import Button from "./Button";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          <div className="flex lg:flex-row gap-1 lg:gap-10 -mt-[8.5rem] flex-col">
            <AboutCarts />
          </div>
          <div id="about" className="grid lg:mt-[5%] lg:grid-cols-[50fr,50fr] gap-[3rem] grid-cols-1">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:mt-[10rem] mt-[10%] mb-[21rem] md:mb-[32rem] lg:mb-0 relative w-full">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 lg:pl-16 mb-12">about gymate</p>
              <img src={TitleRed} alt="text_bg" className="lg:w-[31%] absolute -top-[6px] w-[22rem]" />
              <h2 className="text-[24px] lg:text-[3.4rem] font-bold leading-tight mb-4 lg:w-[60rem] w-[100%]">We Can Give A Shape Of Your Body Here!</h2>
              <p className="text-[13px] lg:text-[16px] text-[#646464] font-medium">If you’re serious about achieving a goal- no matter what that is- then we are your gym. From the best equipment, technology and programs to the best fitness professionals around, we are serious about getting you results.</p>
              <div className="flex items-center md:flex-row mt-12 mb-[4rem] lg:gap-[2px] flex-col ">
                <div className="flex flex-col items-center text-center lg:py-10 py-3 lg:px-14 pl-7 px-0">
                  <img src={TrainersIcon} alt="icon_img" className={`w-[5.4rem] mb-6 h-auto`} />
                  <h3 className="uppercase font-bold text-[16px] lg:text-[20px] leading-snug">professional <br /> trainers</h3>
                </div>
                <div className="flex flex-col items-center text-center lg:border-solid lg:border-l lg:border-[rgb(0,0,0,0.2)] border-r py-3 lg:py-10 lg:px-14 px-0 border-none">
                  <img src={ModernIcon} alt="icon_img" className={`w-[5.4rem] mb-6 h-auto`} />
                  <h3 className="uppercase font-bold text-[16px] lg:text-[20px] leading-snug">modern <br /> equipments</h3>
                </div>
                <div className="flex flex-col items-center text-center lg:py-10 py-3 lg:px-14 pr-2 px-0">
                  <img src={LiftIcon} alt="icon_img" className={`w-[5.4rem] mb-6 h-auto`} />
                  <h3 className="uppercase font-bold text-[16px] lg:text-[20px] leading-snug">fancy gym <br /> machines</h3>
                </div>
              </div>
              <Button color={`!text-white`} bg={`bg-[#3f3f3f]`} cN="about-cta" arrowColor={`!text-white`} hover={`hover:bg-[#FF0336]`} text="take a tour" goTo="/classes" />
            </div>
            <div className="relative md:max-w-[60%] md:ml-[20%] lg:ml-0 lg:max-w-full md:-mt-[25rem]">
              <img src={GirlRunning} alt="girl_running" className="girl-running" />
              <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <img src={GirlText} alt="bg-text" className="girl-text" />
              <img src={GirlWind} alt="bg-wind" className="girl-wind" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
