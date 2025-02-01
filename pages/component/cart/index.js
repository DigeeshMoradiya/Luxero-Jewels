import Breadcrumbs from '@/pages/common/Breadcrumbs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Cart() {
    const router = useRouter();

    const cartItems = [
        { id: 1, name: 'Pi Pizza Oven', price: 449.99, image: '/assest/Frame 147.png' },
        { id: 2, name: 'Pi Pizza Oven', price: 449.99, image: '/assest/Frame 147.png' },
        { id: 3, name: 'Pi Pizza Oven', price: 449.99, image: '/assest/Frame 147.png' },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const salesTax = 102.0;
    const grandTotal = subtotal + salesTax;
    const [count, setCount] = useState(1);

    const handlecheckout = () => {
        router.push('/component/checkout');
    };

    return (
        <div className="px-6 py-5">
            <Breadcrumbs title={"Your Cart"} subTitle={true} subHeadingTitle={"Designer Jewelry"} thirdTitle={true} thirdHeadingTitle={"Abrill cutout gold ring"} thirdredirect={"/component/productdetail"} redirect={"/component/weddingrings"} />
            {/* Cart Header */}
            <h4 className="text-center py-2 text-3xl font-poiretOne text-[#27272A] font-extrabold">
                Your Cart ({cartItems.length} Items)
            </h4>

            {/* Table Heading */}
            <div className="hidden sm:block mt-6">
                <div className="grid grid-cols-12 py-3 px-4 font-semibold text-base text-gray-700">
                    <div className="col-span-6">Item</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-300">
                {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 sm:gap-0 py-6 px-4">
                        {/* Item Details */}
                        <div className="sm:col-span-6 flex items-center gap-4">
                            <Image src={item.image} alt={item.name} width={120} height={120} className="rounded-md" />
                            <div>
                                <h2 className="font-semibold text-lg">{item.name}</h2>
                                <p className="text-sm text-green-600">(Estimated Ship Date: June 6th)</p>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="sm:col-span-2 text-center text-gray-700">${item.price.toFixed(2)}</div>

                        {/* Quantity Controls */}
                        <div className="sm:col-span-2 flex justify-center items-center">
                            <div className="flex items-center border rounded-md overflow-hidden">
                                <button
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                    className="w-8 h-8 bg-black text-white hover:bg-gray-800"
                                >
                                    -
                                </button>
                                <div className="w-12 h-8 flex items-center justify-center bg-gray-100">{count}</div>
                                <button
                                    onClick={() => setCount(count + 1)}
                                    className="w-8 h-8 bg-black text-white hover:bg-gray-800"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div></div>
                        <div className="flex items-end">
                            <div className="text-center text-gray-700 flex-grow">
                                ${(item.price * count).toFixed(2)}
                            </div>
                            <img src='/assest/Frame (2).svg' className="text-red-500 text-xl  w-5 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="flex flex-col items-end mt-6">
                <div className="w-full sm:w-3/4 lg:w-1/2 p-4   ">
                    <div className="flex justify-between items-center border-b-2 py-3">
                        <span className="text-gray-500">Subtotal:</span>
                        <span className="text-[#18181B] font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center border-b-2 py-3">
                        <span className="text-gray-500">Sales Tax:</span>
                        <span className="text-[#18181B] font-semibold">${salesTax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700 font-semibold">Grand Total:</span>
                        <span className="text-[#1B864C] font-bold text-xl">${grandTotal.toFixed(2)}</span>
                    </div>
                    <button
                        className="mt-4 w-full bg-black text-white py-3 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black"
                        onClick={handlecheckout}
                    >
                        Check out
                    </button>
                </div>
            </div>
        </div>
    );
}
