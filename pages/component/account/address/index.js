import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
const Address = () => {
    const [address, setAddress] = useState(false)

    const options = countryList().getData();

    const [phone, setPhone] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null);

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
    const handleAddress = () => {
        setAddress(true)
    }
    const hanldeclose = () => {
        setAddress(false)
    }
    return (
        <div className="flex flex-col  h-full">
            <div className="flex mb-6 justify-between">
                <h2 className="text-2xl font-semibold  font-gtAmerica">Address</h2>
                {address &&
                    <img src="/assest/Frame (4).svg" className="w-5 cursor-pointer" onClick={hanldeclose} />}
            </div>

            {address ?
                <div className="flex flex-col">
                    <form className="grid grid-cols-1 gap-6 pb-4">
                        <div>
                            <label className="block text-sm font-semibold weight text-[#18181B]">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleInputChange}
                                className={`mt-2 w-full border ${formValues.fullName ? "border-black" : "border-gray-300"
                                    } rounded-md px-3 py-3 text-sm hover:border-black placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                placeholder="Enter your name"
                            />

                        </div>

                        <div>
                            <label className="block text-sm font-semibold weight text-[#18181B]">Address line 1</label>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                className={`mt-2 w-full border ${formValues.email ? "border-black" : "border-gray-300"
                                    } rounded-md px-2 py-3 hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                placeholder="Enter Address line 1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold weight text-[#18181B]">Address line 2</label>
                            <input
                                type="text"
                                name="city"
                                value={formValues.city}
                                onChange={handleInputChange}
                                className={`mt-2 w-full border ${formValues.city ? "border-black" : "border-gray-300"
                                    } rounded-md px-2 py-3  hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                placeholder="Enter Address line 2"
                            />
                        </div>




                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-semibold weight text-[#18181B]">Country</label>
                                <div className="mt-2">
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
                            <div>
                                <label className="block text-sm font-semibold weight text-[#18181B]">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formValues.city}
                                    onChange={handleInputChange}
                                    className={`mt-2 w-full border ${formValues.city ? "border-black" : "border-gray-300"
                                        } rounded-md px-2 py-3  hover:border-black text-sm placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                    placeholder="Enter city"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold weight text-[#18181B]">ZIP Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formValues.zip}
                                    onChange={handleInputChange}
                                    className={`mt-2 w-full border ${formValues.zip ? "border-black" : "border-gray-300"
                                        } rounded-md px-2 py-3 text-sm hover:border-black placeholder-[#71717A] placeholder:font-light placeholder:text-sm `}
                                    placeholder="Enter ZIP code"
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
                            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                                <label className="block text-sm font-semibold text-[#18181B]">
                                    Phone Number
                                </label>
                                <div className="mt-2">
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
                                            border: `2px solid ${isFocused || phone ? "black" : "#ccc"}`,
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

                            <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                                <button className="w-full bg-black text-white py-2 rounded-lg border border-black hover:bg-white hover:text-black">
                                    ADD ADDRESS
                                </button>
                            </div>
                        </div>






                    </form>
                </div>
                :
                <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                    <div className="text-center">
                        <h3 className="text-sm font-medium text-[#18181B] mb-4 font-gtAmerica">
                            You don’t have any addresses yet.
                        </h3>

                        <button className="px-6 py-1 text-base font-medium text-black border border-black   hover:bg-black hover:text-white transition group" onClick={handleAddress}>
                            ADD NEW
                        </button>
                    </div>
                </div>}

        </div>
    );
};

export default Address;
