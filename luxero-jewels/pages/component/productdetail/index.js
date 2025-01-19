import Breadcrumbs from "@/pages/common/Breadcrumbs";
import { useState } from "react";
import { Filter } from "./filter/filter";
import { dialog } from "@material-tailwind/react";
import Product from "./product/product";
import ProductDetailsLayout from "./product-details-layout";
import Productreviewdetail from "./product-review-detail";
import Suggestionitems from "./suggestionitems";

export default function Weddingrings() {
    const [dailog, setDailog] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    const handleFilterOpen = () => {
        setDailog(true);
    }
    const handleFilterClose = () => {
        setDailog(false);
    }

    const SIDE_DATA = [
        {
            title: 'Ask Query',
            buttons: [
                'Customer',
                'Return & Policy',
                'Order',
                'Mail'
            ]
        },
        {
            title: 'Recommendations',
            buttons: [
                'Recently Viewed',
                'Similar Items',
                'Matching Sets'
            ]
        }
    ]

    const images = [
        "/assest/Frame 105.png",
        "/assest/Frame 105.png",
        "/assest/Frame 105.png",
        "/assest/Frame 105.png",
        "/assest/Frame 105.png",
    ];

    const productDetails = {
        title: "Abrill cutout gold ring",
        sku: "123456789",
        price: "199.00",
        originalPrice: "3000.00",
        metals: ["vvs1", "vvs2", "VS1", " VS2", "SI1", 'SI2'],
        tones: ["White Gold", "Yellow Gold"],
        stoneSelections: ["Find Specific Diamond", "Diamond Recommendations"],
        type: ["Lab", "Diamond Recommendations"],
        totalCarat: ["1.00"],
        color: ["G"],
        clarity: ["SI1/SI2"],
        cut: ["Excellent"],
        certificate: ["GIA"],
        sizes: ["5", "6", "7", "8", "9"],
        engravingPlaceholder: "Enter engraving text",
        deliveryInfo: "Delivered in 2-4 weeks approx. Check your P.O. Box",
        stockInfo: "Please check again if STOCK is available for 2-3 day delivery.",
        variant: "default",
        shape: "Round"
    };

    const cards = {
        title: "Ready Stock for Quick Delivery",
        subtitle: "Store Jewelry",
        data: Array.from({ length: 8 })
    }
    return (
        <>
            <div className="px-6 py-5">
                <Breadcrumbs title={"Abrill cutout gold ring"} subTitle={true} subHeadingTitle={"Designer Jewelry"} redirect={"/component/weddingrings"}></Breadcrumbs>
                <ProductDetailsLayout images={images} productDetails={productDetails} SIDE_DATA={SIDE_DATA} cards={cards} />
                <Productreviewdetail />
                <Suggestionitems />
            </div>




            {dailog &&
                <Filter open={dialog} close={handleFilterClose} />}
        </>
    );
}
