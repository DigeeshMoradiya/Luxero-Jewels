"use client";
import { useRouter } from "next/navigation";

const ProductReviewDetail = ({
    title,
    sku,
    price,
    originalPrice,
    reviews = [
        {
            profileImage: "/assest/Ellipse 2521.png",
            name: "Helen M.",
            date: "Yesterday",
            rating: 4,
            comment: "Excellent product! Highly recommend it.",
            likes: 35,
            replies: 2,
        },
        {
            profileImage: "/assest/Ellipse 2521.png",
            name: "John D.",
            date: "2 days ago",
            rating: 5,
            comment: "Perfect for my needs, great quality!",
            likes: 20,
            replies: 3,
        },
        {
            profileImage: "/assest/Ellipse 2521.png",
            name: "John D.",
            date: "2 days ago",
            rating: 5,
            comment: "Perfect for my needs, great quality!",
            likes: 20,
            replies: 3,
        },
    ],
}) => {
    const navigate = useRouter();

    const handleAddToCart = () => {
        navigate("/check-out");
    };

    const getStarPercentage = (count, total) => (total ? (count / total) * 100 : 0);

    const reviewSummary = {
        averageRating: 4.8,
        totalReviews: 43,
        stars: [28, 9, 4, 1, 1], // Number of reviews for 5, 4, 3, 2, 1 stars
    };

    return (
        <div className="w-full">


            <div className="flex px-5 mt-5 gap-7"><h2 className="font-medium text-2xl">Details</h2><h2 className="font-semibold text-2xl text-[#000000]">Reviews</h2></div>

            {/* Reviews Section */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="py-4">

                    {reviews.map((review, index) => (
                        <div key={index} className={`${index < reviews.length - 1 ? 'border-b mb-6 pb-4 ' : ''}`}
                        >
                            <div className="flex items-center gap-3">
                                {/* Profile Image */}
                                <img
                                    src={review.profileImage}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                {/* Name and Rating */}
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-base font-semibold">{review.name}</h4>
                                        <p className="text-sm text-gray-500 font-medium flex items-center">{review.date}</p>
                                    </div>

                                    <div className="flex items-center mt-1">
                                        {Array.from({ length: 5 }, (_, i) => (

                                            <svg
                                                className={`w-4 h-4 me-1 ${i < review.rating ? "text-[#FFC107]" : "text-[#71717A]"
                                                    }`}

                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <p className="text-sm  font-semibold  mt-5 text-[#000000]">{review.comment}</p>
                            <div className="flex items-center gap-4 mt-5 text-[#18181B] text-sm">
                                <button className="hover:text-black">Reply</button>
                                <div className="flex gap-2"><img src="/assest/Frame.svg" className="cursor-pointer" />  <p className="text-base">{review.likes}</p></div>
                                <div className="flex gap-2"><img src="/assest/Frame (1).svg" className="cursor-pointer" />  <p className="text-base">{review.likes}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-4">

                    <div className="flex items-center gap-4 justify-between mb-8">
                        <div className="flex items-center gap-1 text-[#FFC107]">
                            {Array.from({ length: 5 }, (_, i) => (
                                <svg class="w-8 h-8 text-[#FFC107] me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}

                        </div>
                        <div className="text-xl font-medium">{reviewSummary.averageRating}</div>
                    </div>
                    <div className="mt-4">
                        {reviewSummary.stars.map((count, index) => (
                            <div key={index} className="flex items-center gap-11 mb-5">
                                <span className="text-sm text-[#18181B] font-semibold">{5 - index}</span>
                                <div className="w-full bg-gray-200 h-4 rounded">
                                    <div
                                        className="bg-[#FFC107] h-4 rounded"
                                        style={{
                                            width: `${getStarPercentage(
                                                count,
                                                reviewSummary.totalReviews
                                            )}%`,
                                        }}
                                    />
                                </div>
                                <span className="text-sm text-[#18181B] font-semibold">{count}</span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>


        </div >
    );
};

export default ProductReviewDetail;
