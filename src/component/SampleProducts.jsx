import React from 'react';
import DataSampleProduct from '../data/sampleproduct';
import RenderSampleProduct from '../component/renderSampleProduct';

const SampleProducts = () => {
    return (
        <div className='list-sample-product'>
            {DataSampleProduct.map(data =>
                <RenderSampleProduct {...data} />
            )}
        </div>
    );
};

export default SampleProducts;