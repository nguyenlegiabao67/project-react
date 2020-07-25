import React from 'react';

const renderSampleProduct = ({ id, title, desc, image, stt }) => {
    return (
        <div className={`sample-product ${stt}`}>
            <div className='sample-content'>
                <h1 className='item-title'>{title}</h1>
                <p className='sample-desc'>{desc}</p>
                <a href='#' className='detail'>Detail</a>
            </div>
            <img className='sample-image' src={image} alt='' />

        </div>
    );
};

export default renderSampleProduct;