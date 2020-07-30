/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const RenderGucci = (props) => {
    console.log(props)
    return (
        <div className='detail-product'>
            <div className='detail-image'>
                <img src={props.image} alt='' width='200px' height='250px' />
            </div>
            <div className='detail-info'>
                <h3>{props.name}</h3>
                <p><b>{props.price}</b></p>
                <Link to={'/Detail/Gucci/' + props.name + '/' + props.id}>GO TO DETAIL</Link>
                <a href='#'>ADD TO CARD</a>
            </div>
        </div>
    );
};

export default RenderGucci;