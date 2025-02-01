import Breadcrumbs from "@/pages/common/Breadcrumbs";
import Image from "next/image";
import React, { useState } from "react";
import Order from "./order";
import PersonalData from "./personaldata";
import Address from "./address";
import { useRouter } from "next/navigation";

const ResponsiveDesign = () => {


    const router = useRouter();


    const array = [{
        id: 1,
        title: "Order",
        icon: "/assest/Bag_1.svg",
    },
    {
        id: 2,
        title: "Personal data",
        icon: "/assest/Profile_1.svg",
    }, {
        id: 3,
        title: "Address",
        icon: "/assest/Location.svg",
    }, {
        id: 4,
        title: "Sign Out",
        icon: "/assest/Logout.svg",
    }]
    const [selectedItem, setSelectedItem] = useState(array?.[0]);
    const handleClick = (item) => {
        {
            item?.title === "Sign Out" ?
                router.push("/login") :
                setSelectedItem(item);
        }
    };
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
        <div className="px-6 py-5" >
            <Breadcrumbs title={"Account"} />
            <h4 className="text-center py-4 text-3xl font-poiretOne text-[#27272A] font-bold">
                My Account            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-6 md:gap-6 sm:gap-0 gap-y-6">
                {/* Sidebar */}
                <div className="bg-white p-4 border-2 max-h-80">
                    <h2 className="text-2xl font-semibold mb-4 font-gtAmerica">Welcome, John Deo</h2>
                    <ul>
                        {array.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleClick(item)}
                                className={`border-b-2 cursor-pointer  `}
                            >
                                <div className={`flex justify-between items-center space-x-2 px-2 py-4 hover:bg-[#18181B] hover:text-white text-black group ${selectedItem?.id === item.id ? 'bg-[#18181B] text-white' : ''}`}>
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={item?.icon}
                                            alt="Bag"
                                            className={`group-hover:filter group-hover:invert group-hover:brightness-0 ${selectedItem?.id === item.id ? 'text-white' : ''}`}
                                        />
                                        <div className="font-semibold text-base">{item.title}</div>
                                    </div>
                                    <div>
                                        <img
                                            src="/assest/Arrow - Right 2.svg"
                                            alt="Arrow"
                                            className="group-hover:filter group-hover:invert group-hover:brightness-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </ul>
                </div>


                <main className={`col-span-3 p-4 bg-white border-2 max-h-[calc(100vh-8rem)]  ${selectedItem?.title === "Address" ? ' ' : 'overflow-y-auto'}`}>
                    {selectedItem?.title === "Order" ?
                        <Order />
                        : selectedItem?.title === "Personal data" ? <PersonalData />
                            : selectedItem?.title === "Address" ? <Address />
                                : ""}
                </main>
            </div>
        </div>
    );
};

export default ResponsiveDesign;
