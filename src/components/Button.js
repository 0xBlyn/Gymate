import { Link } from "react-router-dom";

function Button({ color, bg, cN, arrowColor, hover, text, goTo }) {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goToTop}
      to={goTo}
      className={`text-[15px] ${color} ${bg} ${cN} text-center flex justify-center items-center font-[600] w-[18rem] h-[4.5rem] uppercase hero-cta relative ml-2 ${hover} `}
    >
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#FF0336] ${arrowColor}`}></i>
    </Link>
  );
}

export default Button;
