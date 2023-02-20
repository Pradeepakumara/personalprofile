import React from 'react'
import './experience.css'
import Refactor from "../../../assets/images/Refactor_final_logo.png" 
import Contriver from "../../../assets/images/Contriver_logo.png"

const Experience = () => {
  return (
    <div className='exp-section' id='exp'>
        <h1 className='exp-title'>Experience</h1>
        <div className='exp-line'></div>
        <div className='exp-container'>
            <div className='exp-item'>
                <div className='exp-top'>
                    <div className='exp-logo'>
                        <img src={Refactor} alt="" />
                    </div>
                    <div className='exp-year'>
                        <p>01/12/2022 - Present</p>
                    </div>
                </div>
                <div className="exp-bottom">
                    <h2 className='exp-sub-title'>Full Stack Developer Intern</h2>
                    <p>Currently working as MERN Stack Web Developer</p>
                    <p>- Developed an Weather Details Website with the help of Weather API's</p>
                    <p>- Developed Birds Collection Website with the help of MERN Stack</p>
                </div>
            </div>

            <div className='exp-item'>
                <div className='exp-top'>
                    <div className='exp-logo'>
                        <img src={Contriver} alt="" />
                    </div>
                    <div className='exp-year'>
                        <p>15/03/2022 - 15/06/2022</p>
                    </div>
                </div>
                <div className="exp-bottom">
                    <h2 className='exp-sub-title'>Front-End Web Developer Intern</h2>
                    <p>Worked as Front end developer with HTML, CSS, Javascript and Bootstrap</p>
                    <p>- Developed an front-end e-commerce website</p>
                    <p>- Achived Certificate of Excellence in Programming and Development.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience