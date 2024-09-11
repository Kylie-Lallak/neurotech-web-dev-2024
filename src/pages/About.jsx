import React from 'react'
import '../assets/styles/About.css';
import HeaderImage from '../assets/images/aboutheader.png';

export default function About() {
    return (
        <div id='about-background'>

            <div id='about-header' className='flex flex-col items-center'>
                <h1 className='text-6xl font-bold mb-10 mt-10'>About Us</h1>

                <div id='about-header-card' className='max-w-sm'>
                    <div id='about-header-card-text'>
                        <h1 className='text-4xl font-bold pb-4'>Our Mission</h1>
                        <p className='text-gray-500 pb-4'>Welcome to <span className='font-semibold'>Neurotech@Davis </span>, a dynamic and innovative neurotechnology club dedicated to advancing the field of brain-computer interfaces (BCIs) and fostering the next generation of neurotech enthusiasts. At Neurotech@Davis, we are passionate about exploring the intersection of neuroscience and technology to create cutting-edge solutions that push the boundaries of what is possible.
                        </p>

                    </div>

                    <img src={HeaderImage} />

                </div>

            </div>

        </div>
    )
}
