"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DropdownSelector from './dropdown-selector';
import OptionSelector from './option-selector';
import PriceDisplay from './price-display';
import SectionTitle from './section-title';

const ProductDetailsForm = ({
    title,
    sku,
    price,
    originalPrice,
    metals,
    tones,
    stoneSelections,
    totalCarat,
    color,
    clarity,
    cut,
    type,
    certificate,
    sizes,
    engravingPlaceholder,
    deliveryInfo,
    stockInfo,
    variant = 'default'
}) => {
    const router = useRouter();

    const navigate = useRouter(); // Initialize navigate function
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValues, setSelectedValues] = useState({
        metal: metals[0] ?? '',
        tone: tones[0] ?? '',
        stoneSelection: stoneSelections[0] ?? '',
        size: sizes[0] ?? '',
        totalCarat: totalCarat[0] ?? '',
        color: color[0] ?? '',
        clarity: clarity[0] ?? '',
        cut: cut[0] ?? '',
        certificate: certificate[0] ?? '',
        type: type[0] ?? '',
        shape: 'round' ?? '',
    });


    const handlecart = () => {
        router.push("/component/cart")
    }


    return <div className="w-full">
        <SectionTitle title={title} subtitle={`(SKU: ${sku})`} />
        <PriceDisplay price={price} originalPrice={originalPrice} />
        <div className='mb-10 flex flex-col gap-4'>
            <OptionSelector
                label="Metal"
                options={metals}
                selectedOption={selectedValues.metal}
                onSelect={(metal) => setSelectedValues({ ...selectedValues, metal })}
            />

        </div>


        <div className='flex justify-between gap-5'>
            <button className="flex w-full px-3 py-4 text-base font-medium text-white bg-black items-center gap-2 rounded-lg hover:bg-white hover:text-black transition group border hover:border-black justify-center" onClick={handlecart}>
                <img
                    src="/assest/Bag.svg"
                    alt="Arrow Icon"
                    className="transition-all group-hover:brightness-0 group-hover:invert group-hover:contrast-0 group-hover:grayscale"
                />
                Add to Cart
            </button>
            <button
                className={`w-16 h-14 flex items-center justify-center rounded-md bg-gray-300 hover:bg-gray-400`}
            >
                <img src="/assest/Heart.svg" alt="Next page" />
            </button>
        </div>

    </div>;
};

export default ProductDetailsForm;