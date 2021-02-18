import React from 'react';
import scraped from './../../content/scraped.json';
import Product from './Product';

const ScrapedProducts = () => {
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    const orderedProducts =  Object.values(scraped).reverse();
    const products = width && width < 767 ? Object.values(orderedProducts).slice(0, 4) : Object.values(orderedProducts).slice(0, 12);
    return (
        <div className="scrapedProducts">
            <h1 className="sectionTitle">Alcuni dei nostri prodotti</h1>
                <div className="scrapedProducts__list">
                    {products.map(product => (
                        <Product
                            key={product.Title}
                            title={product.Title}
                            image={product.Image}
                            description={product.Description}
                            date={product.Date}
                            location={product.Location}
                            price={product.Price}
                            url={product.Url}
                        />
                    ))}
                </div>
            <a className="scrapedProducts__button" href="https://www.kijiji.it/altri-annunci-utente/motomarket-srl-10523021" target="__blank">
                Scopri di piú
            </a>
        </div>
    );
};

export default ScrapedProducts;
