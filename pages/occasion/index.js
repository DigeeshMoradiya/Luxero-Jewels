import { useState } from "react";

export default function Occasion() {


  return (
    <div className="px-6 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 py-4">
        <img
          src='/assest/Frame 86.png'
          alt="Frame"
          className="w-auto h-auto"
        />
        <div className="flex items-center">
          <div className="flex items-end">
            <div className="flex flex-col items-center text-center">
              <h4 className="py-4 text-4xl font-poiretOne text-[#27272A] font-extrabold">
                Jewelry for Every Occasion
              </h4>
              <button className="bg-[#18181B] border border-[#27272A] text-white px-6 py-3 flex items-center gap-2 rounded">
                Shop Now
                <img src="/assest/ArrowRight.svg" alt="Arrow Icon" className="w-4 h-4" />
              </button>
            </div>

            <div className="relative top-0 sm:top-12 md:top-24 lg:top-36 flex justify-end items-end">


              <img
                src='/assest/Frame 87.png'
                alt="Frame"
                className="w-auto h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
