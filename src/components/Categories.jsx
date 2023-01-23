import React, { useContext } from 'react';
import { MyContext } from './Context';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

const Categories = () => {
    const { categories } = useContext(MyContext);

    return (
        <section className='py-5'>
            <div className='bg-primary text-light max-w-fit pt-[6px] pb-2 px-3 rounded-sm'>
                <h1 className='text-base'>Product Categories</h1>
            </div>
            <div
                className='flex gap-y-6 gap-x-3 md:gap-x-9 lg:justify-between flex-wrap mt-10'
                id='categories-desktop'
            >
                {categories.map((category) => {
                    return (
                        <div
                            key={category.id}
                            className=' group flex flex-col justify-center text-center drop-shadow-md w-full sm:w-fit transition duration-500 ease-in-out hover:-translate-y-5 sm:hover:drop-shadow-xl lg:hover:drop-shadow-2xl bg-light rounded-sm cursor-pointer'
                        >
                            <div className='flex justify-center'>
                                <img src={category.image} alt='' />
                            </div>
                            <div className='bg-secondary transition duration-300 ease-in-out group-hover:bg-primary sm:p-2 rounded-b-sm'>
                                <h2 className='text-light font-semibold lowercase'>
                                    {category.description}
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                    },
                    300: {
                        slidesPerView: 2,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className='mySwiper py-8 sm:hidden'
            >
                {categories.map((category) => {
                    return (
                        <SwiperSlide key={category.id}>
                            <div className='group flex flex-col justify-center text-center drop-shadow-md w-full transition-all duration-500 ease-in-out hover:drop-shadow-xl bg-light rounded-b-sm'>
                                <div className='flex justify-center'>
                                    <img src={category.image} alt='' />
                                </div>
                                <div className='bg-secondary transition duration-300 ease-in-out group-hover:bg-primary p-2 rounded-sm'>
                                    <h2 className='text-light font-semibold lowercase'>
                                        {category.description}
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Categories;
