import React from 'react';

const PriceDisplay = ({ price, originalPrice, variant = "deafult" }) => {
    return (
        <div className={`${variant === "second" ? "text-[#FF3B30] text-2xl font-semibold mb-10" : " text-xl font-semibold mb-10 text-[#18181B"}`}>
            ${price}
        </div>
    );
};

export default PriceDisplay;