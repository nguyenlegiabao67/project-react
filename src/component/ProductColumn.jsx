import React from 'react';

const ProductColumn = (props) => {
    return (
        <div className='item-column'>
            <div className='item-image'>
                <img className='item-img' src={props.image} alt='' />
            </div>
            <div className='item-title'> {props.title}</div>
            <div className='item-desc'>{props.desc}</div>
        </div>
    );
};

export default ProductColumn;