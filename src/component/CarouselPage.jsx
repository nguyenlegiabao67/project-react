import React from 'react';
import dataProductColumnn from '../data/productcolumn';
import Carousel from 'react-elastic-carousel';

const CarouselPage = () => {
    return (
        <div className='carousel'>
            <Carousel itemsToShow={3} itemsToScroll={3} pagination={false}>
                {dataProductColumnn.map((item, idx) =>
                    <div className='product-column'>
                        <a href='#'><img className='item-img' src={item.image} key={idx} alt='' /></a>
                        <div className='item-title'>{item.title}</div>
                    </div>
                )}
            </Carousel>
        </div>
    );
};

export default CarouselPage;