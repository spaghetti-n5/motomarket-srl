import React, { useEffect, useCallback } from 'react';

import { Logo, FaceBookIconBlack, EmailIconBlack } from './../Icons';

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
      window.addEventListener('scroll', resizeHeaderOnScroll, {passive: true});
  });

  return (
      <div className="header" id="header">
          <a id="logo" href="/">
              <Logo />
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
              <a className="header__social" href="mailto: motomarket@tin.it">
                  <EmailIconBlack />
              </a>
          </div>
      </div>
  );
};

export default Header;
