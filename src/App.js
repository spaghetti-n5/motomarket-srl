import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryPage from './components/CategoryPage';
import './App.css';

const App = () => (
    <BrowserRouter basename="/motomarket-srl/">
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={Categories} />
                <Route path="/categoria/:categoryName" component={CategoryPage} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default App;
