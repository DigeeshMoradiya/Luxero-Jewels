import Breadcrumbs from "@/pages/common/Breadcrumbs";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default function Checkout() {
    const cartItems = [
        { id: 1, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
        { id: 2, name: "DuoComfort Sofa Premium", price: 20.0, image: "/assest/Frame 147 (1).png" },
    ];
    const options = countryList().getData();
    const [isHovered, setIsHovered] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shipping = 5.0;
    const salesTax = 102.0;
    const grandTotal = subtotal + shipping + salesTax;
    const [phone, setPhone] = useState("");
    const [isFocused, setIsFocused] = useState(false);
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
        <div className="px-6 py-5">
            <Breadcrumbs title={"Your Cart"} subTitle={true} subHeadingTitle={"Designer Jewelry"} thirdTitle={true} thirdHeadingTitle={"Abrill cutout gold ring"} thirdredirect={"/component/productdetail"} redirect={"/component/weddingrings"} />
            <h4 className="text-center py-4 text-3xl font-poiretOne text-[#27272A] font-bold">
                Checkout            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">

                <div className="flex-1 bg-white pt-6">
                    <h2 className="text-2xl font-semibold text-[#18181B] mb-4">Shipping Information</h2>
                    <form className="grid grid-cols-1 gap-8 pt-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium weight text-[#18181B]">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleInputChange}
                                className={`mt-3 w-full border ${formValues.fullName ? "border-black" : "border-gray-300"
                                    } rounded-md px-2 py-3 text-sm hover:border-black placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
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
                                className={`mt-3 w-full border ${formValues.email ? "border-black" : "border-gray-300"
                                    } rounded-md px-2 py-3 hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                placeholder="Enter email address"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium weight text-[#18181B]">Phone Number *</label>
                            <div className="mt-3">
                                <PhoneInput
                                    country={"us"}
                                    value={phone}
                                    enableSearch={true}
                                    onChange={(phone) => setPhone(phone)}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    placeholder="Enter Phone Number"
                                    inputStyle={{
                                        width: "100%",
                                        height: "44px",
                                        fontSize: "16px",
                                        borderRadius: "6px",
                                        border: `2px solid ${isFocused || phone ? "black" : "#ccc"
                                            }`,
                                        paddingLeft: "50px",
                                        transition: "border-color 0.3s ease",
                                    }}
                                    buttonStyle={{
                                        borderRadius: "4px 0 0 4px",
                                        borderRight: "1px solid #ccc",
                                    }}
                                    dropdownStyle={{
                                        width: "300px",
                                    }}
                                />
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium weight text-[#18181B]">Country</label>
                            <div className="mt-3">
                                <Select
                                    options={options}
                                    value={selectedCountry}
                                    onChange={setSelectedCountry}
                                    getOptionLabel={(e) => (
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img
                                                src={`https://flagcdn.com/w20/${e.value.toLowerCase()}.png`}
                                                alt={e.label}
                                                style={{ marginRight: "10px", width: "20px", height: "15px" }}
                                            />
                                            {e.label}
                                        </div>
                                    )}
                                    styles={{
                                        control: (base, state) => ({
                                            ...base,
                                            borderColor: state.isFocused ? "black" : base.borderColor,
                                            boxShadow: state.isFocused ? "0 0 0 1px black" : base.boxShadow,
                                            "&:hover": {
                                                borderColor: "black",
                                            },
                                            height: "44px",
                                        }),
                                        option: (base, state) => ({
                                            ...base,
                                            backgroundColor: state.isSelected ? "black" : state.isFocused ? "#f0f0f0" : "white",
                                            color: state.isSelected ? "white" : "black",
                                            "&:hover": {
                                                backgroundColor: "#f0f0f0",
                                            },
                                        }),
                                    }}
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium weight text-[#18181B]">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formValues.city}
                                    onChange={handleInputChange}
                                    className={`mt-3 w-full border ${formValues.city ? "border-black" : "border-gray-300"
                                        } rounded-md px-2 py-3  hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
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
                                    className={`mt-3 w-full border ${formValues.state ? "border-black" : "border-gray-300"
                                        } rounded-md px-2 py-3 text-sm hover:border-black placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
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
                                    className={`mt-3 w-full border ${formValues.zip ? "border-black" : "border-gray-300"
                                        } rounded-md px-2 py-3 text-sm hover:border-black placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                    placeholder="Enter ZIP code"
                                />
                            </div>

                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms-checkbox"
                                    className="w-6 h-6 rounded text-[#27272A] checked:bg-black font-gtAmerica border-2"
                                    defaultChecked={false}
                                    style={{ accentColor: '#18181B' }}
                                />
                                <label
                                    htmlFor="terms-checkbox"
                                    className=" text-sm text-[#71717A] font-medium"
                                >
                                    I have read and agree to the Terms and Conditions.
                                </label>
                            </div>
                        </div>

                    </form>
                </div>

                <div className="flex-1 bg-white py-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Review your cart</h2>
                    <div  >
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex py-3 gap-4">
                                <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />
                                <div className="flex flex-col">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold font-gtAmerica">{item.name}</h3>
                                        <p className="text-sm text-[#5D5FEF]">1x</p>
                                    </div>
                                    <p className="font-semibold text-[#18181B]">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center  py-2">
                            <span className="text-[#71717A]">Subtotal :</span>
                            <span className="text-[#18181B] font-semibold">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center  py-3">
                            <span className="text-[#71717A]">Shipping :</span>
                            <span className="text-[#18181B] font-semibold">${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-3">
                            <span className="text-[#71717A]">Sales Tax :</span>
                            <span className="text-[#18181B] font-semibold">${salesTax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center py-5">
                            <p className="text-lg font-extrabold">Grand Total :</p>
                            <span className="text-lg font-bold text-[#1B864C]">${grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className="w-full bg-black text-white py-3 rounded-lg border   border-black hover:bg-white hover:text-black  ">
                        Pay Now
                    </button>
                    <div className="flex items-center gap-4 mt-6">
                        <img src="/assest/Frame (3).svg" alt="Secure Icon" className="w-6 h-6" />
                        <div>
                            <p className="text-[#18181B] font-semibold text-base">
                                Secure Checkout - SSL Encrypted
                            </p>
                            <p className="text-sm text-[#71717A] font-medium mt-2">
                                Ensuring your financial and personal details are secure during every transaction
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
