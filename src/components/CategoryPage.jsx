import React from 'react';
import { Gallery } from './Gallery';
import homepageGallery from '../content/homepageGallery';
import LayoutGrid from './LayoutGrid';

const Content = ({ title, text, gallery }) => {
    return (
        <div className="categoryPage">
            <h1 className="h1">{title}</h1>
            <p className="p">{text}</p>
            {gallery}
        </div>
    );
};
export const CategoryPage = ({ match }) => {
    const { categoryId } = match.params || null;
    console.log('categoryId', categoryId);
    let gallery = null;
    let title = null;
    let text = null;
    if (categoryId === '1') {
        title = 'Motocicli';
        text =
            'Con la nostra lunga esperienza nel campo della vendita e consulenza, vi offriamo una vasta serie di ciclomotori e marche che soddisfano tutte le esigenze, come moto da strada per il tempo libero, scooter, minimoto e i vintage e mai fuori moda Ciao e Vespe Piaggio. Abbiamo anche una vasta scelta di Quad e moto da bambino.';
        gallery = <Gallery gallery={homepageGallery} />;
    } else if (categoryId === '2') {
        title = 'Ricambi & Accessori';
        gallery = <Gallery gallery={homepageGallery} />;
    } else if (categoryId === '3') {
        title = 'Usato';
        gallery = <Gallery gallery={homepageGallery} />;
    } else if (categoryId === '4') {
        title = 'Ditte';
        gallery = <Gallery gallery={homepageGallery} />;
    }
    return (
        <LayoutGrid>
            <Content title={title} text={text} gallery={gallery} />
        </LayoutGrid>
    );
};
