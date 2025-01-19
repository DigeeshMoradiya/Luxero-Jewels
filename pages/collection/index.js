import React from "react";

export default function Collection() {
  return (
    <>
      <div className="px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {/* Left Section: For Her Collection */}
          <div className="relative w-full">
            <img
              src="/assest/image 25.png"
              alt="For Her Collection"
              className="object-cover w-full max-h-[460px]"
            />
            <div className="absolute inset-0 flex justify-center items-end mb-20">
              <div className="text-center">
                <div className="bg-[#18181B] py-2 px-10">
                  <h2 className="text-white text-lg font-bold font-poiretOne">For her</h2>
                  <hr className="my-2 border-t border-white" />
                  <p className="text-white uppercase font-gtAmerica tracking-[.25em]">Collection</p>
                </div>
                <button className=" py-2 px-20 bg-white text-black font-semibold uppercase font-gtAmerica">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-4">


            <div className="flex flex-col items-center text-center">
              <div className="w-full">

                <img
                  src="/assest/Frame 38.png"
                  alt="Royal Sherbi Ring"
                  className="w-full mx-auto object-contain"
                />
              </div>
              <p className="mt-3 text-lg font-medium font-gtAmerica">Royal Sherbi Ring</p>
              <p className="text-gray-600 font-gtAmerica">$299.99</p>
            </div>


            <div className="flex flex-col items-center text-center">
              <div className="relative w-full">
                <img
                  src="/assest/Frame 38.png"
                  alt="Amphine Stud Earrings"
                  className="w-full mx-auto object-contain"
                />
                <span className="absolute top-4 left-4 bg-[#D96E40] text-white px-2 py-1 text-xs uppercase">
                  New
                </span>
              </div>
              <p className="mt-3 text-lg font-medium">Amphine Stud Earrings</p>
              <p className="text-gray-600">$299.99</p>
            </div>
          </div>
        </div>

      </div>

      <div className="px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-full">
                <img
                  src="/assest/Frame 38 (1).png"
                  alt="Royal Sherbi Ring"
                  className="w-full mx-auto object-contain"
                />
              </div>
              <p className="mt-3 text-lg font-medium font-gtAmerica">Royal Sherbi Ring</p>
              <p className="text-gray-600 font-gtAmerica">$299.99</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-full">
                <img
                  src="/assest/Frame 38.png"
                  alt="Amphine Stud Earrings"
                  className="w-full mx-auto object-contain"
                />
                <span className="absolute top-4 left-4 bg-[#D96E40] text-white px-2 py-1 text-xs uppercase">
                  New
                </span>
              </div>
              <p className="mt-3 text-lg font-medium">Amphine Stud Earrings</p>
              <p className="text-gray-600">$299.99</p>
            </div>
          </div>
          <div className="relative w-full">
            <img
              src="/assest/image 26 (1).png"
              alt="For Her Collection"
              className="object-cover w-full max-h-[460px]"
            />
            <div className="absolute inset-0 flex justify-center items-end mb-20">
              <div className="text-center">
                <div className="bg-[#18181B] py-2 px-10">
                  <h2 className="text-white text-lg font-bold font-poiretOne">For him</h2>
                  <hr className="my-2 border-t border-white" />
                  <p className="text-white uppercase font-gtAmerica tracking-[.25em]">Collection</p>
                </div>
                <button className="py-2 px-20 bg-white text-black font-semibold uppercase font-gtAmerica">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
