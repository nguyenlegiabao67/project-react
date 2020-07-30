import React from 'react';
import Banner from '../component/Banner';
import Intro from '../component/Intro';
import CarouselPage from '../component/CarouselPage';
import SampleProduct from '../component/SampleProducts';

const HomePage = () => {
    return (
        <>
            <Banner />
            <Intro />
            <CarouselPage />
            <SampleProduct />
        </>
    );
};

export default HomePage;