import title from "../assets/who-we-are/title-bg.svg";
import TrainerBox from "./Tprops";

function Trainers() {
  return (
    <>
      <section id="team" className="trainers-section">
        <div className="container page-padding py-[5rem] lg:py-[7rem]">
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold">gym trainers </p>
            <img src={title} alt="text_bg" className="w-[21rem] absolute -top-[6px]" />
            <h2 className="text-[24px] lg:text-[3.4rem] font-bold mb-2 mt-[5%] lg:mt-5">Team Of Expert Coaches</h2>
            <p className="text-[#646464] font-medium text-[13px] max-w-[90%] lg:text-[15px] lg:max-w-[45%]">
              Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!
            </p>
          </div>
          <div className="flex mt-20 ">
            <TrainerBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
