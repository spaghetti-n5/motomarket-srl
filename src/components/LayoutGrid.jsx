import React, { Component, } from 'react';
import Header from './Header';

export default class LayoutGrid extends Component {
    render() {
        return (
            <div className='layoutGrid'>
                <Header />
                <div className="layoutGrid__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
