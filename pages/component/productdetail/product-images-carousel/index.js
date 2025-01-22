"use client"
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext  } from 'react-icons/md';

// Modal component for video
const VideoModal = ({ isOpen, onClose, videoSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div onClick={onClose} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
            <div className="relative">
                <button onClick={onClose} className="p-2 text-white">Close</button>
                <video src="https://www.youtube.com/watch?v=6Ab6dV19BDc" controls className="w-[50vw] h-[50vh" width="100%" height="100%" autoplay loop
                    muted></video>
            </div>
        </div>
    );
};

export default function ImageCarousel({ images, videoSrc }) {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleVideoClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex items-center">
            {/* <button onClick={() => swiperInstance?.slidePrev()} className="hidden sm:inline-flex">
                <MdNavigateBefore fontSize={20} />
            </button> */}
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Navigation]}
                loop
                onSwiper={setSwiperInstance}
            >
                {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        {index === 2 ? ( // Assuming the video is the third slide (index 2)
                            <div className="relative">
                                <img src={image} alt={`Thumbnail ${index}`} className="w-full h-auto object-cover" />
                                <button onClick={handleVideoClick} className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-2xl bg-white/30 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center"> </span> {/* Play icon */}
                                </button>
                            </div>
                        ) : (
                            <img src={image} alt={`Thumbnail ${index}`} className="w-full h-auto object-cover" />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <button onClick={() => swiperInstance?.slideNext()} className="hidden sm:inline-flex">
                <MdNavigateNext fontSize={20} />
            </button> */}

            {/* Video Modal */}
            <VideoModal isOpen={isModalOpen} onClose={closeModal} videoSrc={videoSrc} />
        </div>
    );
};