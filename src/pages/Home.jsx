import React from 'react'
import '../assets/styles/Home.css'

import Arrow from '../assets/images/arrow.png'
import HomeImage from '../assets/images/homeImage.png'

export default function Home() {
  return (
    <div id='home-container' className='flex flex-col items-center  md:h-[90vh] md:flex-row md:gap-6 md:items-start md:justify-center'>
      <div id='home-intro-text' className='pt-14 ml-14'>

        <h1 id='home-title' className='text-5xl sm:text-6xl text-white md:text-yellow-500 lg:text-green-600'> Neurotech <br /> @Davis</h1>

        <p id='home-sub-text' className='text-lg mr-10 sm:mr-28 md:mr-0 md:max-w-72'> Whether you're curious about BCIs or eager to innovate, you're in the right place. Let's push boundaries together!</p>

        <button id='home-button'> Learn more <img id='arrow' src={Arrow} /></button>

      </div>

      <img className='max-w-sm mt-16 pb-6 sm:max-w-md md:pt-12 md:max-w-82 lg:max-w-none' src={HomeImage} />

    </div>
  )
}
