import React from 'react'
import SpartanLogo from '../assets/Michigan-State-Logo-No-Background.png'

const About = () => {
    return (
        <div className='text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>
                    About Me
                </h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={SpartanLogo} alt="About Me"
                        className='w-64 h-auto mb-8 md:mb-0' />
                    <p>
                        Hi, I'm <span className="text-green-400 font-semibold">Joshua VanBynen</span>,
                        a recent graduate from Michigan State University with a Bachelor of Science
                        in <span className="text-blue-400">Computer Science Engineering </span>
                        and minors in <span className="text-blue-400">Data Science</span> and
                        <span className="text-blue-400"> Computational Mathematics, Science, and Engineering</span>.
                        <br /><br />
                        My academic journey has focused on <span className="text-green-400">AI, Machine Learning, Data Science, and Software Engineering</span>,
                        blending strong technical foundations with hands-on project experience.
                        I'm passionate about solving problems with data and building innovative software that makes an impact.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About