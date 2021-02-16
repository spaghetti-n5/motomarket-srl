import React from 'react';

import Gallery from './../Gallery';
import MotoGallery from './../../content/motoGallery';
import AccessoryGallery from './../../content/accessoryGallery';
import BrandsGallery from './../../content/brandsGallery';
import LayoutGrid from './../LayoutGrid';
import BackIcon from '../Icons/Back';

const Content = ({ title, text, gallery, history }) => {
    return (
        <div className="categoryPage">
            <div className="categoryPage__titleWrap">
                <div className="categoryPage__icon" onClick={() => history.goBack()}>
                    <BackIcon />
                </div>
                <h1 className="h1">{title}</h1>
            </div>
            <p className="p categoryPage__text">{text}</p>
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
    } else if (categoryName === 'accessori') {
        title = 'Accessori';
        text =
            'Ovviamente siamo provvisti di tutti i tipi di ricambi e accessori, che comprendono anche una grande varietà di caschi, bauletti da viaggio, auricolari per il telefono, ammortizzatori, batterie e caricabatterie, fanaleria e lampadine, filtri, pastiglie freno, scarichi, olio e lubrificanti, e tanto altro.'
        gallery = <Gallery gallery={AccessoryGallery} />;
    } else if (categoryName === 'ditte') {
        title = 'Ditte';
        text =
            'Siamo attualmente i nuovi concessionari KYMCO per la zona di Conegliano, offriamo promozioni per ogni esigenza con facilitazioni di pagamento. Siamo anche rivenditori della famosa marca di moto spagnole Rieju e del marchio Sym.';
        gallery = <Gallery gallery={BrandsGallery} />;
    } else if (categoryName === 'ricambi-epoca') {
        title = "Ricambi d'epoca";
        text = '';
    }
    return (
        <LayoutGrid>
            <Content title={title} text={text} gallery={gallery} history={history} />
        </LayoutGrid>
    );
};

export default CategoryPage;