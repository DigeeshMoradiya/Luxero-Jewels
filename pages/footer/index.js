import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 md:px-20 lg:px-28 py-20 bg-black">
      {/* Footer Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Sign Up Section */}
        <div>
          <h4 className="mb-8 text-1xl md:text-1xl font-gtAmerica font-medium text-white uppercase">
            SIGN UP FOR LUXERO UPDATES
          </h4>
          <p className="mt-4 text-3xl font-semibold md:text-md text-white font-poiretOne">
            Join us for the holiday season to find unique gifts and discover the house’s latest news.
          </p>
          <button className="mt-6 px-6 py-2 text-sm font-medium text-white border border-white hover:bg-white hover:text-black transition">
            Subscribe
          </button>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="mb-8 text-1xl md:text-1xl font-gtAmerica font-medium text-white uppercase">MAY WE HELP YOU?</h4>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="#" className="underline text-white hover:text-gray-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/component/faq" className="underline text-white hover:text-gray-400 transition">
                FAQ's
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="mb-8 text-1xl md:text-1xl font-gtAmerica font-medium text-white uppercase">THE COMPANY</h4>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="/component/aboutus" className="underline text-white hover:text-gray-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="underline text-white hover:text-gray-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="underline text-white hover:text-gray-400 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="mt-10 flex justify-center">
        <img
          src="/assest/Frame 51.svg"
          alt="Luxero Jewels Logo"
          className="h-16 md:h-20"
        />
      </div>
    </footer>
  );
}
