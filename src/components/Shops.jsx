import React from 'react';

export const Shops = () => {
    return (
        <div className="onlineShopsSection">
            <h1 className="h1 onlineShopsSection__title">Compra online</h1>
            <h2 className="h4 onlineShopsSection__description">
                Visita i nostri rivenditori online per comprare comodamente da casa!
            </h2>
            <div className="onlineShopsSection__itemWrapper">
                <div className="onlineShopsSection__item">
                    <a
                        href="https://www.kijiji.it/altri-annunci-utente/motomarket-srl-10523021"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require('./../assets/icons/kijiji-logo.png')}
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
                            src={require('./../assets/icons/subito-logo.png')}
                            alt="subito-logo"
                            height="52"
                            width="52"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
