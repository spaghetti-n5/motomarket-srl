import React from 'react';

import Gallery from './../Gallery';
import homepageGallery from './../../content/homepageGallery';
import MotoGallery from './../../content/motoGallery';
import AccessoryGallery from './../../content/accessoryGallery';

import LayoutGrid from './../LayoutGrid';
import BackIcon from '../Icons/Back';

const Content = ({ title, text, gallery, history }) => {
    return (
        <div className="categoryPage">
            <div className="categoryPage__titleWrap">
                <div className="categoryPage__icon" onClick={() => history.goBack()}>
                    <BackIcon />
                </div>
                <h1 className="categoryPage__title">{title}</h1>
            </div>
            <p className="p">{text}</p>
            {gallery}
        </div>
    );
};

const CategoryPage = ({ match, history }) => {
    const { categoryName } = match.params || null;
    let gallery = null;
    let title = null;
    let text = null;
    if (categoryName === 'motocicli') {
        title = 'Motocicli';
        text =
            'Con la nostra lunga esperienza nel campo della vendita e consulenza, vi offriamo una vasta serie di ciclomotori e marche che soddisfano tutte le esigenze, come moto da strada per il tempo libero, scooter, minimoto e i vintage e mai fuori moda Ciao e Vespe Piaggio. Abbiamo anche una vasta scelta di Quad e moto da bambino.';
        gallery = <Gallery gallery={MotoGallery} />;
    } else if (categoryName === 'ricambi-accessori') {
        title = 'Ricambi & Accessori';
        text =
            'Ovviamente siamo provvisti di tutti i tipi di ricambi e accessori, che comprendono anche una grande varietà di caschi, bauletti da viaggio, auricolari per il telefono, ammortizzatori, batterie e caricabatterie, fanaleria e lampadine, filtri, pastiglie freno, scarichi, olio e lubrificanti, e tanto altro.'
        gallery = <Gallery gallery={AccessoryGallery} />;
    } else if (categoryName === 'usato') {
        title = 'Usato';
        gallery = <Gallery gallery={homepageGallery} />;
    } else if (categoryName === 'ditte') {
        title = 'Ditte';
        gallery = <Gallery gallery={homepageGallery} />;
    }
    return (
        <LayoutGrid>
            <Content title={title} text={text} gallery={gallery} history={history} />
        </LayoutGrid>
    );
};

export default CategoryPage;