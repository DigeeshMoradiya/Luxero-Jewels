import React from 'react';

const DropdownSelector = ({ label, options, selectedOption, onSelect, variant = 'default' }) => {
    return (
        <div className={`${variant === 'second' ? 'grid grid-cols-3 items-center ' : 'w-full'}`}>
            <label className="block text-text-nowrap sm:text-base text-sm text-[#212121]">{label}</label>
            <select className={`${variant === 'second' ? 'col-span-2' : 'w-full'} p-2 sm:text-base text-xs border border-gray-300 focus:outline-none`} value={selectedOption} onChange={(e) => onSelect(e.target.value)}>
                {options?.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default DropdownSelector;