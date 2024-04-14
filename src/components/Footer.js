import FooterLogo from "../assets/logo/logo1.svg";

function Footer() {
  return (
    <footer className="bg-white py-[4%] md:py-0">
      <div className="container flex justify-between page-padding md:py-[3%] py-[5%]">
        <div className="flex justify-between flex-col md:flex-row md:items-start !text-left">
          <div className="flex flex-col w-full md:w-[45%] lg:w-[50%] gap-8">
            <img src={FooterLogo} alt="footer_logo" className="w-[15rem]" />
            <p className="md:text-[15px] text-2xl font-medium text-grayTxt">
            We are a 360-health and wellness company and the leading and fastest-growing fitness chain. With over 200 professionally certified personal trainers, ultra-modern gym facilities and over 40 free fitness classes weekly, we give our members a holistic experience to suit and support their fitness lifestyle.
            </p>
            <div className="flex gap-7 text-[18px] text-grayTxt">
              <i style={{ transition: "all 0.3s" }} className="fa-brands fa-facebook-f bg-lightbg p-4 rounded-full px-[14px] hover:bg-primary hover:text-white"></i>
              <i style={{ transition: "all 0.3s" }} className="fa-brands fa-twitter bg-lightbg p-4 rounded-full hover:bg-primary hover:text-white"></i>
              <i style={{ transition: "all 0.3s" }} className="fa-brands fa-pinterest-p bg-lightbg p-4 rounded-full px-[14px] hover:bg-primary hover:text-white"></i> 
              <i style={{ transition: "all 0.3s" }} className="fa-brands fa-youtube bg-lightbg p-4 rounded-full hover:bg-primary hover:text-white"></i>
            </div>
            <p className="text-[16px] font-medium text-grayTxt">
              Privacy Policy | © {new Date().getFullYear()} Gymate <br />{" "}
              Design by{" "}
              <a target="_blank" rel="noreferrer" href="https://www.radiustheme.com/">RadiusTheme</a><br />
              Developed by{" "}
              <a  className='text-primary animate-pulse' target="_blank" rel="noreferrer" href="https://blossomeze.web.app/">Blossom Eze</a>
            </p>
          </div>
          <div className="flex flex-row max-w-[90%] md:w-[50%] lg:w-[35vw] pt-[8%] md:pt-0 justify-between items-start">
            <div className="flex flex-col gap-5 relative">
              <p className="md:text-[22px] text-[16px] font-bold">Our Classes</p>
              <span className="md:top-[33px] top-[25px] absolute w-[7rem] h-[4px] bg-primary"></span>
              <p className="text-[14px] md:text-[16px] hover:text-primary cursor-pointer text-grayTxt font-medium hover:font-bold">Fitness Classes</p>
              <p className="text-[14px] md:text-[16px] hover:text-primary cursor-pointer text-grayTxt font-medium hover:font-bold">Aerobics Classes</p>
              <p className="text-[14px] md:text-[16px] hover:text-primary cursor-pointer text-grayTxt font-medium hover:font-bold">Power Yoga</p>
              <p className="text-[14px] md:text-[16px] hover:text-primary cursor-pointer text-grayTxt font-medium hover:font-bold">Learn Machines</p>
              <p className="text-[14px] md:text-[16px] hover:text-primary cursor-pointer text-grayTxt font-medium hover:font-bold">Full-Body Strength</p>
            </div>
            <div className="flex flex-col gap-5 relative">
              <p className="md:text-[22px] text-[16px] font-bold">Working Hours</p>
              <span className="md:top-[33px] top-[25px] absolute w-[7rem] h-[4px] bg-primary"></span>
              <p className="text-[16px]  text-grayTxt font-bold">Monday - Friday:</p>
              <p className="text-[16px] text-grayTxt font-medium">7:00am - 21:00pm</p> 
              <p className="text-[16px] text-grayTxt font-bold">Saturday:</p>
              <p className="text-[16px] text-grayTxt font-medium">7:00am - 19:00pm</p>
              <p className="text-[16px] text-grayTxt font-bold">Sunday - Closed</p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
