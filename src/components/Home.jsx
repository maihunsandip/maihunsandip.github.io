import React from 'react';
import profile_img from '../assets/dp.jpg';
import { Github, Linkedin, Twitter, } from 'lucide-react';
import htmlLogo from '../assets/icons/html.png';
import cssLogo from '../assets/icons/css.png';
import jsLogo from '../assets/icons/js.png';
import reactLogo from '../assets/icons/react.png';
import cLogo from '../assets/icons/c.png';
import javaLogo from '../assets/icons/java.png';
import linuxLogo from '../assets/icons/linux.png';
import gitLogo from '../assets/icons/git.png';
import tailwindLogo from '../assets/icons/tailwind.png';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full     gap-5 mb-15 mt-0 md:flex-row'>
            <div className='flex flex-col md:flex-row items-center justify-center w-[90%] md:w-[50%] p-4 rounded-2xl bg-gray-800 shadow-lg mt-25'>
                <img src={profile_img} alt="Profile Picture" className='w-32 h-32 rounded-full mb-4' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold'>Sandip Kole</h1>
                    <h4 className='text-xl mt-2 font-semibold'>Web Developer</h4>
                    <div className='flex space-x-6 mt-4'>
                        <a className='border border-amber-50 p-1 rounded-lg bg-gray-700' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                        </a>
                        <a className='border border-amber-50 p-1 rounded-lg bg-gray-700' href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={18} />
                        </a>
                        <a className='border border-amber-50 p-1 rounded-lg bg-gray-700' href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-[90%] md:w-[50%] p-4 rounded-2xl bg-gray-800 shadow-lg'>
                <div className='flex space-x-6 mt-4 flex-wrap justify-around gap-5 align-middle items-center '>
                    {/* <img src={cLogo} className='w-8' alt="" /> */}
                    <img src={javaLogo} className='w-8' alt="" />
                    <img src={htmlLogo} className='w-8' alt="" />
                    <img src={cssLogo} className='w-8' alt="" />
                    <img src={jsLogo} className='w-8' alt="" />
                    <img src={reactLogo} className='w-8' alt="" />
                    <img src={linuxLogo} className='w-8' alt="" />
                    <img src={gitLogo} className='w-8' alt="" />
                    <img src={tailwindLogo} className='w-8' alt="" />

                </div>
            </div>


        </div>
    );
};

export default Home;
