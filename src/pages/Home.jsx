import React from 'react'
import '../assets/styles/Home.css'

import Arrow from '../assets/images/arrow.png'
import HomeImage from '../assets/images/homeImage.png'

export default function Home() {
  return (
    <div id='home-container' className='flex flex-col justify-center items-center'>
      <div id='home-intro-text'>

        <h1 id='home-title' className='text-5xl text-white sm:text-red-700 md:text-yellow-500 lg:text-green-600'> Neurotech <br /> @Davis</h1>

        <p id='home-sub-text' className='text-lg mr-10 sm:mr-28'> Whether you're curious about BCIs or eager to innovate, you're in the right place. Let's push boundaries together!</p>

        <button id='home-button'> Learn more <img id='arrow' src={Arrow} /></button>

      </div>

      <img className='max-w-sm mt-16 pb-6' src={HomeImage} />

    </div>
  )
}
