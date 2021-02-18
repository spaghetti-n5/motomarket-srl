import React from 'react';

import Categories from './../Categories';
import LayoutGrid from './../LayoutGrid';
import Shops from './../Shops';
import About from './../About';
import Location from './../Location';
import ScrapedProducts from './../ScrapedProducts';

const Home = () => ( 
    <LayoutGrid>
        <Shops />
        <ScrapedProducts />
        <Categories />
        <About />
        <Location />
    </LayoutGrid>
);

export default Home;
