import React from 'react';

import Categories from './../Categories';
import LayoutGrid from './../LayoutGrid';
import Shops from './../Shops';
import About from './../About';
import Location from './../Location';

const Home = () => ( 
    <LayoutGrid>
        <Shops />
        <Categories />
        <About />
        <Location />
    </LayoutGrid>
);

export default Home;
