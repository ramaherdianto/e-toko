import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';
import { MyContext } from './Context';

const Banner = () => {
    const { banners } = useContext(MyContext);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                    nextEl: '.image-swiper-button-next',
                    prevEl: '.image-swiper-button-prev',
                    disabledClass: 'swiper-button-disabled',
                }}
                modules={[Autoplay, Navigation]}
                className='mySwiper relative min-h-[50%]'
            >
                {banners.map((banner) => {
                    return (
                        <SwiperSlide className='flex items-center justify-center'>
                            <img src={banner.image} className='w-full' alt='' />
                        </SwiperSlide>
                    );
                })}
                <div className='swiper-button image-swiper-button-next flex items-center justify-center absolute top-[40%] sm:top-[45%] md:top-[47.5%]  right-3 sm:right-6 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] rounded-[50%] bg-secondary z-10 cursor-pointer '>
                    <i className='ri-arrow-right-fill text-[18px] text-[#eaeaea]'></i>
                </div>
                <div className='swiper-button image-swiper-button-prev flex items-center justify-center absolute top-[40%] sm:top-[45%] md:top-[47.5%]  left-3 sm:left-6 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] rounded-[50%] bg-secondary z-10 cursor-pointer'>
                    <i className='ri-arrow-left-fill text-[18px] text-[#eaeaea]'></i>
                </div>
            </Swiper>
        </>
    );
};

export default Banner;
