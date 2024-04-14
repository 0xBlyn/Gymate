import { useState } from "react";

function BmiCalc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    if (!weight || !height || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height.");
      return;
    }
    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(1);
    setBmi(bmiValue);
    setMessage(getMessage(bmiValue));
  };

  const getMessage = (bmiValue) => {
    if (bmiValue < 20) {
      return "Underweight";
    } else if (bmiValue >= 20 && bmiValue < 27) {
      return "Normal";
    } else {
      return "Overweight";
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <section className="bmi-section py-[4rem] relative">
      <div className="container page-padding ">
        <span className="w-full h-full absolute bg-transparent bg-[#00000063] top-0 left-0"></span>
        <div className="text-white w-[100%] relative">
          <h2 className="text-[24px] lg:text-[4rem] font-bold leading-[1.1] mb-4">
            Let's Calculate Your <span className="text-[#FF0336]">BMI</span>
          </h2>
          <p className="text-[14px] lg:text-[16px] text-[#a1a1a1]">
            Easily determine your body mass index with our accurate calculation tool.
          </p>
          <div className="flex flex-col lg:max-w-[60%]">
            <form className="flex w-full gap-6 h-[50px] mt-4">
              <input
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-4 bg-white text-black"
                type="number"
                placeholder="Weight / kg"
              />
              <input
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-4 bg-white text-black"
                type="number"
                placeholder="Height / cm"
              />
            </form>
            {/* Output */}
            {bmi && message && (
              <p className="mt-5 gap-3 text-[16px] font-medium flex items-center w-full ">
                <span className="w-1/2">
                  Your BMI is: &nbsp;
                  <span className="text-[#ff0336]">{bmi}</span>
                </span>
                <span className="w-1/2">
                  Your weight is: &nbsp;
                  <span className="text-[#ff0336]">{message}</span>
                </span>
              </p>
            )}
            <div className="flex gap-4 mt-5 justify-between">
              <button
                onClick={calcBmi}
                className="text-[15px] uppercase font-bold bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#FF0336]"
              >
                Calculate
              </button>
              <button
                onClick={resetCalculator}
                className="text-[15px] uppercase font-bold bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#FF0336]"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BmiCalc;
