/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='page-header'>
            <div className='header-logo'>
                <h1>My Website</h1>
            </div>
            <div className='header-nav'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><a href='#'>Products</a></li>
                    <li><Link to={'/About-me'}>About me</Link></li>
                    <li><a href='.page-footer'>Contact me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;