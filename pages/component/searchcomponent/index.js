import { useState } from "react";
import Modal from "react-modal";

// Make sure to set app element for accessibility

const SearchComponent = ({ isPopupOpen, closeModal }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="bg-white shadow-xl flex items-center justify-center p-8 rounded-lg transform transition-all duration-300 ease-in-out"
                style={{ transform: 'translateY(-100%)' }}
            >
                <div className="flex items-center gap-2">
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 border"
                        />
                    </div>
                    <button
                        onClick={closeModal}
                        className="p-2 bg-white border border-[#18181B] text-[#18181B]"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent
