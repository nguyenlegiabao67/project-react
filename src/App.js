import React from 'react';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Intro from './component/Intro';
import CarouselPage from './component/CarouselPage';
import SampleProduct from './component/SampleProducts';
// import RenderProductColumn from './component/renderProductColumn';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Intro />
      <CarouselPage />
      <SampleProduct />
    </div>
  );
}

export default App;
