import React from 'react'
import '../assets/styles/About.css';
import HeaderImage from '../assets/images/aboutheader.png';
import About1 from '../assets/images/aboutIcon1.png';
import About2 from '../assets/images/aboutIcon2.png';
import About3 from '../assets/images/aboutIcon3.png';
import About4 from '../assets/images/aboutIcon4.png';
import WhatImg from '../assets/images/whatimage.png';
import BigBang from '../assets/images/bigbang.svg';

export default function About() {
    return (

        <div id='about-background'>

            <div id='about-header' className='flex flex-col items-center '>
                <h1 className='text-6xl font-bold mb-10 mt-10 sm:text-red-800 md:text-yellow-600 lg:text-green-700'>About Us</h1>

                <div id='about-header-card' className='mx-10 sm:w-auto sm:max-w-[500px] md:flex md:flex-row md:justify-center md:items-center md:max-w-[800px] lg:max-w-[1200px]'>
                    <div id='about-header-card-text'>
                        <h1 className='text-4xl font-bold pb-4'>Our Mission</h1>
                        <p className='text-gray-500 pb-4 text-sm md:text-base lg:text-[18px] lg:max-w-[450px] ' >Welcome to <span className='font-semibold'>Neurotech@Davis </span>, a dynamic and innovative neurotechnology club dedicated to advancing the field of brain-computer interfaces (BCIs) and fostering the next generation of neurotech enthusiasts. At Neurotech@Davis, we are passionate about exploring the intersection of neuroscience and technology to create cutting-edge solutions that push the boundaries of what is possible.
                        </p>

                    </div>

                    <img src={HeaderImage} className=' w-auto h-auto mx-auto md:min-w-[325px] md:ml-4 lg:max-w-none' />

                </div>

            </div>


            <h1 className='text-5xl font-bold mt-16 mb-7 text-center md:mt-24'>What We Do</h1>
            <div id='what-sect' className='flex flex-col justify-center items-center md:flex-row md:gap-8 lg:gap-20'>



                <div id='what-sect-info' className='flex flex-col justify-center items-center'>

                    <div className='what-card'>
                        <img src={About1} className='what-card-img' />

                        <div>
                            <h2 className='what-card-title'>Building BCIs</h2>
                            <p className='max-w-[250px] text-gray-700'>Design and develop BCIs linking the brain to digital systems, from wearable devices to software</p>
                        </div>

                    </div>

                    <div className='what-card'>
                        <img src={About2} className='what-card-img' />

                        <div>
                            <h2 className='what-card-title'>Startup Innovation</h2>
                            <p className='max-w-[250px] text-gray-700'>Engage in neurotech startups, we offer a platform to develop ideas and create solutions.</p>
                        </div>

                    </div>

                    <div className='what-card'>
                        <img src={About3} className='what-card-img' />

                        <div>
                            <h2 className='what-card-title'>Publishing Knowledge</h2>
                            <p className='max-w-[250px] text-gray-700'>Publish articles to contribute to the global neurotech feild.</p>
                        </div>

                    </div>

                    <div className='what-card'>
                        <img src={About4} className='what-card-img' />

                        <div>
                            <h2 className='what-card-title'>Educational Outreach</h2>
                            <p className='max-w-[250px] text-gray-700'>Educate  about neurotechnology in high schools and middle schools.</p>
                        </div>

                    </div>

                </div>

                <img src={WhatImg} className='h-auto max-w-[380px] lg:max-w-none' />

            </div>


            <h1 className='text-5xl font-bold mt-16 mb-7 text-center md:mt-24'>What We’ve Accomplished</h1>


            <div id='acolades'>

                <h1 className='text-3xl  text-center mt-14'> <span className='font-bold'>$46,500</span> awarded for startup innovation</h1>

        {/* Start up awards */}
            <div id='cash-award-grid-container'className='flex items-center justify-center'>
                <div id='startup-sect' className='mt-10 flex  flex-col items-center justify-center gap-3  md:grid md:grid-cols-2 md:gap-4'>

                      <div className='startup-card flex flex-row items-center justify-center gap-5'>

                                <div className='startup-card-p1 flex flex-col items-center justify-center gap-3'>
                                    <h2 className='startup-card-cash'>$25k</h2>
                                    <img src={BigBang} />

                                </div>

                                <div className='startup-card-p2'>
                                    <h2 className='text-2xl'>
                                        <span className='font-bold text-4xl'>1st Place</span> <br />
                                        2024 Big Bang! Business competition
                                    </h2>

                                </div>

                        </div>

                        <div className='startup-card flex flex-row items-center justify-center gap-5'>

                                <div className='startup-card-p1 flex flex-col items-center justify-center gap-3'>
                                    <h2 className='startup-card-cash'>$25k</h2>
                                    <img src={BigBang} />

                                </div>

                                <div className='startup-card-p2'>
                                    <h2 className='text-2xl'>
                                        <span className='font-bold text-4xl'>1st Place</span> <br />
                                        2024 Big Bang! Business competition
                                    </h2>

                                </div>

                        </div>

                        <div className='startup-card flex flex-row items-center justify-center gap-5'>

                                <div className='startup-card-p1 flex flex-col items-center justify-center gap-3'>
                                    <h2 className='startup-card-cash'>$25k</h2>
                                    <img src={BigBang} />

                                </div>

                                <div className='startup-card-p2'>
                                    <h2 className='text-2xl'>
                                        <span className='font-bold text-4xl'>1st Place</span> <br />
                                        2024 Big Bang! Business competition
                                    </h2>

                                </div>

                        </div>

                        <div className='startup-card flex flex-row items-center justify-center gap-5'>

                                <div className='startup-card-p1 flex flex-col items-center justify-center gap-3'>
                                    <h2 className='startup-card-cash'>$25k</h2>
                                    <img src={BigBang} />

                                </div>

                                <div className='startup-card-p2'>
                                    <h2 className='text-2xl'>
                                        <span className='font-bold text-4xl'>1st Place</span> <br />
                                        2024 Big Bang! Business competition
                                    </h2>

                                </div>

                            </div>



                   

                              

             



                </div>

             </div>
               {/*  END Start up awards */}


            </div>

        </div>
    )
}
