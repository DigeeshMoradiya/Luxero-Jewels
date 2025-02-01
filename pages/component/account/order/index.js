import Breadcrumbs from "@/pages/common/Breadcrumbs";
import Image from "next/image";
import React, { useState } from "react";

const Order = () => {

    const cartItems = [
        { id: 1, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
    ];
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 font-gtAmerica">Order</h2>
            {cartItems.map((item, index) => (
                <div key={item?.id} className={`flex py-3 gap-4 ${index !== cartItems.length - 1 ? 'border-b-2' : ''}`}>
                    <Image
                        src={item?.image}
                        alt={item?.name}
                        width={80}
                        height={90}
                        className="rounded-md"
                    />
                    <div className="flex flex-col w-full sm:gap-0 gap-2">
                        <h3 className="text-base font-semibold font-gtAmerica">{item?.name}</h3>
                        <div className="flex-1 flex justify-end  items-center">
                            <button className="px-6 py-1 text-base font-medium text-black border border-black   hover:bg-black hover:text-white transition group">
                                View Order
                            </button>
                        </div>
                        <p className="font-semibold text-[#18181B] flex items-center">${item?.price.toFixed(2)}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Order;
