import React from 'react';

const CategoryBox = ({ title, image, alt }) => (
    <div>
        <div className="categoryBox__wrapper">
            <div className="h3 categoryBox__title">{title}</div>
        </div>
        <img className="categoryBox__bg" src={image} alt={alt} height="100%" width="100%"/>
    </div>
);

export default CategoryBox;