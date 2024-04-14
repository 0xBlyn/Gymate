import { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track whether to show the password

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/#home");
      goTop();
      alert("Login successful!"); // Show success message using alert popup
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign In
          </h1>
        </div>
        {/* form */}
        <div className="page-padding py-[10rem] flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-10 lg:px-20 bg-black w-[55rem] min450:w-full shadow-xl"
          >
            {error ? (
              <p className="text-white bg-[#ff0336] font-bold text-[1.6rem] px-10 py-5 text-center mb-10">
                {error}
              </p>
            ) : null}
            <label className="text-[2rem] text-white mb-3 font-medium">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336]"
              placeholder="gymate@gymail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Password
            </label>
            <div className="relative">
              <input
                className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336]"
                placeholder="password"
                type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <span
                className="absolute top-[36%] transform -translate-y-1/2 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state on click
              >
                {showPassword ? (
                  <i className="far fa-eye-slash text-primary text-[15px]"></i>
                ) : (
                  <i className="far fa-eye text-primary text-[15px]"></i>
                )}
              </span>
            </div>

            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign In
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">New to Gymate?</p>
              <Link
                to="/signup"
                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign Up
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
              <span className="text-[#ff0336]">Test Account</span> -
              gymate@gmail.com <span className="text-[#ff0336]"> / </span>
              testing123
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Login;
