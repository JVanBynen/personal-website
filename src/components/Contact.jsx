import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function Contact() {
    return (
        <div className='text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
                            Let's Talk
                        </h3>
                        <p>I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                            <a href="mailto:joshuavanbynen@outlook.com" className='hover:underline'>
                                joshuavanbynen@outlook.com
                            </a>
                        </div>
                        <div className='mb-4 mt-8'>
                            <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                            <span>(517) 245-5152</span>
                        </div>
                    </div>

                    <div className='flex-1 w-full'>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input type="text"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Name' />
                            </div>
                            <div>
                                <label htmlFor="email">Your Email</label>
                                <input type="email"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Email' />
                            </div>
                            <div>
                                <label htmlFor="message">Your Message</label>
                                <textarea type='text'
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Message'
                                    rows="5"
                                />
                            </div>
                            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full' type='send'>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact