'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'

const OptionSelector = ({ label, selectedOption, onSelect, variant = 'default' }) => {
    const router = useRouter()


    const options = ["vvs1", "vvs2", "VS1", " VS2", "SI1", 'SI2']
    const carat = ["9kt", "10kt", "14kt", " 18kt", "22kt"]
    const button = ["Gold", "Silver"]

    const handleNavigation = () => {

        if (selectedOption === 'Diamond Recommendations') {
            router.push('/product-detail-compare');
        }
    };

    React.useEffect(() => {
        handleNavigation();
    }, [selectedOption]);

    useEffect(() => {
        if (!selectedOption && options?.length > 0) {
            onSelect(options[0]);
        }
    }, [selectedOption, options, onSelect]);

    return (
        <div className="">
            <label className={`block text-nowrap sm:text-base text-sm text-[#212121] mb-1 ${variant === 'second' ? 'grid grid-cols-3' : ''}`}>
                <p class="text-sm font-gtAmerica text-[#71717A]">Diamond Quality</p>
            </label>

            <div className="flex gap-2 flex-wrap items-center mb-10">
                {options?.map((option, index) => (
                    <div class="flex items-center me-4">
                        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-[#18181B] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" style={{ accentColor: '#18181B' }} />
                        <label for="inline-radio" className="ms-2 text-base font-gtAmerica font-medium text-[#18181B] dark:text-gray-300">{option}</label>
                    </div>
                ))}

            </div>
            <label className={`block text-nowrap sm:text-base text-sm text-[#212121] mb-1 ${variant === 'second' ? 'grid grid-cols-3' : ''}`}>
                <p class="text-sm font-gtAmerica text-[#71717A]">Material Type</p>
            </label>
            <div className="flex gap-2 flex-col md:flex-row sm:w-[70%] md:w-full flex-wrap mb-10">
                <div className="flex gap-2 md:flex-row sm:w-[70%] md:w-full">
                    {button?.map((option, index) => (
                        <button key={index} onClick={() => onSelect(option)} className={"sm:px-4 px-2 py-2 md:px-5 md:py-2 font-light font-gtAmerica sm:text-base text-xs border text-nowrap " + (selectedOption === option ? 'bg-[#18181B] text-[#FAFAFA]' : 'border-gray-300 text-[#71717A]')}>{option}</button>
                    ))}
                </div>
            </div>

            <label className={`block text-nowrap sm:text-base text-sm text-[#212121] mb-2 ${variant === 'second' ? 'grid grid-cols-3' : ''}`}>
                <p class="text-sm font-gtAmerica text-[#71717A]">Material Quality</p>
            </label>

            <div className="flex gap-2 flex-wrap items-center mb-4">
                {carat?.map((option, index) => (
                    <div class="flex items-center me-4">
                        <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-[#18181B] bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600" style={{ accentColor: '#18181B' }} />
                        <label for="inline-radio" className="ms-2 text-base font-gtAmerica font-medium text-[#18181B] dark:text-gray-300">{option}</label>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default OptionSelector;