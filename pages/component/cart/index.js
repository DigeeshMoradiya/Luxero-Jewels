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
    const salesTax = 102.00;
    const grandTotal = subtotal + salesTax;
    const [count, setCount] = useState(1);



    const handlecheckout = () => {
        router.push("/component/checkout")
    }


    return (
        <div className="px-6 py-5 sm:px-4 sm:py-6 md:px-8 md:py-10">
            {/* Cart Header */}
            <h4 className="text-center py-4 text-3xl font-poiretOne text-[#27272A] font-bold">
                Your Cart ( {cartItems.length} Items )
            </h4>

            {/* Table Heading */}
            <div className=" ">
                <div className="grid grid-cols-12 py-3 px-4 font-semibold text-base text-gray-700">
                    {/* Item Column with Icon */}
                    <div className="col-span-6 flex items-center gap-2">
                        <span>Item</span>
                    </div>

                    {/* Price Column */}
                    <div className="col-span-2 text-center">Price</div>

                    {/* Quantity Column */}
                    <div className="col-span-2 text-center">Quantity</div>

                    {/* Total Column */}
                    <div className="col-span-2 text-right">Total</div>
                </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-300">
                {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 items-center py-6 px-4">
                        {/* Item Details */}
                        <div className="col-span-6 flex items-center gap-4">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={120}
                                height={120}
                                className="rounded-md"
                            />
                            <div>
                                <h2 className="font-semibold text-lg">{item.name}</h2>
                                <p className="text-sm text-green-600">(Estimated Ship Date: June 6th)</p>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-center text-gray-700">${item.price.toFixed(2)}</div>

                        {/* Quantity Controls */}
                        <div className="col-span-2 flex justify-center items-center">
                            <div className="flex items-center border rounded-md overflow-hidden">
                                <button
                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                    className="w-8 h-8 bg-black text-white text-lg flex items-center justify-center hover:bg-gray-800"
                                >
                                    -
                                </button>
                                <div className="w-12 h-8 flex items-center justify-center bg-gray-100 text-black">
                                    {count}
                                </div>
                                <button
                                    onClick={() => setCount(count + 1)}
                                    className="w-8 h-8 bg-black text-white text-lg flex items-center justify-center hover:bg-gray-800"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div></div>
                        <div className="flex items-center">
                            <div className="text-center text-gray-700 flex-grow">
                                ${(item.price * count).toFixed(2)}
                            </div>
                            <img src='/assest/Frame (2).svg' className="text-red-500 text-xl  w-5 cursor-pointer" />
                        </div>

                    </div>
                ))}

            </div>
            <div className="flex justify-end">
                <div className="w-full max-w-lg p-4">
                    <div className="flex justify-between items-center border-b-2 py-3">
                        <span className="text-gray-500">Subtotal :</span>
                        <span className="text-[#18181B] font-semibold">$1,019.98</span>
                    </div>
                    <div className="flex justify-between items-center border-b-2 py-3">
                        <span className="text-gray-500">Sales Tax:</span>
                        <span className="text-[#18181B] font-semibold">$102.00</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                        <span className="text-gray-700 font-semibold">Grand Total:</span>
                        <span className="text-[#1B864C] font-bold text-2xl">$1,121.98</span>
                    </div>

                    <button className="flex w-full p-3 text-base font-medium text-white bg-black items-center gap-2 rounded-lg hover:bg-white hover:text-black transition group border hover:border-black justify-center" onClick={handlecheckout}>
                        Check out
                    </button>
                </div>
            </div>


        </div>

    );

}
