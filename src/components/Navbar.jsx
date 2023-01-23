import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <>
            <nav
                className={
                    scrolled
                        ? 'bg-light shadow-lg fixed top-0 w-full z-10 transition duration-300 ease-in-out'
                        : 'bg-light fixed top-0 w-full z-10'
                }
            >
                <div className='max-w-7xl mx-auto'>
                    <div className='flex items-center h-16 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0'>
                        <div className='flex items-center w-full justify-between gap-16'>
                            <div className='flex-shrink-0'>
                                <img
                                    className='h-8 w-8'
                                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                                    alt='Workflow'
                                />
                            </div>
                            <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>
                                <div className='flex items-center justify-end md:pl-[4rem] lg:pl-[4rem] xl:pl-[4rem] 2xl:pl-[4rem] space-x-3'>
                                    <a
                                        href='#'
                                        className='relative text-primary px-3 py-2 rounded-md text-[12px] font-medium after:absolute after:left-[13px] after:bottom-1 after:w-[50%] after:h-[2px] after:bg-primary'
                                    >
                                        Home
                                    </a>

                                    <a
                                        href='#'
                                        className='relative transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-[13px] after:bottom-1 after:w-0 after:h-[2px] hover:after:w-[50%] hover:after:h-[2px] after:bg-primary hover:text-white px-3 py-2 rounded-md text-[12px] font-normal'
                                    >
                                        About
                                    </a>

                                    <a
                                        href='#'
                                        className='relative after:absolute after:top-2 after:right-0 after:w-[6px] after:h-[6px] after:bg-primary after:rounded-[50%]'
                                    >
                                        <i className='ri-shopping-bag-line text-lg'></i>
                                    </a>

                                    <a
                                        href='#'
                                        className='relative transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-[13px] after:bottom-1 after:w-0 after:h-[2px] hover:after:w-[50%] hover:after:h-[2px] after:bg-primary hover:text-white px-3 py-2 rounded-md text-[12px] font-normal'
                                    >
                                        Category
                                    </a>

                                    <a
                                        href='#'
                                        className='relative transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-[13px] after:bottom-1 after:w-0 after:h-[2px] hover:after:w-[50%] hover:after:h-[2px] after:bg-primary hover:text-white px-3 py-2 rounded-md text-[12px] font-normal'
                                    >
                                        Product
                                    </a>
                                </div>
                            </div>
                            <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block'>
                                <div className='flex items-center gap-2'>
                                    <a
                                        href='#'
                                        className='bg-light text-primary border border-primary transition-all duration-300 ease-in-out hover:border-secondary hover:bg-secondary hover:text-light flex items-center pt-[6px] pb-[8px] px-[12px] text-[12px] h-fit rounded-sm '
                                    >
                                        Sign Up
                                    </a>

                                    <a
                                        href='#'
                                        className='bg-primary border border-primary hover:border-secondary transition-all duration-300 ease-in-out hover:bg-secondary hover:text-light flex items-center pt-[6px] pb-[8px] px-[12px] text-[12px] h-fit rounded-sm text-light'
                                    >
                                        Login
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 lg:hidden xl:hidden 2xl:hidden'>
                            <a
                                href='#'
                                className='relative text-lg after:absolute after:top-[7px] after:right-0 after:w-[6px] after:h-[6px] after:bg-primary after:rounded-[50%]'
                            >
                                <i className='ri-shopping-bag-line'></i>
                            </a>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type='button'
                                className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                                aria-controls='mobile-menu'
                                aria-expanded='false'
                            >
                                <span className='sr-only'>Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className='block h-6 w-6'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M4 6h16M4 12h16M4 18h16'
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className='block h-6 w-6'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter='transition ease-out duration-100 transform'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-100 transform'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    <div
                        className='block sm:block lg:hidden xl:hidden 2xl:hidden shadow-sm'
                        id='mobile-menu'
                    >
                        <div className='flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            <a
                                href='#'
                                className=' transition-all duration-300 ease-in-out text-dark relative px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-light'
                            >
                                Home
                            </a>

                            <a
                                href='#'
                                className=' transition-all duration-300 ease-in-out text-dark relative px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-light'
                            >
                                About
                            </a>

                            <a
                                href='#'
                                className=' transition-all duration-300 ease-in-out text-dark relative px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-light'
                            >
                                Category
                            </a>

                            <a
                                href='#'
                                className=' transition-all duration-300 ease-in-out text-dark relative px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-light'
                            >
                                Product
                            </a>
                        </div>
                        <div className='block sm:block md:block lg:hidden'>
                            <div className='flex flex-col px-2 pt-2 pb-3 space-y-4 sm:px-3'>
                                <a
                                    href='#'
                                    className='bg-light text-primary border border-primary transition-all duration-300 ease-in-out hover:border-secondary hover:bg-secondary hover:text-light flex justify-center items-center pt-2 pb-[12px] px-[18px] rounded-md '
                                >
                                    Sign Up
                                </a>

                                <a
                                    href='#'
                                    className='bg-primary border border-primary hover:border-secondary transition-all duration-300 ease-in-out hover:bg-secondary hover:text-light flex justify-center items-center pt-2 pb-[12px] px-[18px] rounded-md text-light'
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </Transition>
            </nav>
        </>
    );
};

export default Navbar;
