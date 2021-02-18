import React from 'react';
import Header from './../Header';
import Footer from './../Footer';

const LayoutGrid = ({ children }) => (
    <>
        <Header />
        <div className='layoutGrid'>
            <div className="layoutGrid__content">
                {children}
            </div>
            <Footer />
        </div>
    </>
);

export default LayoutGrid;
