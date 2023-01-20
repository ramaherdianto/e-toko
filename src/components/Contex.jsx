import Axios from 'axios';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

const MyContext = createContext(null);

const Provider = ({ children }) => {
    const Api = 'https://api.creativeacademyid.com';
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [banners, setBanners] = useState([]);

    const getProducts = async () => {
        try {
            const response = await Axios.get(`${Api}/product`);
            setProducts(response.data);
        } catch (error) {
            console.error('Consuming API is Failed', error);
        }
    };

    const getCategories = async () => {
        try {
            const response = await Axios.get(`${Api}/category`);
            setCategories(response.data);
        } catch (error) {
            console.error('Consuming API is Failed', error);
        }
    };

    const getBanners = async () => {
        try {
            const response = await Axios.get(`${Api}/banner`);
            setBanners(response.data);
        } catch (error) {
            console.log('Consuming API is Failed', error);
        }
    };

    useEffect(() => {
        getProducts();
        getCategories();
        getBanners();
    }, []);
    return (
        <>
            <MyContext.Provider value={{ products, categories, banners }}>
                {children}
            </MyContext.Provider>
        </>
    );
};

export { MyContext, Provider };
