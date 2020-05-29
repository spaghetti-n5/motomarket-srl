import React from 'react';

export const CategoryBox = ({ title, image, alt }) => (
    <div>
        <div className="categoryBox__wrapper">
            <div className="categoryBox__title">{title}</div>
        </div>
        <img className="categoryBox__bg" src={image} alt={alt} />
    </div>
);
