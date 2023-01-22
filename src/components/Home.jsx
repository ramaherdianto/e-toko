import React from 'react';
import { useContext } from 'react';
import Banner from './Banner';
import { MyContext } from './Context';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <header className='max-w-7xl mx-auto mt-20 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0'>
                <Banner />
            </header>
        </>
    );
};

export default Home;
