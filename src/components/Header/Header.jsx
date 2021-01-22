import React, { useEffect, useCallback } from 'react';

import { Logo, FaceBookIconBlack, GooglePlusIcon } from './../Icons';
import './Header.scss';

const Header = () => {
  const resizeHeaderOnScroll = useCallback(() => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 200;
      const headerEl = document.getElementById('header');

      if (distanceY > shrinkOn) {
          headerEl.classList.add('smaller');
      } else {
          headerEl.classList.remove('smaller');
      }
  }, []);

  useEffect(() => {
      window.addEventListener('scroll', resizeHeaderOnScroll);
  });

  return (
      <div className="header" id="header">
          <a id="logo" href="/">
              <Logo height="42px" />
          </a>
          <div>
              <a
                  className="header__social"
                  href="https://www.facebook.com/motomarket.srl/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <FaceBookIconBlack />
              </a>
              <a className="header__social" href="/" target="_blank" rel="noopener noreferrer">
                  <GooglePlusIcon />
              </a>
          </div>
      </div>
  );
};

export default Header;
