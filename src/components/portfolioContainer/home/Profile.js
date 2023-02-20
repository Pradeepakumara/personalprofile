import { faFacebook, faGooglePlusSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import { Link } from 'react-router-dom'
import Typical from 'react-typical'
import './profile.css'

const Profile = () => {
    return (
        <div className='profile-container' id='profile'>
            <div className='profile-parent'>
                <div className='profile-picture ord2'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
                <div className="profile-details ord1">
                    <div className="colz">

                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faGooglePlusSquare} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>

                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>

                            Hello, I am <span className='highlighted-text'>
                                Pradeepakumara K R
                            </span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>

                            <h1><Typical loop={Infinity} steps={[
                                "Java Full Stack Developer", 1000,
                                "MERN Stack Developer", 1000
                            ]} /></h1>
                            <span className='profile-role-tagline'>
                                Currently working as an intern at Refactor Academy
                            </span>
                        </span>
                    </div>
                    <div className="profile-option">
                        
                        <a href='#contact'>
                        <button className='btn primary-btn'>Hire Me</button>
                        </a>
                        
                        
                        <a href="pradeep.pdf" download='Pradeepakumara resume.pdf'><button className='btn highlighted-btn'>Get Resume</button>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile