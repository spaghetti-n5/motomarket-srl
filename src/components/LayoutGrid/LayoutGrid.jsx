import React, { Component, } from 'react';
import Header from './../Header';
import Footer from './../Footer';

export default class LayoutGrid extends Component {
    render() {
        return (
            <div className='layoutGrid'>
                <Header />
                <div className="layoutGrid__content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
