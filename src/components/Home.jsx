import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Navbar from './Navbar';
import Products from './Products';
import SearchProducts from './SearchProducts';

const Home = () => {
    return (
        <>
            <Navbar />
            <header className='max-w-7xl mx-auto mt-20 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0'>
                <Banner />
            </header>
            <main className='max-w-7xl mx-auto mt-10 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0'>
                <Categories />
                <SearchProducts />
                <Products />
            </main>
        </>
    );
};

export default Home;
