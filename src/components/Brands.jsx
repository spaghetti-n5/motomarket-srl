import React from 'react';

import brands from './../content/brands.js';

export const Brands = () => {
    return (
        <div className='brands'>
            {brands.map(brand => (
                <img className='brandsBox__imageBrand' src={brand.image} alt={brand.alt} key={brand.id} />
            ))}
        </div>
    );
};
