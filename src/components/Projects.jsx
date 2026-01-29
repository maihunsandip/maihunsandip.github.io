import React from 'react'
import { Github } from 'lucide-react';
import campIcon from '../assets/projects/camp.png';
import restaurantIcon from '../assets/projects/restaurant.png';
import cloudieIcon from '../assets/projects/cloudie.png';
import finalcountIcon from '../assets/projects/finalcount.png';

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col w-full h-screen px-10 pb-20 border-b border-gray-700/50'>
            <h2 className='py-5 text-2xl font-semibold audiowide-regular'>Projects</h2>
            <div className='flex flex-col overflow-x-hidden gap-4 items-center'>
                <div className='flex flex-col w-[95%] p-4 rounded-2xl bg-[#18181B] shadow-lg mt-5'>
                    <img src={campIcon} alt="Project Thumbnail" className='w-15' />
                    <h2 className='text-xl md:text-3xl font-semibold'>CampScape</h2>
                    <p className='mt-2 md:text-xl'>Make your trip memorable.</p>
                    <div className='flex justify-between mt-4'>
                        <a href="https://campscape-sooty.vercel.app" target="_blank" rel="noopener noreferrer" className='border border-amber-50/20 p-1 rounded-lg bg-[#27272A]'>View Project</a>
                        <a className='border border-amber-50/20 p-1 rounded-lg bg-[#27272A]' href="https://github.com/maihunsandip/CampScape.git" target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col w-[95%] p-4 rounded-2xl bg-[#18181B] shadow-lg mt-5'>
                    <img src={finalcountIcon} alt="Project Thumbnail" className='w-8' />
                    <h2 className='text-xl md:text-3xl font-semibold'>Final Count</h2>
                    <p className='mt-2 md:text-xl'>Countdown of your life.</p>
                    <div className='flex justify-between mt-4'>
                        <a href="" target="_blank" rel="noopener noreferrer" className='border border-amber-50/20 p-1 rounded-lg bg-[#27272A]'>View Project</a>
                        <a className='border border-amber-50/20 p-1 rounded-lg bg-[#27272A]' href="https://github.com/maihunsandip/FinalCount.git" target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col w-[95%] p-4 rounded-2xl bg-[#18181B] shadow-lg mt-5'>
                    <img src={restaurantIcon} alt="Project Thumbnail" className='w-10' />
                    <h2 className='text-xl md:text-3xl font-semibold'>Cafe Landing Page</h2>
                    <p className='mt-2 md:text-xl'>A demo Restaurant website.</p>
                    <div className='flex justify-between mt-4'>
                        <a href="https://maihunsandip.github.io/Restaurant-Website/" target="_blank" rel="noopener noreferrer" className='border border-amber-50/20 p-1 rounded-lg bg-[#27272A]'>View Project</a>
                        <a className='border border-amber-50/20 p-1 rounded-lg bg-[#27272A]' href="https://github.com/maihunsandip/Restaurant-Website.git" target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col w-[95%] p-4 rounded-2xl bg-[#18181B] shadow-lg mt-5'>
                    <img src={cloudieIcon} alt="Project Thumbnail" className='w-12' />
                    <h2 className='text-xl md:text-3xl font-semibold'>Cloudie</h2>
                    <p className='mt-2 md:text-xl'>Weather forecasting web app.</p>
                    <div className='flex justify-between mt-4'>
                        <a href="https://cloudie.vercel.app/" target="_blank" rel="noopener noreferrer" className='border border-amber-50/20 p-1 rounded-lg bg-[#27272A]'>View Project</a>
                        <a className='border border-amber-50/20 p-1 rounded-lg bg-[#27272A]' href="https://github.com/maihunsandip/cloudie.git  " target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects