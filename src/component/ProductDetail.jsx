import React from 'react';
import DataGucci from '../data/datagucci';

const ProductDetail = (props) => {
    console.log(props)
    const prdID = props.match.params.id;
    const pageID = DataGucci.filter(item => prdID === item.id)[0]
    return (
        <div>
            <img src={pageID.image} alt='' />
            <h2> {pageID.name} </h2>
            <p>{pageID.price}</p>
        </div>
    );
};

export default ProductDetail;