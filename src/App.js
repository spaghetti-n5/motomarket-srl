import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch /*, Redirect*/ } from 'react-router-dom';

//import LayoutGrid from './components/layout/grid';
//import { Prodotti } from './components/Prodotti/Prodotti';
import Home from './components/Home';
import { Categories } from './components/Categories';
import { CategoryPage } from './components/CategoryPage';
import './App.css';

const App = () => (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={Categories} />
                <Route path="/category/:categoryId" component={CategoryPage} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default App;
