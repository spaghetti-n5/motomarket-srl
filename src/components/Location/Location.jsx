import React from 'react';

import ClockIcon from './../Icons/Clock';
import EmailIcon from './../Icons/Email';
import PhoneIcon from './../Icons/Phone';
import LocationIcon from './../Icons/Location';
import SimpleMap from './Map';

const Location = () => (
    <div className='location'>
        <h1 className='sectionTitle'>Dove trovarci</h1>
        <div className='location__container'>
            <div>
                <div className='location__itemWrap'>
                    <ClockIcon />
                    <div className='location__text'>
                        <p className='h3 location__title'>Orari di apertura:</p>
                        <p className='p'>Lunedí - Venerdí: 8:30 - 12:30 e 15:00 - 19:00</p>
                        <p className='p'>Sabato: 8:30 - 12:30</p>   
                    </div>
                </div>
                <div className='location__itemWrap'>
                    <EmailIcon />
                    <div className='location__text'>
                        <p className='h3 location__title'>Email:</p>
                        <a href="mailto: motomarket@tin.it" className='p'>motomarket@tin.it</a>
                    </div>
                </div>
                <div className='location__itemWrap'>
                    <PhoneIcon />
                    <div className='location__text'>
                        <p className='h3 location__title'>Telefono:</p>
                        <p className='p'>+39 0438 402917</p>
                    </div>
                </div>
                <div className='location__itemWrap'>
                    <LocationIcon />
                    <div className='location__text'>
                        <p className='h3 location__title'>Indirizzo:</p>
                        <p className='p'>Vicolo Cadore 4, San Vendemiano, TV</p>
                    </div>
                </div>
            </div>
            <div className='location__map'>
                <SimpleMap />
            </div>
        </div>
    </div>
);

export default Location;

