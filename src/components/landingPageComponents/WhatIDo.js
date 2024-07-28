import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhatIDo() {
    
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);
    
    return(
        <div className="bg-primary_2 w-full h-auto py-10 pt-0 px-5 2xl:py-20">
            <div data-aos="fade-up">
                <div className="flex flex-col items-center">
                    <h3 className="text-secondary-200 pb-5 2xl:text-xl">SERVICES</h3>
                    <h1 className="text-white text-4xl pb-1 font-bold 2xl:text-5xl">What I Do?</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-12 h-28 text-primary_1 rotate-90">
                        <path fill-rule="evenodd"
                            d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                            clip-rule="evenodd"/>
                    </svg>
                </div>

                <div className="flex flex-col items-center justify-center sm:flex-row">
                    <div className="whatido-card sm:mr-5 mb-5 sm:mb-0 lg:p-7 xl:p-12">
                        <h1 className="whatido-card-title">UI/UX DESIGN</h1>
                        <p className="whatido-card-content">I create intuitive, user-friendly designs by
                            blending user needs with visual elements. My process involves research, prototyping, and user
                            testing to ensure engaging and effective digital experiences.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary_1">
                            <path fill-rule="evenodd"
                                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                clip-rule="evenodd"/>
                        </svg>


                    </div>
                    <div className="whatido-card sm:mr-5 mb-5 sm:mb-0 lg:p-7 xl:p-12">
                        <h1 className="whatido-card-title">FRONT END DEVELOPMENT</h1>
                        <p className="whatido-card-content">I build responsive websites using modern technologies, and focusing on performance and cross-browser compatibility. My work bridges design
                            and functionality for seamless user experiences.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary_1">
                            <path fill-rule="evenodd"
                                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                clip-rule="evenodd"/>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}