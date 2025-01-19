import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Product({ totalPages = 4, currentPage, setCurrentPage }) {
    const router = useRouter()

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

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    
    const handleredirect = () => {
        router.push("/component/productdetail")
    }
    return (
        <div>


            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-6 mt-4">

                {items.map((item) => (
                    <div
                        key={item.id}
                        className="relative py-4 rounded-lg flex flex-col items-center"
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
                            className="w-full h-auto mb-4 object-cover cursor-pointer"
                            onClick={handleredirect}
                        />
                        {/* Product Name */}
                        <h5 className="text-base md:text-lg font-medium text-[#18181B] text-center font-gtAmerica">
                            {item.name}
                        </h5>
                        {/* Product Price */}
                        <p className="text-[#71717A] font-medium text-center font-gtAmerica">{item.price}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center space-x-2 justify-center py-14">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-md ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                >
                    <img src="/assest/PageArrowLeft.svg" />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-10 h-10 rounded-md font-semibold ${currentPage === index + 1
                            ? 'bg-black text-white'
                            : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center rounded-md ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400'}`}
                >
                    <img src="/assest/PageArrowRight.svg" alt="Next page" />
                </button>

            </div>
        </div>
    );
}
