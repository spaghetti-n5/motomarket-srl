import React from 'react';

import ShopImage from '../../assets/images/7.jpg';

const About = () => (
    <div className="about">
        <h1 className="sectionTitle">Chi siamo</h1>
        <div className="about__wrap">
            <div className="about__text">
                <p className="p">
                    Azienda nata nel 1986 dall'intraprendenza di tre giovani ragazzi. Per oltre 10 anni
                    è rimasta nella vecchia sede di San Fior lungo la Pontebbana, poi la decisione di
                    acquistare uno stabile più grande e funzionale a San Vendemiano, nella periferia di
                    Conegliano.
                </p>
                <p className="p">
                    Merito delle capacità dei tre titolari, l'azienda dopo trent'anni è
                    ancora capace di soddisfare le esigenza del mercato.
                </p>
                <p className="p">
                    Da qualche anno ha iniziato a sviluppare una rete di vendite online soprattutto di
                    ricambi di moto, ciclomotori e scooter vintage. Si possono trovare ricambi di molti
                    ciclomotori ormai quasi scomparsi.
                </p>
                <p className="p">
                    La competenza, la serietà e la disponibilità sono
                    le principali caratteristiche di questi non più ragazzi. Vi aspettiamo!
                </p>
            </div>
            <img
                className="about__image"
                src={ShopImage}
                alt="about"
            />
        </div>
    </div>
);

export default About;
