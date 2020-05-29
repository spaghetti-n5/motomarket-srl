import React, { useState, useEffect } from 'react';

import { Logo, FaceBookIconBlack, GooglePlusIcon } from '../Icons';

import {
    HeaderWrapper,
    HeaderLogo,
} from './styles';

const Header = () => {
        const [prevScrollpos, setScrollPos] = useState(window.pageYOffset);
    const [visible, setVisibility] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setScrollPos(currentScrollPos);
        setVisibility(prevScrollpos > currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    console.log("visible",visible)
    return (
    <HeaderWrapper visible={visible}>
        <HeaderLogo href="/"><Logo /></HeaderLogo>
        <div>
            <a className="header__social" href="https://www.facebook.com/motomarket.srl/" target="_blank" rel="noopener noreferrer">
                <FaceBookIconBlack />
            </a>
            <a className="header__social" href="/" target="_blank" rel="noopener noreferrer"><GooglePlusIcon /></a>
        </div>
    </HeaderWrapper>
);
}

export default Header;
