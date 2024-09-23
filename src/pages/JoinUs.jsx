import React from 'react'
import '../assets/styles/JoinUs.css'
import JoinUsImg from '../../src/assets/images/joinuspic.png'

export default function JoinUs() {
    return (
    <>

        <div id='join-header' className=' flex flex-col md:flex-row md:items-center md:justify-around pt-10 pb-10'>
            <div id='join-header-text' className=' gap-2 ml-10 text-3xl font-bold md:text-6xl flex flex-col md:gap-4 '>
                <h1>Fall 2024</h1>
                <h1>Application Open</h1>
                <h1 className='blue-text'>TBD</h1>

            </div>
            <img src={JoinUsImg} className='max-w-[300px] md:max-w-[425px] lg:max-w-[500px] ml-10 mt-4 '/>


        </div>
        


    </>
    )
}
