import Trainer1 from "../assets/trainers/trainer1.png";
import Trainer2 from "../assets/trainers/trainer2.png";
import Trainer3 from "../assets/trainers/trainer3.png";
import TrainerBg from "../assets/trainers/trainer-bg.png";
import Shape from "../assets/trainers/shape.png";
import { useState } from "react";

function TrainerBox() {
  const [imgHover, setImgHover] = useState(false);

  const hoverBox = () => {
    setImgHover(true);
  };

  const hoverBoxRemove = () => {
    setImgHover(false);
  };

  const trainers = [
    { id: 1, img: Trainer1, name: "John Lewis", job: "Yoga Trainer" },
    { id: 2, img: Trainer2, name: "Jonathan Doe", job: "Crossfit Trainer" },
    { id: 3, img: Trainer3, name: "Ana June", job: "Personal Trainer" },
  ];

  return (
    <div className="flex justify-center gap-[5rem] max-w-full flex-wrap lg:flex-nowrap" style={{ margin: "0 auto" }}>
      {trainers.map((train) => (
        <div
          key={train.id}
          onMouseEnter={hoverBox}
          onMouseLeave={hoverBoxRemove}
          className="relative cursor-pointer w-[35rem] flex flex-col select-none"
        >
          <img
            src={train.img}
            alt="trainer"
            className={`w-[22rem] z-10 relative grayscale mx-auto ${imgHover ? "hover:grayscale-0" : ""}`}
          />
          <img
            src={TrainerBg}
            alt="trainer_background"
            className="absolute top-[4px] w-full scale-[1] transition-all"
          />
          <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]">
            <img alt="shape" src={Shape} className="absolute -top-[25px] left-[113px]" />
            <i className="fa-solid fa-angle-up absolute -top-[16px] left-[162px] text-3xl"></i>
            <h3 className="font-bold text-[2.4rem] ">{train.name}</h3>
            <p className="font-medium text-[1.5rem] text-[#646464]">{train.job}</p>
            <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem]">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="far fa-envelope"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrainerBox;
