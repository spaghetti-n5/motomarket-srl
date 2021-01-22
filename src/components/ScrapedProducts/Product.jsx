import React from 'react';

const Product = ({
    title,
    description,
    date,
    location,
    price,
    image,
    url,
}) => {
    console.log("price",price)
    return (
    <a className="product" href={url} target="__blank">
        <h3 className="h3 product__title">{title}</h3>
        <img src={image} alt="product" />
        <p className="p product__description">{description}</p>
        <p className="p">{location} -- {date}</p>
        <p className="product__price">{price}</p>
    </a>
);
}

export default Product;