import React from 'react';
import scraped from './../../content/scraped.json';
import Product from './Product';

let products = Object.values(scraped).slice(8).reverse();

const ScrapedProducts = () => (
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

export default ScrapedProducts;
