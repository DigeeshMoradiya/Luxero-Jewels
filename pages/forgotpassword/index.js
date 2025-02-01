import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();

  const [showCheckEmail, setShowCheckEmail] = useState(false);

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
  const handleCheckemail = (e) => {
    e.preventDefault();
    setShowCheckEmail(true)
  };
  const handleResetpassword = (e) => {
    e.preventDefault();
    router.push('/resetpassword');
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
        {!showCheckEmail ? <>
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-2xl font-semibold font-poiretOne">Forgot Password</h2>
            <p className="text-sm mt-2 text-[#71717A]">
              Enter the email you used to create your account so we can send you instructions on how to reset your password.
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


              <button className="w-full bg-black text-white py-2   border rounded-md  border-black hover:bg-white hover:text-black" onClick={(e) => handleCheckemail(e)}>
                Send
              </button>
            </form>


            <button className="flex w-full items-center justify-center gap-2 border border-[#18181B] py-2  rounded-md mt-4" onClick={(e) => handleaccount(e)}>
              Back to Login
            </button>

          </div></> : <>
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-2xl font-semibold font-poiretOne">Check your Email</h2>
            <p className="text-sm mt-2 text-[#71717A]">
              We have sent an email with password reset information to <div className="text-[#040308]">n****e@e***e.com.</div>
            </p>

            <p className="text-sm mt-5 text-[#040308]">
              Didn’t receive the email? Check spam or promotion folder or            </p>

            <button className="w-full bg-black text-white py-2   border  rounded-md border-black hover:bg-white hover:text-black mt-5 " onClick={(e) => handleResetpassword(e)} >
              Resend Email
            </button>
            <button className="flex w-full items-center justify-center gap-2 border border-[#18181B] py-2  rounded-md mt-4" onClick={(e) => handleaccount(e)}>
              Back to Login
            </button>



          </div></>}
      </div >
    </div >



  );
}
