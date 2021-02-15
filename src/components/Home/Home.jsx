import React, { Component } from 'react';

import Categories from './../Categories';
import LayoutGrid from './../LayoutGrid';
import Shops from './../Shops';
import About from './../About';
import Location from './../Location';
import ScrapedProducts from './../ScrapedProducts';

export default class Home extends Component {
    render() {
        return (
            <LayoutGrid>
                <Shops />
                <ScrapedProducts />
                <Categories />
                <About />
                <Location />
            </LayoutGrid>
        );
    }
}