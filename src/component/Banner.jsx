import React, { useState } from 'react';
import Banner01 from '../image/banner-perfume01.jpg'
import Banner02 from '../image/banner-perfume02.jpg'

const Banner = () => {
    let btn = document.getElementsByClassName('banner');
    let activeIndex = 0;

    const goPrev = () => {
       if (activeIndex > 0) {
            activeIndex -= 1;
        }
        else {
            activeIndex = btn.length - 1
        }
        ClearActive();
    }
    const goNext = () => {
        if (activeIndex < btn.length-1) {
            activeIndex += 1;
        }
        else {
            activeIndex = 0;
        }
        ClearActive();
    }
    function ClearActive() {
        for (var i=0; i<btn.length; i++) {
           btn[i].classList.remove('active'); 
        }
        btn[activeIndex].classList.add('active');
    }
    return (
        <div className='page-banner'>
            <div className='banner active'>
                <img className='image-banner' src={Banner01} alt="" width='100%' />
                <div className='title-banner'>
                    <h2 className='name-product'>Chanel Flowerbomb</h2>
                    {/* <h1 className='sologan-banner'>Lastest Desinger </h1><br /><h1 className='sologan-banner'>Perfumes</h1> */}
                    <h1 className='sologan-banner'>Lastest Desinger Perfumes </h1>
                    <p className='content-banner'>What could ideology involve smells and fragrances? As well as what could smells as well as fragrances pertain to art? After all, many theorists have actually considered odor the most affordable and most pets of the senses and also have actually watched perfume as a minor high-end. As well as when people have actually been asked which of the senses they might surrender if required to make a choice, scent typically comes in first. We take into consideration all these factors during a brand-new scent development. Simple Web Page Template is one of the best demos.</p>
                    <a className='learn-more' href='#'>Learn More</a>
                </div>
            </div>

            <div className='banner'>
                <img src={Banner02} alt="" width='100%' />
                <div className='title-banner'>
                    <h2 className='name-product'>Chanel Flowerbomb</h2>
                    {/* <h1 className='sologan-banner'>Lastest Desinger </h1><br /><h1 className='sologan-banner'>Perfumes</h1> */}
                    <h1 className='sologan-banner'>Lastest Desinger Perfumes </h1>
                    <p className='content-banner'>What could ideology involve smells and fragrances? As well as what could smells as well as fragrances pertain to art? After all, many theorists have actually considered odor the most affordable and most pets of the senses and also have actually watched perfume as a minor high-end. As well as when people have actually been asked which of the senses they might surrender if required to make a choice, scent typically comes in first. We take into consideration all these factors during a brand-new scent development. Simple Web Page Template is one of the best demos.</p>
                    <a className='learn-more' href='#' >Learn More</a>
                </div>
            </div>
            <button className='btn-prev' onClick={goPrev} >❮</button>
            <button className='btn-next' onClick={goNext} >❯</button>
        </div>
    );
};

export default Banner;