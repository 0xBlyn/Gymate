import TitleRed from "../assets/who-we-are/title-bg.svg";
import BgIcon from "../assets/gallery/bg-icon.png";

function Gallery() {
  return (
    <>
      <section id="gallery" className="relative">
        <img src={BgIcon} alt="bg_img" className="absolute top-[30px] right-0" />
        <div className="container page-padding py-[1rem]">
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-10">GYMATE GALLERY</p>
            <img src={TitleRed} alt="text_bg" className="w-[23rem] absolute -top-[10px]" />
            <h2 className="text-[24px] lg:text-[3.4rem] font-bold mb-2">Our Workplace Gallery</h2>
            <p className="text-[#646464] font-medium text-[13px] lg:text-[15px] lg:max-w-[45%]">
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              Attracts talents and showcases company's work atmosphere.
            </p>
          </div>
          <div className="gallery-grid py-8 lg:py-20 w-full h-auto relative grid grid-cols-3 gap-4">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
