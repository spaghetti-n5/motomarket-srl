import React from 'react';

import GoogleMapsContainer from './GoogleMapsContainer';

export const Location = () => (
    <div className='location'>
        <h1>Dove trovarci</h1>
        <GoogleMapsContainer className='location__map' />
         <div className='location__text'>
            Orari di apertura:
            Lunedi - Venerdi: 8:30 - 12:30 e 15:00 - 19:00
            Sabato: 8:30 - 12:30 
        </div>
    </div>
);

