import React, { useEffect, useState } from "react";

export default function Filter({ open, close }) {


    const [category, setCategory] = useState("Category")

    // useEffect(() => {
    //     if (open) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "";
    //     }
    // }, [open]);

    const handleCategory = (value) => {
        setCategory(value)
    }
    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="bg-white shadow-xl w-full max-w-3xl rounded-lg">

                        <div className="flex items-center justify-between px-4 py-3 bg-[#18181B]">
                            <h3
                                className="text-lg font-semibold text-white font-gtAmerica"
                                id="modal-title"
                            >
                                Filter
                            </h3>
                            <button
                                onClick={close}
                                className="text-white hover:text-gray-300"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="flex">
                            <div className="w-1/3 border">
                                <ul className="">
                                    {[
                                        "Category",
                                        "Material",
                                        "Gemstone",
                                        "Price Range",
                                        "Occasion",
                                        "Design Style",
                                        "Gender",
                                        "Weight",
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className={`hover:bg-[#E4E4E7] hover:text-[#27272A]  cursor-pointer  font-gtAmerica px-3   border-b-2 py-4 font-semibold ${category === item ? "text-[#27272A] bg-[#E4E4E7]" : "text-[#52525B]"}`}
                                            onClick={() => handleCategory(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-2/3 p-4">
                                {category === "Category" &&

                                    <div className="space-y-5">
                                        {[
                                            "Rings",
                                            "Necklaces",
                                            "Earrings",
                                            "Bracelets",
                                            "Anklets",
                                        ].map((category, index) => (
                                            <div key={category} className="flex  items-center">
                                                <input
                                                    id={category}
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded text-[#27272A] checked:bg-black font-gtAmerica"
                                                    defaultChecked={index < 2 ? true : false}
                                                    style={{ accentColor: '#18181B' }}

                                                />
                                                <label
                                                    htmlFor={category}
                                                    className="ml-2 text-sm text-[#27272A]"
                                                >
                                                    {category}
                                                </label>
                                            </div>
                                        ))}
                                    </div>}

                                <div className="flex justify-end gap-5">
                                    <button
                                        className="text-[#27272A] text-base font-medium"
                                        onClick={() => {
                                            // Logic to clear all checkboxes
                                            document
                                                .querySelectorAll(
                                                    'input[type="checkbox"]'
                                                )
                                                .forEach((input) =>
                                                    input.checked = false
                                                );
                                        }}
                                    >
                                        Clear All
                                    </button>

                                    <button className="px-8 py-2 text-base font-medium text-white bg-black flex items-center gap-2 rounded-lg    transition group" onClick={close}>
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
