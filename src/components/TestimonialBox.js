import Quotes from "../assets/testimonials/quotes.png";
import BoxShape from "../assets/testimonials/testimonial-shape.svg";

function TestimonialBox({ text, name, job }) {
  return (
    <div className="absolute flex flex-col bg-black  top-0 right-0 lg:w-[70%] w-full h-full py-[20px] px-[20px] lg:py-[24px] lg:px-[30px] lg:pl-[15%] lg:pt-[5%]">
      <img alt="quote_img" src={Quotes} className="lg:w-[5rem] w-[30px]" />
      <p className="text-[13px] lg:text-[16px] italic text-[#dedede] my-2 lg:my-6 z-10">{text}</p>
      <h3 className="text-white text-[15px] lg:text-[21px] lg:mb-1 font-bold">{name}</h3>
      <p className="lg:text-[14px] text-[11px] font-medium text-[#dedede]">{job}</p>
      <img
        alt="box_img"
        src={BoxShape}
        className="w-[17.5rem] absolute bottom-0 right-[13.5rem] invert opacity-40"
      />
    </div>
  );
}

export default TestimonialBox;
