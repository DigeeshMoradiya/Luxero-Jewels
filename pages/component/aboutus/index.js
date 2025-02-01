import Breadcrumbs from "@/pages/common/Breadcrumbs";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
    {
        name: "ALEXENDER",
        image: "/assest/Ellipse 2522.png",
        text: "Lorem ipsum dolor sit amet, conse elit, sedid golden eiusmod tempor aboret dolore magna aliqua. ipsum conseel dimonds usndi labois sitamet sedid sedid do eiusm.",
    },
    {
        name: "Sophia Carter",
        image: "/assest/Ellipse 2522.png",
        text: "Lorem ipsum dolor sit amet, conse elit, sedid golden eiusmod tempor aboret dolore magna aliqua. ipsum conseel dimonds usndi labois sitamet sedid sedid do eiusm.",
    },
    {
        name: "Michael Smith",
        image: "/assest/Ellipse 2522.png",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    },
];
export default function AboutUs() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <section className="flex flex-col  ">
            {/* Header */}
            <div className="text-center py-8">
                <h4 className="text-center py-2 text-3xl font-poiretOne text-[#27272A] font-extrabold">About Us</h4>
                <Breadcrumbs center={true} title="About Us"

                    redirect={"/"} />
            </div>

            {/* About Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6   px-4 md:px-8">
                {/* Left Content */}
                <div>
                    <p className="text-base font-semibold text-[#52525B] mb-4"> ABOUT US</p>
                    <h2 className="text-3xl font-extrabold mb-12 font-poiretOne">Luxero Jewels</h2>
                    <p className="text-gray-600 mb-12">
                        Lorem ipsum dolor sit amet, conse elit, sedid golden eiusmod tempor aboret dolore magna aliqua. ipsum conseel dimonds usndi labois sitamet sedid sedid do eiusm.
                    </p>
                    {/* Features */}
                    <div className="flex flex-wrap items-center gap-10 mb-12">
                        <FeatureCard icon="/assest/vs-about-icon-1 1.svg" title="Online Booking" />
                        <FeatureCard icon="/assest/vs-about-icon-2 1.svg" title="Amazing Deals" />
                    </div>
                    <div className="flex items-center space-x-6">
                        {/* Contact Us Button */}
                        <button className="text-black border border-black   hover:bg-black hover:text-white px-6 py-2">
                            Contact us
                        </button>

                        <div className="flex items-center space-x-4">
                            {/* Circular Image Container */}
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                {/* Main Image */}
                                <img
                                    src="/assest/Frame 1000004234.png" // Replace with the correct image path
                                    alt="Customer Support"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                                {/* Overlay Icon */}
                                <div className="absolute bottom-0 top-0 left-2 bg-gray-200 rounded-full flex items-center justify-center">
                                    <img
                                        src="/assest/Frame 1000004235.png" // Replace with the correct overlay icon path
                                        alt="Headphone Icon"
                                    // className="w-4 h-4"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <p className="font-semibold text-black text-sm mb-1">CALL FOR US</p>
                                <p className="text-gray-500 text-sm">+1 444 888 966</p>
                            </div>
                        </div>



                    </div>

                </div>

                {/* Right Image */}
                <div>
                    <img
                        src="/assest/Frame 1000004228.png" // Replace with your image path
                        alt="Jewelry Image"

                        className="object-cover w-screen"
                    />
                </div>
            </div>

            {/* Client Testimonials */}
            <div className="grid grid-cols-1 lg:grid-cols-2 py-4 md:py-8">
                <div>
                    <img
                        src="/assest/Frame 1000004242.png" // Replace with your image path
                        alt="Jewelry Image"
                        className="object-cover w-screen"
                    />
                </div>
                <div className="bg-gray-100 w-full  py-12 flex items-center">
                    <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
                        <p className="text-base font-medium text-[#71717A] mb-4"> CLIENT TESTIMONIALS</p>
                        <h2 className="text-3xl font-extrabold mb-9 font-poiretOne">Our Happy Clients</h2>

                        {/* Testimonial */}

                        <div className="flex flex-row lg:flex-row sm:flex-row items-center justify-center gap-14 mb-9">

                            {/* Navigation Button */}
                            <button onClick={prevTestimonial} className="text-gray-600 hover:text-black ">
                                <img src="/assest/Arrow - Right.svg" />
                            </button>
                            {/* Testimonial Image */}
                            <Image
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />

                            {/* Navigation Button */}
                            <button onClick={nextTestimonial} className="text-gray-600 hover:text-black">
                                <img src="/assest/Arrow - Right-Aboutus.svg" />
                            </button>
                        </div>
                        <div>
                            <p className="text-gray-600 mb-5">&quot;{testimonials[currentIndex].text}&quot;</p>
                            <div className="flex items-center justify-center space-x-4">
                                <img src="/assest/Line 21.svg" alt="Left" />
                                <p className="font-bold text-center">{testimonials[currentIndex].name}</p>
                                <img src="/assest/Line 21.svg" alt="Left" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title }) {
    return (
        <div className="flex items-center space-x-3">
            <img src={icon} className="text-2xl w-8" />
            <p className="text-[#27272A] font-semibold text-sm">{title}</p>
        </div>
    );
}
