import Footer from "../components/Footer";
import GirlRunning from "../assets/who-we-are/girl-run.png";
import GirlRedBg from "../assets/who-we-are/girl-redbg.svg";
import GirlText from "../assets/who-we-are/girl-side-text.png";
import GirlWind from "../assets/who-we-are/wind.png";
import TitleRed from "../assets/who-we-are/title-bg.svg";
import MainButton from "../components/Button";
import Img3 from "../assets/istockphoto-481686206-612x612.jpg";
import Img4 from "../assets/istockphoto-1127485222-612x612.jpg";
import Target from "../assets/AboutPage/target.png";
import Mountain from "../assets/AboutPage/mountain.png";

function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[4rem] md:py-[5rem]">
          <div className="grid lg:grid-cols-[1fr_1fr] h-[60rem] grid-cols-1">
            <div className="flex flex-col lg:text-left relative lg:items-start justify-center items-center text-center pb-[5rem] md:pb-[22rem] mb-[0] md:mb-[20rem] lg:mb-0">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 lg:ml-20 ml-3 ">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[21rem] absolute -top-[3px] lg:top-[27px]"
              />
              <h2 className="lg:text-[3.6rem] text-[24px] max-w-[53rem] font-bold lg:mb-4 mb-0">
                We Will Give You Strength and Health
              </h2>
              <p className="text-[#646464] font-medium text-[13px] lg:text-[15px] max-w-[50rem] ">
                At Gymate, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#ff0336]`}
                goTo="/contact"
                text="contact us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
              />
            </div>
            {/*  */}
            <div className="relative w-[80%] md:max-w-[60%] md:ml-[20%] lg:max-w-full lg:ml-0 md:-top-[90px] left-[40px] ml-[0%]">
              <img
                src={GirlRunning}
                alt="girl_running"
                className="girl-running"
              />
              <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
              <img src={GirlText} alt="bg-text" className="girl-text" />
              <img src={GirlWind} alt="bg-wind" className="girl-wind" />
            </div>
          </div>
          {/*  */}
          <div className="mt-[15rem] lg:mt-[10rem]">
            <div className="grid lg:grid-cols-2 grid-rows-2 w-full grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center lg:px-[60px] px-[10px]">
                <img src={Target} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our Target</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                To empower individuals of all fitness levels to achieve their health and wellness goals, fostering a supportive community that celebrates progress, perseverance, and personal growth. We aim to inspire and guide our members on their journey towards a healthier, happier, and more active lifestyle. 
                </p>
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img3}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img4}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center lg:px-[60px] px-[10px]">
                <img src={Mountain} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                Founded in 2004, Gymate quickly became a fitness hotspot in NYC, USA. With top-notch equipment and personalized training, we have evolved into a community hub for health enthusiasts. Committed to inclusivity and support, we continue to empower individuals to achieve their fitness goals, embodying the spirit of dedication and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About;
