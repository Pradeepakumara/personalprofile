import './footer.css';

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlusSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer-container">
                <div className='footer-item'>
                    <h1>copyright 2023 all right reserved</h1>
                </div>
                <div className='footer-item'>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} className="footer-icon"/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faGooglePlusSquare} className="footer-icon"/>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} className="footer-icon"/>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer