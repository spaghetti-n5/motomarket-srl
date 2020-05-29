import React from 'react';
import scraped from './../content/scraped.json';
import { Product } from './Product';

let products = Object.values(scraped).slice(0, 8)

export const ScrapedProducts = () => (
    <div className="scrapedProducts">
        <h1 className="introText">Alcuni dei nostri prodotti</h1>
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
        <a className="scrapedProducts__button" href="https://www.kijiji.it/altri-annunci-utente/motomarket-srl-10523021" target="__blank">
            Scopri di piú
        </a>
    </div>
);

