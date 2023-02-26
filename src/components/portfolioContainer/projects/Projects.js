import './projects.css';

import React from 'react'

const Projects = () => {
  return (
    <div className='project-section' id='projects'>
        <h1 className='project-title'>Projects</h1>
        <div className='project-line'></div>
        <div className="project-conatiner">
            <div className="project-item item1">
                    <div className="first">
                        
                    </div>
                    <div className="second">
                        <h1>Weather Report</h1>
                        <p>would you like to see this project click view button</p>
                        <a href="https://getweatherdetails.netlify.app/"><button>View</button></a>
                    </div>
            </div>

            <div className="project-item item2">
                    <div className="first">
                        
                    </div>
                    <div className="second">
                        <h1>MyTube Pro</h1>
                        <p>would you like to see this project click view button</p>
                        <a href="https://mytubepro.netlify.app/"><button>View</button></a>
                    </div>
            </div>

            <div className="project-item item3">
                    <div className="first">
                        
                    </div>
                    <div className="second">
                        <h1>Birds Collection</h1>
                        <p>would you like to see this project click view button</p>
                        <a href="https://birdscollection.netlify.app/"><button>View</button></a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Projects