import React from "react";
import pic2 from "./images/pro-pic2.jpg"

export default function About() {
    return(
        <div className="bg-primary_2 w-full h-auto py-10 px-5 2xl:py-20">
            <div className="flex flex-col items-center">
                <h3 className="text-secondary-200 pb-5 2xl:text-xl">BIOGRAPHY</h3>
                <h1 className="text-white text-4xl pb-1 font-bold 2xl:text-5xl">Who am I?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-12 h-28 text-primary_1 rotate-90">
                    <path fill-rule="evenodd"
                          d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                          clip-rule="evenodd"/>
                </svg>
            </div>

            <div className="lg:flex justify-evenly items-center">
                <div className="flex items-center justify-center relative lg:justify-start lg:w-max">
                    <img className="w-52 relative shadow-lg shadow-primary_1 mb-10 sm:w-96 lg:mb-0 2xl:w-w108 screen3xl:w-w120" src={pic2} alt=""/>
                </div>

                <div className="lg:flex lg:flex-col xl:w-w120">
                    <div className="flex flex-col items-center">
                        <h3 className="text-primary_1 flex justify-center pb-5 text-lg lg:text-xl w-full lg:pl-4 xl:pl-0 lg:justify-start 2xl:text-2xl screen3xl:text-3xl">About Me</h3>
                        <p className="text-secondary-200 pb-5 text-sm sm:text-base lg:text-lg xl:text-xl xl:w-auto 2xl:text-2xl screen3xl:text-3xl leading-5 text-center lg:max-w-96 xl:max-w-max lg:text-left 2xl:pb-7">
                            Hi, I’m Kavin Sashantha, a final year CS student at the University of Westminster, passionate about
                            UI/UX development and design. I specialize in creating intuitive, visually stunning interfaces that
                            prioritize user experience. As a good team player and leader, I thrive on collaborative projects.
                            Always willing to learn and fueled by creativity, I’m excited to innovate and push boundaries in the
                            digital world.
                        </p>
                    </div>

                    <div className=" sm:grid sm:grid-cols-2">
                        <div className="about-details-box">
                            <h4 className="about-details-box-title">Name</h4>
                            <h3 className="about-details-box-detail screen3xl:w-w120">Kavin Sashantha Kalinga</h3>
                        </div>

                        <div className="about-details-box">
                            <h4 className="about-details-box-title">Email</h4>
                            <p><a className="about-details-box-detail" href="mailto:someone@example.com">23.kavinsk@gmail.com</a></p>
                        </div>

                        <div className="about-details-box">
                            <h4 className="about-details-box-title">Address</h4>
                            <h3 className="about-details-box-detail">Sri Lanka</h3>
                        </div>

                        <div className="about-details-box">
                            <h4 className="about-details-box-title">Phone</h4>
                            <p><a className="about-details-box-detail" href="tel:+94714872517">+94 71 487 2517</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
