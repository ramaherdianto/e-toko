import React, { useContext } from 'react';
import { MyContext } from './Context';

const Products = () => {
    const { products } = useContext(MyContext);

    return (
        <section className='py-10'>
            <div className='flex justify-center sm:justify-between flex-wrap gap-y-8 sm:gap-y-8 sm:gap-x-4 md:gap-x-6 lg:gap-y-10 '>
                {products.map((product) => {
                    return (
                        <div
                            key={product.id}
                            className='group flex flex-col transition duration-500 ease-in-out hover:shadow-xl w-fit sm:w-[45%] md:w-[30%] lg:w-[21%] xl:w-[20%] items-center shadow-md rounded-sm cursor-pointer'
                        >
                            <div className='w-full overflow-hidden'>
                                <img
                                    src={product.image}
                                    alt=''
                                    className='w-full transition duration-[1s] ease-in-out group-hover:scale-[1.4]'
                                />
                            </div>
                            <div className='p-2 space-y-1'>
                                <h3 className='text-grey text-xs'>{product.category}</h3>
                                <h2 className='text-sm font-medium'>{product.brand}</h2>
                                <p className='text-dark text-xs whitespace-pre-wrap'>
                                    {product.description}
                                </p>
                            </div>
                            <div className='flex justify-between items-center w-full px-2 py-3'>
                                <h3 className='font-bold text-secondary'>$ {product.price}</h3>
                                <button className='flex items-center bg-primary text-light rounded-sm px-2 py-1 gap-x-1'>
                                    Buy
                                    <i className='ri-shopping-bag-2-line'></i>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Products;
