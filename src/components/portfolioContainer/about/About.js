import { faCss3, faCss3Alt, faGithub, faHtml5, faJava, faNodeJs, faPython, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
    return (
        <div className='about-section' id='about'>
            <h1 className='about-heading'>About Me</h1>
            <div className='line'></div>
            <div className="about-container">
                <div className="about-item">
                    <h3 className='item-title'>Why Choose Me</h3>
                    <div className='item-body1'>
                        <p>Full stack web developer with background knowledge of Java and MERN stack with redux, along with knack of building application with utmost efficiency.</p>
                        <h4>Here are a Few Highlights</h4>
                        <ul>
                            <li>Full Stack Web Development</li>
                            <li>Interactive Front End Design</li>
                            <li>Building REST API</li>
                            <li>Managing Database</li>
                        </ul>
                        <a href='#contact'>
                            <button className='btn primary-btn'>Hire Me</button>
                        </a>


                        <a href="pradeep.pdf" download='Pradeepakumara resume.pdf'><button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="about-item">
                    <h3 className='item-title'>Educations</h3>
                    <div className='item-body2'>
                        <div className='ed-item'>
                            <div>
                                <h3><span className='dot'> </span>Visvesvaraya Technological University</h3>
                                <p>Master of Computer Application</p>
                            </div>
                            <div>
                                <button>2021-2022</button>
                            </div>
                        </div>
                        <div className='ed-item'>
                            <div>
                                <h3><span className='dot'></span>University of Mysore</h3>
                                <p>Bachelor of Science</p>
                            </div>
                            <div>
                                <button>2017-2020</button>
                            </div>
                        </div>
                        <div className='ed-item'>
                            <div>
                                <h3><span className='dot'></span>Pre-University College</h3>
                                <p>Sarada Villas PU College</p>
                            </div>
                            <div>
                                <button>2016-2017</button>
                            </div>
                        </div>
                        <div className='ed-item'>
                            <div>
                                <h3><span className='dot'></span>High School</h3>
                                <p>SCVDS High School</p>
                            </div>
                            <div>
                                <button>2015</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-item">
                    <h3 className='item-title'>Skills</h3>
                    <div className='item-body3'>
                        <div className='f-icons'>
                            <div>
                                <FontAwesomeIcon icon={faHtml5} style={{ color: "red", fontSize: '4rem' }} />
                                <p>html</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#264de4", fontSize: '4rem' }} />
                                <p>css</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faSquareJs} style={{ color: "yellow", fontSize: '4rem' }} />
                                <p>Javscript</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faReact} style={{ color: "#61DBFB", fontSize: '4rem' }} />
                                <p>react js</p>
                            </div>
                        </div>

                        <div className='f-icons'>
                            <div>
                                <FontAwesomeIcon icon={faJava} style={{ color: "#f89820", fontSize: '4rem' }} />
                                <p>Java</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPython} style={{ color: "#306998", fontSize: '4rem' }} />
                                <p>Python</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faNodeJs} style={{ color: "#3C873A", fontSize: '4rem' }} />
                                <p>Node js</p>
                            </div>
                        </div>

                        <div className='f-icons'>
                            <div>
                                <FontAwesomeIcon icon={faDatabase} style={{ color: "", fontSize: '4rem' }} />
                                <p>MySQL</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faDatabase} style={{ color: "green", fontSize: '4rem' }} />
                                <p>MongoDB</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faGithub} style={{ color: "", fontSize: '4rem' }} />
                                <p>MongoDB</p>
                            </div>
                            
                        </div>
                        {/* <div className="bar">
                            <div className="info">
                                <span>Java</span>
                            </div>
                            <div className="progress-bar html">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>Python</span>
                            </div>
                            <div className="progress-bar css">
                                <span></span>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About