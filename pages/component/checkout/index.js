import Image from "next/image";
import { useState } from "react";

export default function Checkout() {
    const cartItems = [
        { id: 1, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assets/item.png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assets/item.png" },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shipping = 5.0;
    const salesTax = 102.0;
    const grandTotal = subtotal + shipping + salesTax;

    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <div className="px-6 py-5 sm:px-4 sm:py-6 md:px-8 md:py-10">
            <h4 className="text-center py-4 text-3xl font-poiretOne text-[#27272A] font-bold">
                Checkout            </h4>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Shipping Information Section */}
                <div className="flex-1 bg-white py-6 ">
                    <h2 className="text-2xl font-semibold text-[#18181B] mb-4">Shipping Information</h2>
                    <form className="grid grid-cols-1 gap-8">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium weight text-[#18181B]">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleInputChange}
                                className={`mt-2 w-full border ${formValues.fullName ? "border-black" : "border-gray-300"
                                    } rounded-md px-2 py-3 text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                placeholder="Enter your name"
                            />

                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-sm font-medium weight text-[#18181B]">Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                className={`mt-2 w-full border ${formValues.email ? "border-black" : "border-gray-300"
                                    } rounded-md px-2 py-3 text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                placeholder="Enter email address"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium weight text-[#18181B]">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleInputChange}
                                className={`mt-2 w-full border ${formValues.phone ? "border-black" : "border-gray-300"
                                    } rounded-md px-2 py-3 text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                placeholder="Enter phone number"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium weight text-[#18181B]">Country</label>
                            <select className="mt-1 w-full border rounded-md p-2  ">
                                <option>United States - USA</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                        {/* City, State, ZIP */}
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium weight text-[#18181B]">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formValues.city}
                                    onChange={handleInputChange}
                                    className={`mt-2 w-full border ${formValues.city ? "border-black" : "border-gray-300"
                                        } rounded-md px-2 py-3 text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                    placeholder="Enter city"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium weight text-[#18181B]">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formValues.state}
                                    onChange={handleInputChange}
                                    className={`mt-2 w-full border ${formValues.state ? "border-black" : "border-gray-300"
                                        } rounded-md px-2 py-3 text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                    placeholder="Enter state"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium weight text-[#18181B]">ZIP Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formValues.zip}
                                    onChange={handleInputChange}
                                    className={`mt-2 w-full border ${formValues.zip ? "border-black" : "border-gray-300"
                                        } rounded-md px-2 py-3 text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                    placeholder="Enter ZIP code"
                                />
                            </div>

                        </div>
                        <div>
                            <div className="flex  items-center">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6 rounded text-[#27272A] checked:bg-black font-gtAmerica border-2"
                                    defaultChecked={false}
                                    style={{ accentColor: '#18181B' }}

                                />
                                <label
                                    className="ml-2 text-sm text-[#71717A] font-medium"
                                >
                                    I have read and agree to the Terms and Conditions.

                                </label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="flex-1 bg-white p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Review your cart</h2>
                    <div className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center py-4 gap-4">
                                <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">x 1</p>
                                </div>
                                <p className="font-semibold">${item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="text-gray-500">Subtotal :</span>
                            <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="text-gray-500">Shipping :</span>
                            <span className="font-medium text-gray-800">${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="text-gray-500">Sales Tax :</span>
                            <span className="font-medium text-gray-800">${salesTax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-lg font-semibold">Grand Total :</span>
                            <span className="text-lg font-bold text-green-600">${grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className="mt-4 w-full bg-black text-white py-3 rounded-md text-lg font-medium hover:bg-gray-800">
                        Pay Now
                    </button>
                    <p className="text-sm text-gray-500 text-center mt-2">
                        <span className="text-green-600">Secure Checkout - SSL Encrypted</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
