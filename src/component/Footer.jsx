import React from 'react';

const Footer = () => {
    return (
        <div className='page-footer' >
            <div className='info-footer'>
                <h3>Email:</h3>
                <p>nguyenlegiabaoab@gmail.com</p>
                <h3>Phone:</h3>
                <p>079-626-1446</p>
                <h3>Address:</h3>
                <p>Hue Province</p>
            </div>
            <div className='email-footer'>
                <h3>Your Infomation</h3>
                <input className='txt-name' type='text' placeholder='Your Name' />
                <input className='txt-company' type='text' placeholder='Your Company' /><br />
                <input className='txt-email' type='text' placeholder='Your Email' /> <br />
                <textarea placeholder='Your Message'></textarea> <br />
                <button className='btn-send'>Send</button>
            </div>
        </div>
    );
};

export default Footer;