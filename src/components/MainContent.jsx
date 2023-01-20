import React from 'react';
import { Provider } from './Contex';
import Home from './Home';

const MainContent = () => {
    return (
        <>
            <Provider>
                <Home />
            </Provider>
        </>
    );
};

export default MainContent;
