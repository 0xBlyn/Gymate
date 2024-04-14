import { useState } from "react";
import ClassProps from "../components/ClassProps";
import Footer from "../components/Footer";

function Classes() {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="login-section text-center">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Classes
          </h1>
        </div>

        {/* slide 1*/}
        <div className={`container gap-9 lg:gap-12 page-padding py-[5rem] lg:py-[10rem] grid-cols-1 lg:grid-cols-3 grid-rows-3 text-left ${load ? "grid" : "hidden"}`}>
          <ClassProps bgImg="cycling-bg" title="Cycling" trainer="Dorian Yate" date="Wed: 9:00 am" />
          <ClassProps bgImg="meditaion-bg" title="Meditation" trainer="Maria Mich" date="Fri: 1:00 pm" />
          <ClassProps bgImg="mma-bg" title="Boxing" trainer="John Flex" date="Tue: 4:00 pm" />
          <ClassProps bgImg="karate-bg" title="Karate" trainer="David Rich" date="Sat: 9:00 am" />
          <ClassProps bgImg="powerlift-bg" title="Power Lifting" trainer="Larry Wheels" date="Mon: 8:00 pm" />
          <ClassProps bgImg="workout-bg" title="Workout" trainer="Shawn Ray" date="Sun: 10:00 am" />
          <ClassProps bgImg="crossfit-bg" title="Crossfit" trainer="Jenifer Alex" date="Wen: 9:00 pm" />
          <ClassProps bgImg="running-bg" title="Running" trainer="Zinia Zessy" date="Fri: 6:00 am" />
        </div>

        {/* slide 2*/}
        <div className={`container gap-12 page-padding py-[5rem] lg:py-[10rem] lg:grid-cols-3 grid-cols-1 grid-rows-3 text-left ${load ? "hidden" : "grid"}`}>
          <ClassProps bgImg="cycling-bg" title="Cycling" trainer="Dorian Yate" date="Wed: 9:00 am" />
          <ClassProps bgImg="meditaion-bg" title="Meditation" trainer="Maria Mich" date="Fri: 1:00 pm" />
          <ClassProps bgImg="mma-bg" title="Boxing" trainer="John Flex" date="Tue: 4:00 pm" />
          <ClassProps bgImg="karate-bg" title="Karate" trainer="David Rich" date="Sat: 9:00 am" />
          <ClassProps bgImg="powerlift-bg" title="Power Lifting" trainer="Larry Wheels" date="Mon: 8:00 pm" />
          <ClassProps bgImg="workout-bg" title="Workout" trainer="Shawn Ray" date="Sun: 10:00 am" />
          <ClassProps bgImg="crossfit-bg" title="Crossfit" trainer="Jenifer Alex" date="Wen: 9:00 pm" />
          <ClassProps bgImg="running-bg" title="Running" trainer="Zinia Zessy" date="Thu: 12:00 am" />
          <ClassProps bgImg="bodybuilding-bg" title="Body Building" trainer="Jake Paul" date="Mon: 8:00 pm" />
          <ClassProps bgImg="box-bg" title="Mma" trainer="Becky Lynch" date="Fri: 6:00 am" />
          <ClassProps bgImg="yoga-bg" title="Yoga" trainer="Marta Mich" date="Wen: 8:00 am" />
          <ClassProps bgImg="fitness-bg" title="Fitness" trainer="Mia Malkova" date="Sun: 5:00 pm" />
        </div>

        <button className="text-[1.5rem] text-white bg-black px-14 py-6 font-medium uppercase shadow-2xl mb-14" onClick={() => { loadMore(); goTop(); }}>
          {load ? "show more" : "show less"}
        </button>
        <Footer />
      </section>
    </>
  );
}

export default Classes;
