import React from "react";

export default function NewArrivals() {
  const items = [
    {
      id: 1,
      label: "NEW",
      name: "Adney hoop earrings",
      price: "$299.99",
      image: "/assest/Frame 38 (2).png",
    },
    {
      id: 2,
      name: "Adney hoop earrings",
      price: "$299.99",
      image: "/assest/Frame 38 (2).png",
    },
    {
      id: 3,
      name: "Abrill cutout gold ring",
      price: "$299.99",
      image: "/assest/Frame 38 (3).png",
    },
    {
      id: 4,
      name: "Syndria huggle earrings",
      price: "$299.99",
      image: "/assest/Frame 38 (4).png",
    },
  ];

  return (
    <div className="px-4 py-10 bg-black">
      {/* Section Header */}
      <h4 className="text-center text-2xl md:text-3xl font-poiretOne text-white font-extrabold">
        New Arrivals
      </h4>
      <h5 className="text-center text-sm md:text-md font-gtAmerica text-white font-medium mt-5">
        Explore our most sought-after jewelry pieces that combine elegance and allure
      </h5>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            {/* New Label */}
            {item.label && (
              <span className="text-xs font-medium bg-[#52525B] text-white px-3 py-2 absolute top-8 left-8 font-gtAmerica">
                {item.label}
              </span>
            )}
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto   mb-4 object-cover"
            />
            {/* Product Name */}
            <h5 className="text-base md:text-lg font-medium text-white text-center font-gtAmerica">
              {item.name}
            </h5>
            {/* Product Price */}
            <p className="text-[#71717A] font-medium text-center font-gtAmerica">{item.price}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 text-white font-normal border border-white transition duration-200 hover:bg-white hover:text-black">
          View More
        </button>
      </div>
    </div>
  );
}
