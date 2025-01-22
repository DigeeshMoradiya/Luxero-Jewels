import ProductDetailsForm from "../product-details-form";
import ImageCarousel from "../product-images-carousel";

export default function ProductDetailsLayout({ children, images = [], productDetails = {}, SIDE_DATA = [], cards = {
    data: [],
    title: "",
    subtitle: ""
} }) {
    return (
        <div className="py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-4">
                <div className="w-full col-span-4 bg-white">
                    <div className="flex flex-col lg:flex-row">
                        <div data-aos="fade-right" className="w-full lg:w-1/2">
                            <img src="/assest/Frame 96.png" alt="Product Image" className="w-full h-auto object-cover border mb-4 rounded-2xl" />
                            <ImageCarousel images={images || []} />
                        </div>
                        <div data-aos="fade-down" className="w-full lg:w-1/2 lg:pl-6 gap-4">
                            <ProductDetailsForm {...productDetails} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}