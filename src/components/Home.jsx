import React, { Component } from 'react';

import { Categories } from './Categories';
import LayoutGrid from './LayoutGrid';
import { Shops } from './Shops';
import { IntroText } from './IntroText';
import { Location } from './Location';
import { Gallery } from './Gallery';
import homepageGallery from '../content/homepageGallery';
import { ScrapedProducts } from './ScrapedProducts';

export default class Home extends Component {
    render() {
        return (
            <LayoutGrid>
                <Shops />
                <ScrapedProducts />
                <Categories />
                <IntroText />
                <Gallery gallery={homepageGallery} />
                <Location />
            </LayoutGrid>
        );
    }
}
