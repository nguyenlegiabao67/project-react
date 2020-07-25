/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
    return (
        <div className='page-header'>
            <div className='header-logo'>
                <h1>My Website</h1>
            </div>
            <div className='header-nav'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About me</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Contact me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;