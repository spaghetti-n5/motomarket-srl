import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch /*, Redirect*/ } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
//import LayoutGrid from './components/layout/grid';
//import { Prodotti } from './components/Prodotti/Prodotti';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryPage from './components/CategoryPage';
import './App.css';

const App = () => (
    <BrowserRouter>

        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
            <ScrollToTop>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={Categories} />
                <Route path="/category/:categoryName" component={CategoryPage} />
                </ScrollToTop>
            </Switch>
        </Suspense>

    </BrowserRouter>
);

export default App;
