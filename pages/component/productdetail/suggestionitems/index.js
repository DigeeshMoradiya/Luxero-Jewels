import { useState } from "react";

export default function Suggestionitems() {

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
        <div className="py-5">
            <h4 className="text-center py-2 text-3xl font-poiretOne text-[#27272A] font-extrabold">
                Suggestion Items
            </h4>
            <div>


                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-6">

                    {items?.map((item) => (
                        <div
                            key={item?.id}
                            className="relative py-4 rounded-lg flex flex-col items-center"
                        >
                            {/* New Label */}
                            {item?.label && (
                                <span className="text-xs font-medium bg-[#D96E40] text-white px-3 py-2 absolute top-8 left-5 font-gtAmerica">
                                    {item.label}
                                </span>
                            )}
                            {/* Product Image */}
                            <img
                                src={item?.image}
                                alt={item.name}
                                className="w-full h-auto mb-4 object-cover cursor-pointer"
                            />
                            {/* Product Name */}
                            <h5 className="text-base md:text-lg font-medium text-[#18181B] text-center font-gtAmerica">
                                {item?.name}
                            </h5>
                            {/* Product Price */}
                            <p className="text-[#71717A] font-medium text-center font-gtAmerica">{item?.price}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
