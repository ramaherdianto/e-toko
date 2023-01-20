import React from 'react';
import { Provider } from './Context';
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
