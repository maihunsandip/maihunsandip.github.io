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
        <div id='home' className='flex flex-col items-center w-full gap-5 mb-15 mt-0 md:flex-row py-10 px-5 md:px-10'>
            <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] py-15 md:p-5 rounded-2xl bg-gray-900 shadow-lg md:h-60 mt-10 md:mt-15'>
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQHdar3jp2gVgw/profile-displayphoto-scale_400_400/B4DZgfIlyZG8Ag-/0/1752869005560?e=1768435200&v=beta&t=n8FC5tSKWdFeG8BoAriKEjExpJtQZYndYPPad5HqSe4" alt="Profile Picture" className='w-50 h-50 rounded-full' />
                <div className='flex flex-col items-center md:gap-2 md:items-start md:ml-6'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Sandip Kole</h1>
                    <h4 className='md:text-xl text-xl mt-2 '>IT Engineer | Web Developer</h4>
                    <div className='flex space-x-6 mt-4'>
                        <a className='border border-amber-50 p-1 rounded-lg bg-gray-800' href="https://github.com/maihunsandip" target="_blank" rel="noopener noreferrer">
                            <Github size={25} />
                        </a>
                        <a className='border border-amber-50 p-1 rounded-lg bg-gray-800' href="https://linkedin.com/in/sandip-kole" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={25} />
                        </a>
                        <a className='border border-amber-50 p-1 rounded-lg bg-gray-800' href="https://twitter.com/maihunsandip" target="_blank" rel="noopener noreferrer">
                            <Twitter size={25} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-start w-full md:w-[50%] p-4 rounded-2xl bg-gray-900 shadow-lg md:h-60 mt-0 md:mt-15'>
                <div className='flex space-x-6 mt-4 flex-wrap justify-around gap-5 align-middle'>
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
