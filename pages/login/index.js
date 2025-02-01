import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function Login({ setShowlogin, setShowforget }) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleForget = (e) => {
    e.preventDefault();
    router.push('/forgotpassword');
  };

  const handleShowRegister = (e) => {
    e.preventDefault();
    router.push('/register');
  };

  const handleDashboard = (e) => {
    e.preventDefault();
    router.push('/');
  };


  return (


    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl overflow-hidden  bg-white shadow-lg md:flex-row flex-col">
        <div className="flex w-full md:w-1/2   bg-black text-white p-10 flex-col">
          <h1 className="text-3xl font-bold">Luxerô Jewels</h1>
          <p className="text-sm mt-2">Urban Luxury. Mystic Legacy.</p>
          <div className="flex-grow"></div>

          <div>
            <p className="mt-6 text-xl font-poiretOne">Numquam architecto iure</p>
            <p className="text-sm text-[#FFFFFF] mt-2">
              Ut corrupti est molestiae occaecati voluptatem vel harum explicabo numquam.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-semibold font-poiretOne">Welcome Back</h2>
          <p className="text-sm mt-2 text-[#71717A]">
            Don’t have an account? <span className="text-[#040308] cursor-pointer font-semibold" onClick={(e) => handleShowRegister(e)}>Sign Up</span>
          </p>

          <form className="grid grid-cols-1 gap-5 pt-10">

            <div>
              <input
                type="email"
                name="city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`  w-full border ${formValues.city ? "border-black" : "border-gray-300"
                  } rounded-md px-3 py-3  hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                placeholder="Email"
              />
            </div>
            <div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className={`w-full border ${formValues.city ? "border-black" : "border-gray-300"}
          rounded-md px-3 py-3 pr-10 hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <img src="/assest/eye-off.svg" /> : "<Eye size={20} />"}
                </button>
              </div>
            </div>

            <p className="text-[#040308] cursor-pointer font-gtAmerica font-semibold text-base text-end" onClick={(e) => handleForget(e)}>Forgot Password</p>
            <button className="w-full bg-black text-white py-2   border rounded-md  border-black hover:bg-white hover:text-black " onClick={(e) => handleDashboard(e)}>
              Login
            </button>
          </form>

          <div className="flex items-center justify-center py-4 gap-4">
            <img src="/assest/Line 2.svg" alt="Left" className="w-32 sm:w-48" />
            <p className="font-bold text-center">or</p>
            <img src="/assest/Line 2.svg" alt="Right" className="w-32 sm:w-48" />
          </div>
          <button className="flex w-full items-center justify-center gap-2 border border-[#18181B] p-3 rounded-md">
            <FcGoogle className="text-xl" />
            <p className="text-[#040308] font-semibold text-sm">Continue with Google</p>
          </button>

        </div>
      </div>
    </div>


  );
}
