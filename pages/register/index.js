import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Login from "../login";
import ForgotPassword from "../forgotpassword";
import { useRouter } from "next/navigation";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showlogin, setShowlogin] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showforget, setShowforget] = useState(false);
  const router = useRouter();


  const [isFocused, setIsFocused] = useState(false);
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

  const handleaccount = (e) => {
    e.preventDefault();
    router.push('/login');
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
          <h2 className="text-2xl font-semibold font-poiretOne">Create account</h2>
          <p className="text-sm mt-2 text-[#71717A]">
            Already have an account?  <span className="text-[#040308] cursor-pointer font-semibold" onClick={(e) => handleaccount(e)}>Login</span>
          </p>

          <form className="grid grid-cols-1 gap-5 pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  className={` w-full border ${formValues.fullName ? "border-black" : "border-gray-300"
                    } rounded-md px-3 py-3 text-sm hover:border-black placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                  placeholder="First Name"
                />

              </div>
              <div>
                <input
                  type="test"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={`  w-full border ${formValues.email ? "border-black" : "border-gray-300"
                    } rounded-md px-3 py-3 hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                  placeholder="Last name"
                />
              </div>
            </div>
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
            <div>
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className={`w-full border ${formValues.city ? "border-black" : "border-gray-300"}
          rounded-md px-3 py-3 pr-10 hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm`}
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <img src="/assest/eye-off.svg" /> : "<Eye size={20} />"}
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  className="w-4 h-4 rounded text-[#27272A] checked:bg-black font-gtAmerica border-2"
                  defaultChecked={false}
                  style={{ accentColor: '#18181B' }}
                />
                <label
                  htmlFor="terms-checkbox"
                  className="text-sm text-[#71717A] font-medium"
                >
                  I agree to
                  <span className="text-[#18181B] cursor-pointer"> Terms of service </span> and
                  <span className="text-[#18181B] cursor-pointer"> Privacy policy</span>
                </label>

              </div>
            </div>
            <button className="w-full bg-black text-white py-2   border  rounded-md border-black hover:bg-white hover:text-black" onClick={(e) => handleaccount(e)}>
              Create Account
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
