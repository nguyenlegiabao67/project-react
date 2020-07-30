import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './component/Header';
import AboutMe from './pages/AboutMe';
import Footer from './component/Footer';
import Gucci from './component/Gucci';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/About-me' component={AboutMe} />
          <Route path='/Products/Gucci/' component={Gucci} />
          <Route path='/Detail/Gucci/:product_name/:id' component={ProductDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
