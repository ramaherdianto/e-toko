import React from 'react';
import { useContext } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import { MyContext } from './Context';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <header className='max-w-7xl mx-auto mt-20 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0'>
                <Banner />
            </header>
            <main className='max-w-7xl mx-auto mt-10 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0'>
                <Categories />
            </main>
        </>
    );
};

export default Home;
