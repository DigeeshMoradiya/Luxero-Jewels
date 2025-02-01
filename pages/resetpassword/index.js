import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Login from "../login";
import ForgotPassword from "../forgotpassword";
import { useRouter } from "next/navigation";

export default function Resetpassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showlogin, setShowlogin] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showforget, setShowforget] = useState(false);
  const router = useRouter();


  const [isSuccess, setIsSuccess] = useState(false);
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

  const handlesuccess = (e) => {
    e.preventDefault();
    setIsSuccess(true);
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
        {!isSuccess ? <> <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-semibold font-poiretOne">Reset Password</h2>
          <p className="text-sm mt-2 text-[#18181B]">
            Choose a new password for your account
          </p>

          <form className="grid grid-cols-1 gap-5 pt-10">


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

            <button className="w-full bg-black text-white py-2   border  rounded-md border-black hover:bg-white hover:text-black" onClick={(e) => handlesuccess(e)}>
              Reset Password
            </button>
          </form>


          <button className="flex w-full items-center justify-center gap-2 border border-[#18181B] py-2  rounded-md mt-4" onClick={(e) => handleaccount(e)}>
            Back to Login
          </button>
        </div></> : <div className="w-full md:w-1/2 p-10">
          <div className="flex items-center justify-center"><img src="/assest/Frame 27.svg" /></div>
          <p className="text-sm font-semibold mt-6 text-[#18181B] text-center">
            Password reset successfully
          </p>

          <button className="w-full bg-black text-white py-2   border mt-6 rounded-md border-black hover:bg-white hover:text-black" onClick={(e) => handleaccount(e)}>
            Login
          </button>



        </div>}

      </div>
    </div>
  );
}
