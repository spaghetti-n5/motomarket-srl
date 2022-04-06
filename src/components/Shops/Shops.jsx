import React from 'react';
import Delivery from '../../assets/images/delivery.jpg';
import KijijiLogo from '../../assets/icons/kijiji-logo.png';
import AnnunciTodayLogo from '../../assets/icons/annunci_today.png';

const Shops = () => (
    <div className="onlineShopsSection">
        <div>
            <h1 className="sectionTitle">Compra online</h1>
            <img src={Delivery} className="onlineShopsSection__image" alt="background" height="100%" width="100%" />
        </div>
        <div className="onlineShopsSection__text">
            <h2 className="h3 onlineShopsSection__description">
                Visita il nostro rivenditore online per comprare comodamente da casa!
            </h2>
            <p className="p onlineShopsSection__description">
                Nelle nostre pagine di Annunci Today e Kijiji potrai trovare gli ultimi prodotti ed offerte in anteprima, non lasciarteli scappare!
            </p>
            <div className="onlineShopsSection__itemWrapper">
                <div className="onlineShopsSection__item">
                    <a
                        href="https://www.annuncitoday.it/utente/profilo/11721"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="onlineShopsSection__shopLink"
                    >
                        <img
                            src={AnnunciTodayLogo}
                            alt="annunci-today-logo"
                            height="40"
                            width="auto"
                        />
                    </a>
                </div>
                <div className="onlineShopsSection__item">
                    <a
                        href="https://www.kijiji.it/altri-annunci-utente/motomarket-srl-10523021"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="onlineShopsSection__shopLink"
                    >
                        <img
                            src={KijijiLogo}
                            alt="kijiji-logo"
                            height="40"
                            width="40"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
    );

export default Shops;