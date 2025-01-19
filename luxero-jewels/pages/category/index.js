import { useState } from "react";

export default function Category() {

  const imageArray = [
    { id: 1, src: '/assest/Frame 18.png', title: 'Necklaces & Pendants' },
    { id: 2, src: '/assest/Frame 19.png', title: 'Earrings' },
    { id: 3, src: '/assest/Frame 19 (1).png', title: 'Bracelets' },
    { id: 4, src: '/assest/Frame 19 (2).png', title: 'Rings' },
    { id: 5, src: '/assest/Frame 19 (3).png', title: 'Engagement Rings' },
  ];

  return (
    <div className="px-6 py-5">
      <h4 className="text-center py-2 text-3xl font-poiretOne text-[#27272A] font-extrabold">
        SHOP BY CATEGORY
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-4">
        {imageArray?.map((item) => (
          // <div key={item.id} className="flex flex-col items-center">
          //   <div className="object-contain transform transition-transform  md:h-80 1xl:h-96 md:h-72 duration-500 hover:scale-110">
          //     <img
          //       src={item.src}
          //       alt={item.title}
          //       className="w-full "
          //     />
          //   </div>
          //   <p className="mt-2 text-center text-base font-xl font-gtAmerica">
          //     {item.title}
          //   </p>
          // </div>
          <div key={item.id} className="flex flex-col items-center">
            <div
              className="w-full bg-gray-200 overflow-hidden group"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full object-center object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <p className="mt-2 text-center text-base font-xl font-gtAmerica">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
