import React from 'react'
import HeroImage from '../assets/IMG_9617.png'

const Hero = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='text-white text-center py-16' id='home'>
            <img src={HeroImage} alt="headshot"
                className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
            <h1 className='text-4xl font-bold px-4 md:px-8'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Joshua VanBynen</span>
                , Full-Stack Developer
            </h1>
            <p className='mt-4 text-large text-grey-300 px-4 md:px-8'>
                Hello! I’m a Full-Stack Developer passionate about creating innovative
                web applications and solving real-world problems with data.
            </p>
            <div className='mt-8 space-x-4'>
                <button
                    onClick={() => handleScroll("contact")}
                    className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
            </div>
        </div>
    )
}

export default Hero