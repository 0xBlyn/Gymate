import { useState } from "react";
import { useAuth } from "../AuthContext"; // Use useAuth hook instead of AuthContextProvider
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track whether to show the password
  const { user, signUp } = useAuth();
  const navigate = useNavigate();

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/#home");
      goTop();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign Up
          </h1>
        </div>
        {/* form */}
        <div className="py-[10rem] flex justify-center page-padding">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-10 lg:px-20 bg-black lg:w-[55rem] w-full shadow-xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-primary"
              placeholder="gymate@gmail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="text-[2rem] text-white mb-3 font-medium outline-primary outline-2">
              Password
            </label>
            <div className="relative">
              <input
                className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-primary"
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
              className="bg-primary text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign Up
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">
                Already have an account?
              </p>
              <Link
                to="/login"
                className="text-primary font-bold text-[1.5rem]"
              >
                Sign In
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.3rem] mt-5">
              ( Make <span className="text-primary">new Account</span> or go
              to
              <span className="text-primary"> Sign In</span> Page for Test
              Account )
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Signup;
