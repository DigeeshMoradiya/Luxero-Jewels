import React from "react";

export default function Followus() {
  const images = [
    { id: 1, src: "/assest/Frame 63.png", alt: "Instagram Post 1" },
    { id: 2, src: "/assest/Frame 64.png", alt: "Instagram Post 2" },
    { id: 3, src: "/assest/Frame 65.png", alt: "Instagram Post 3" },
    { id: 4, src: "/assest/Frame 66.png", alt: "Instagram Post 4" },
  ];

  return (
    <div className="px-4 md:px-20 lg:px-44 py-10 bg-white">
      {/* Header Section */}
      <h4 className="text-center text-2xl md:text-3xl font-poiretOne font-extrabold text-black">
        Follow us on <span className="text-[#27272A]">@Instagram</span>
      </h4>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {images.map((image) => (
          <div key={image.id} className="relative w-full h-40 sm:h-60 lg:h-72 overflow-hidden ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <h5 className="text-center text-sm md:text-md font-gtAmerica text-[#000000] mt-4">
        Shop your favourite styles from Instagram <span className="font-bold">@IUXERO_JEWELS</span>
      </h5>
    </div>
  );
}
