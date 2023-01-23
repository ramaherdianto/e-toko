import React from 'react';

const SearchProducts = () => {
    return (
        <section className='py-10 mb-[20rem] flex flex-col justify-center items-center gap-8'>
            <h1 className='text-3xl font-semibold'>All Products</h1>
            <div className='flex flex-wrap justify-center gap-3'>
                <input
                    type='text'
                    className='py-3 px-4 transition duration-300 ease-in-out flex items-center w-[200px] sm:w-[437px] lg:w-[637px] drop-shadow-md focus:ring focus:ring-primary focus:outline-none rounded-sm'
                    placeholder='search something...'
                />
                <button
                    type='submit'
                    className='bg-primary transition duration-300 ease-in-out hover:bg-secondary text-light py-2 px-4 sm:py-1 sm:px-4 flex items-center justify-center rounded-sm'
                >
                    Search
                </button>
            </div>
        </section>
    );
};

export default SearchProducts;
