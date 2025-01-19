import Breadcrumbs from "@/pages/common/Breadcrumbs";
import { useState } from "react";
import { Filter } from "./filter/filter";
import { dialog } from "@material-tailwind/react";
import Product from "./product/product";

export default function Weddingrings() {
    const [dailog, setDailog] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    const handleFilterOpen = () => {
        setDailog(true);
    }
    const handleFilterClose = () => {
        setDailog(false);
    }

    return (
        <>
            <div className="px-6 py-5">
                <Breadcrumbs title={"Designer Jewelry"} />
                <h4 className="text-center py-2 text-3xl font-poiretOne text-[#27272A] font-extrabold">
                    Wedding Rings
                </h4>
                <div className="flex justify-between mt-6">
                    <button className="px-3 py-2 text-base font-medium text-black border border-black flex items-center gap-2 rounded-lg hover:bg-black hover:text-white transition group" onClick={handleFilterOpen}>
                        <img src="/assest/Filter 3.svg" alt="Arrow Icon" className="transition-all group-hover:brightness-0 group-hover:invert" />
                        Filters
                    </button>
                    <div className="flex items-center">
                        <p className="text-base font-gtAmerica text-[#71717A] font-normal">
                            Showing {currentPage}
                        </p>
                        <p className="text-base font-gtAmerica text-[#71717A] font-normal mx-2">
                            -
                        </p>
                        <p className="text-base font-gtAmerica text-[#000000] font-normal">
                            60 of 323
                        </p>
                    </div>
                </div>
                <Product setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>

            {dailog &&
                <Filter open={dialog} close={handleFilterClose} />}
        </>
    );
}
