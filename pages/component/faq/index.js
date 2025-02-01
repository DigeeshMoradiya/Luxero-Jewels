import Breadcrumbs from '@/pages/common/Breadcrumbs';
import { useState } from 'react';

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            title: "The Order",
            content: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account."
        },
        { title: "How can I Cancel It ?", content: "To cancel your order, go to your account settings and follow the cancellation steps." },
        { title: "Waters one you'll creeping?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Divide called?", content: "This is an example answer for the question." },
        { title: "Returns, exchanges and complaints", content: "You can return or exchange items within 30 days of purchase." },
        { title: "How can I cancel it?", content: "Cancellation is available within 24 hours of order placement." }
    ];

    return (
        <div className="px-6 py-5">
            {/* Breadcrumbs */}
            <Breadcrumbs
                title="FAQ'S"

                redirect={"/"}
            />

            {/* FAQ Header */}
            <h4 className="text-center py-2 text-3xl font-poiretOne text-[#27272A] font-extrabold">
                FAQ’S
            </h4>

            {/* FAQ List */}
            <div className="mt-6 max-w-4xl mx-auto space-y-5">
                {faqs.map((faq, index) => (
                    <div key={index} className={`border rounded-lg p-4 ${openIndex === index ? "border-[#18181B] bg-[#D4D4D8]" : "border-[#E4E4E7] bg-gray-100 hover:bg-gray-200"}`}>
                        <div
                            onClick={() => toggleFAQ(index)}
                            className={`w-full flex justify-between items-center cursor-pointer text-left   transition rounded-lg ${openIndex === index ? "bg-[##E4E4E7] " : " "} `}
                        >
                            <p className={`font-semibold text-lg ${openIndex === index ? "text-[#18181B]" : "text-[#71717A]"}`}>{faq.title}</p>


                            <div className="text-gray-500">{openIndex === index ? <img src='/assest/Arrow - Up 2.svg' /> : <img src='/assest/Arrow - Down 2.svg' />}</div>
                        </div>
                        {openIndex === index && (
                            <>
                                <div className='border-t-2 my-3 border-white'>
                                </div>

                                <h3 className="text-sm font-medium text-[#71717A] font-gtAmerica rounded-b-lg">
                                    {faq.content}
                                </h3>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
