import React from 'react'
import '../assets/styles/Home.css'

import Arrow from '../assets/images/arrow.png'
import HomeImage from '../assets/images/homeImage.png'

export default function Home() {
  return (
    <div id='home-container' className='flex flex-col items-center  md:h-[90vh] md:flex-row md:gap-7  md:items-start md:justify-center lg:justify-between lg:gap-16'>
      <div id='home-intro-text' className='pt-14 ml-14 md:mt-16'>

        <h1 id='home-title' className='text-5xl sm:text-6xl md:text-5xl lg:text-7xl '> Neurotech <br /> @Davis</h1>

        <p id='home-sub-text' className='text-lg mr-10 sm:mr-28 md:mr-0 md:max-w-64 lg:max-w-screen-sm'> Whether you're curious about BCIs or eager to innovate, you're in the right place. Let's push boundaries together!</p>

        <a href='../about'><button id='home-button'> Learn more <img id='arrow' src={Arrow} /></button> </a>

      </div>

      <img className='max-w-sm mt-16 pb-6 sm:max-w-md  md:mr-11 md:pt-12 md:max-w-62 lg:max-w-none' src={HomeImage} />

    </div>
  )
}
