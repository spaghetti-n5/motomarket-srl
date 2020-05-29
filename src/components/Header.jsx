import React from 'react';

import { Logo } from './Icons';
import { FaceBookIconBlack } from './Icons';
import { GooglePlusIcon } from './Icons';

class Header extends React.Component {
      componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
    render() {
        return (
        <div className="header" id="header">
            <a id="logo" href="/"><Logo height="42px"/></a>
            <div>
                <a className="header__social" href="https://www.facebook.com/motomarket.srl/" target="_blank" rel="noopener noreferrer">
                    <FaceBookIconBlack />
                </a>
                <a className="header__social" href="/" target="_blank" rel="noopener noreferrer"><GooglePlusIcon /></a>
            </div>
        </div>
        )}
}

export default Header;
