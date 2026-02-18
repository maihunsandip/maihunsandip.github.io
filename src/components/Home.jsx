import React from 'react';
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
import LazyImage from "../components/LazyImage";


const Home = () => {
    return (
        <div id='home' className='flex flex-col items-center w-full gap-5 mb-15 mt-0 md:flex-row py-10 px-5 md:px-10 border-b border-gray-700/50'>
            <div className='flex flex-col md:flex-row items-center w-full md:w-[50%] py-15 md:p-5 rounded-2xl bg-[#18181B] shadow-lg md:h-60 mt-10 md:mt-15'>
                <LazyImage
                    src="https://res.cloudinary.com/df2nbd3q3/image/upload/v1769678610/sandip_ygiyta.png"
                    alt="Profile Picture"
                    className="w-50 h-50 rounded-full object-cover"
                />

                <div className='flex flex-col items-center md:gap-2 md:items-start md:ml-6'>
                    <h1 className='text-3xl md:text-5xl font-bold audiowide-regular'>Sandip Kole</h1>
                    <h4 className='md:text-xl text-xl mt-2 audiowide-regular'>Observability Engineer</h4>
                    <div className='flex space-x-6 mt-4'>
                        <a
                            className=" border border-amber-50/20 p-2 rounded-lg bg-[#27272A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/35"
                            href="https://github.com/maihunsandip"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github size={21} />
                        </a>

                        <a
                            className=" border border-amber-50/20 p-2 rounded-lg bg-[#27272A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/35"
                            href="https://linkedin.com/in/sandip-kole"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={21} />
                        </a>
                        <a
                            className=" border border-amber-50/20 p-2 rounded-lg bg-[#27272A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/35"
                            href="https://twitter.com/maihunsandip"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter size={21} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center md:justify-start w-full md:w-[50%] p-4 rounded-2xl bg-[#18181B] shadow-lg md:h-60 mt-0 md:mt-15'>
                <div className='flex space-x-6 mt-4 flex-wrap justify-around gap-5 align-middle'>
                    <div className="relative group flex flex-col items-center">
                        <img
                            src={javaLogo}
                            alt="Java"
                            className="w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                        />

                        <span
                            className="absolute -top-9 text-xs px-2 py-1 rounded-md bg-[#27272A] text-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                        >
                            Java
                        </span>
                    </div>

                    <div className="relative group flex flex-col items-center">
                        <LazyImage
                            src={htmlLogo}
                            alt="HTML"
                            className="w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        />
                        <span className="absolute -top-9 text-xs px-2 py-1 rounded-md bg-[#27272A]/80 backdrop-blur-md text-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                            HTML
                        </span>
                    </div>

                    <div className="relative group flex flex-col items-center">
                        <LazyImage
                            src={cssLogo}
                            alt="CSS"
                            className="w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]"
                        />
                        <span className="absolute -top-9 text-xs px-2 py-1 rounded-md bg-[#27272A]/80 backdrop-blur-md text-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                            CSS
                        </span>
                    </div>

                    <div className="relative group flex flex-col items-center">
                        <LazyImage
                            src={jsLogo}
                            alt="JavaScript"
                            className="w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                        />
                        <span className="absolute -top-9 text-xs px-2 py-1 rounded-md bg-[#27272A]/80 backdrop-blur-md text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                            JavaScript
                        </span>
                    </div>

                    <div className="relative group flex flex-col items-center">
                        <LazyImage
                            src={reactLogo}
                            alt="React"
                            className="w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        />
                        <span className="absolute -top-9 text-xs px-2 py-1 rounded-md bg-[#27272A]/80 backdrop-blur-md text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                            React
                        </span>
                    </div>

                    <div className="relative group flex flex-col items-center">
                        <LazyImage
                            src={linuxLogo}
                            alt="Linux"
                            className="w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                        />
                        <span className="absolute -top-9 text-xs px-2 py-1 rounded-md bg-[#27272A]/80 backdrop-blur-md text-green-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                            Linux
                        </span>
                    </div>

                    <div className="relative group flex flex-col items-center">
                        <LazyImage
                            src={gitLogo}
                            alt="Git"
                            className="w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                        />
                        <span className="absolute -top-9 text-xs px-2 py-1 rounded-md bg-[#27272A]/80 backdrop-blur-md text-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                            Git
                        </span>
                    </div>

                    <div className="relative group flex flex-col items-center">
                        <LazyImage
                            src={tailwindLogo}
                            alt="Tailwind"
                            className="w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.8)]"
                        />
                        <span className="absolute -top-9 text-xs px-2 py-1 rounded-md bg-[#27272A]/80 backdrop-blur-md text-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                            Tailwind
                        </span>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Home;
