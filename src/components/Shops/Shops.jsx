import React from 'react';
import Delivery from '../../assets/images/delivery.jpg';
import KijijiLogo from '../../assets/icons/kijiji-logo.png';
import SubitoLogo from '../../assets/icons/subito-logo.png';

const Shops = () => {
    return (
        <div className="onlineShopsSection">
            <div>
                <h1>Compra online</h1>
                <img src={Delivery} className="onlineShopsSection__image" alt="background" />
            </div>
            <div className="onlineShopsSection__text">
                <h2 className="h3 onlineShopsSection__description">
                    Visita i nostri rivenditori online per comprare comodamente da casa!
                </h2>
                <p className="p onlineShopsSection__description">
                    Su Kijiji e Subito.it potrai trovare gli ultimi prodotti ed offerte in anteprima
                </p>
                <div className="onlineShopsSection__itemWrapper">
                    <div className="onlineShopsSection__item">
                        <a
                            href="https://www.kijiji.it/altri-annunci-utente/motomarket-srl-10523021"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={KijijiLogo}
                                alt="kijiji-logo"
                                height="52"
                                width="52"
                            />
                        </a>
                    </div>
                    <div className="onlineShopsSection__item">
                        <a
                            href="https://impresapiu.subito.it/shops/3248-motomarket-srl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={SubitoLogo}
                                alt="subito-logo"
                                height="52"
                                width="52"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shops;