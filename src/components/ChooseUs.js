import VideoImg from "../assets/choose-us/main-img.png";
import TitleRed from "../assets/who-we-are/title-bg.svg";
import TrainingIcon from "../assets/choose-us/training.png";
import EquipmentsIcon from "../assets/choose-us/bench-press.png";
import BagIcon from "../assets/choose-us/gym-bag.png";
import BottleIcon from "../assets/choose-us/bottle-of-water.png";
import PlayImg from "../assets/choose-us/play.png";
import Button from "./Button";

function ChooseUs() {
  return (
    <section className="choose-section px-[5%] lg:px-0 py-[7rem]">
      <div className="container page-padding flex lg:flex-row flex-col lg:items-center gap-[7rem]">
        <div className="video-div relative lg:w-[50%] md1000:w-[85%] md1000:flex md1000:justify-center">
          <img src={VideoImg} alt="video_img" className="lg:w-[94%] h-auto" />
          <img
            src={PlayImg}
            alt="play_img"
            className="absolute w-[2.4rem] lg:top-[42%] lg:left-[44%] z-10 cursor-pointer left-[47%] top-[44%]"
          />
          <span className="bg-white cursor-pointer p-14 absolute rounded-full top-[38.7%] left-[39.9%]"></span>
        </div>
        <div className="relative lg:w-[50%] flex flex-col items-center text-center w-full">
          <p className="text-white relative z-10 text-[16px]  w-full uppercase font-bold mb-14">
            why choose us
          </p>
          <img
            src={TitleRed}
            alt="text_bg"
            className="w-[22rem] absolute -top-[6px]"
          />
          <h2 className="text-[24px] lg:text-[3.4rem] text-white font-bold leading-[1.2] max-w-3xl">
            We Can Give A Shape Of Your Body Here!
          </h2>
          <p className="lg:text-[16.5px] text-[13px] w-full text-[#b4b4b4] mt-3 lg:mt-7 max-w-3xl">
           Our expert trainers will work with you to create a personalized fitness and nutrition plan that helps you reach specific goals.
          </p>

          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-8 items-center w-full lg:max-w-[44rem] mt-14 flex flex-col">
            {[
              { icon: TrainingIcon, text: "Free Fitness Training" },
              { icon: EquipmentsIcon, text: "Modern Gym Machines" },
              { icon: BagIcon, text: "Gym Bag Equipments" },
              { icon: BottleIcon, text: "Fresh Bottle Water" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between w-full items-center gap-6">
                <img
                  className="bg-[#2b2b2b] hover:bg-primary ease-in duration-200 lg:w-[6.5rem] rounded-full p-4"
                  src={item.icon}
                  alt="icon"
                />
                <p className="text-white font-bold text-[18px] lg:max-w-[150px]">{item.text}</p>
              </div>
            ))}
            <Button
              color={`!text-white`}
              bg={`bg-[#595959]`}
              text="our classes"
              arrowColor={`!text-white`}
              cN="choose-cta"
              hover={`hover:bg-[#ff0336]`}
              goTo="/classes"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
