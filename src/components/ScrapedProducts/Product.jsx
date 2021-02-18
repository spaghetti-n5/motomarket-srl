import React from 'react';

const Product = ({
    title,
    description,
    date,
    location,
    price,
    image,
    url,
}) => (
    <a className="product" href={url} target="__blank">
        <h3 className="h3 product__title">{title}</h3>
        <img className="h3 product__image" src={image} alt="product" />
        <p className="p product__description">{description}</p>
        <p className="p">{location} -- {date}</p>
        <p className="product__price">{price}</p>
    </a>
);

export default Product;