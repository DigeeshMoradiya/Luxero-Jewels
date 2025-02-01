import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleaccount = (e) => {
        e.preventDefault();
        router.push('/component/account');
    };
    return (
        <>
            <header className="bg-black text-white">
                <div className="bg-[#18181B] text-center py-2 text-sm font-gtAmerica px-2">
                    Explore an incomparable world with Luxero Jewels Collection of Solitaire Rings.
                </div>

                {/* Main Navbar */}
                <div className="container mx-auto flex items-center justify-between px-6 bg-[#18181B]">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/assest/Frame 50.png"
                            alt="Luxero Jewels Logo"
                            className="w-auto h-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 font-gtAmerica uppercase text-[#FAFAFA]">
                        <a href="#" className="hover:text-gray-400">High Jewellery</a>
                        <a href="#" className="hover:text-gray-400">Engagement & Bridal</a>
                        <a href="#" className="hover:text-gray-400">Gifts</a>
                        <a href="#" className="hover:text-gray-400">Men</a>
                        <a href="#" className="hover:text-gray-400">Women</a>
                    </nav>
                    <div className="md:flex hidden justify-center space-x-4 text-[#FAFAFA]">
                        <div className="flex items-center gap-2">
                            <img src='/assest/Search.svg' />
                            <a href="#" className="hover:text-gray-400">Search</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src='/assest/Profile.svg' />
                            <div className="hover:text-gray-400 cursor-pointer" onClick={(e) => handleaccount(e)}>Account</div>
                        </div>
                    </div>
                    <button
                        className="md:hidden text-gray-400 hover:text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>


                <div
                    className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out bg-[#18181B] ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                >
                    <nav className="px-6 py-4 space-y-4 text-center font-gtAmerica uppercase text-[#FAFAFA]">
                        <a href="#" className="block hover:text-gray-400">High Jewellery</a>
                        <a href="#" className="block hover:text-gray-400">Engagement & Bridal</a>
                        <a href="#" className="block hover:text-gray-400">Gifts</a>
                        <a href="#" className="block hover:text-gray-400">Men</a>
                        <a href="#" className="block hover:text-gray-400">Women</a>
                        <div className="flex justify-center space-x-4 text-[#FAFAFA]">
                            <div className="flex items-center gap-2">
                                <img src='/assest/Search.svg' />
                                <a href="#" className="hover:text-gray-400">Search</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src='/assest/Profile.svg' />
                                <div className="hover:text-gray-400 cursor-pointer" onClick={(e) => handleaccount(e)}>Account</div>
                            </div>

                        </div>
                    </nav>
                </div>
            </header>

        </>
    );
}
