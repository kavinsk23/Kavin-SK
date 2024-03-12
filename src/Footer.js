import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="">
            <div className="text-xs bg-primary_1 p-3 sm:flex sm:justify-between sm:p-5 xl:p-7 screen3xl:p-12">
                <div className="text-xs flex justify-between items-center sm:flex sm:items-center sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl screen3xl:text-4xl">
                    <h5>© 2024 Kavin Sashantha Kalinga. All Rights Reserved.</h5>
                    <button
                        onClick={scrollToTop}
                        className="bg-primary_1 text-black rounded-full ml-8"
                        style={{fontSize: '16px'}}>


                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-auto h-auto bg-primary_1 social-media-icon sm:hidden">
                        <path fill-rule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                              clip-rule="evenodd"/>
                    </svg>
                    </button>
                </div>

                <div className="flex justify-center">
                    <a className="cursor-pointer"
                       href="https://www.linkedin.com/in/kavin-sashantha-b92714240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                        <svg className="social-media-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 24 24">
                            <path
                                d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                        </svg>
                    </a>
                    <a className="cursor-pointer" href="https://www.facebook.com/kaveen.sashantha?mibextid=LQQJ4d">
                        <svg className="social-media-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 24 24">
                            <path
                                d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                        </svg>
                    </a>
                    <a className="cursor-pointer"
                       href="https://www.instagram.com/cheazze_buddy?igsh=dW0xenA4Z216a3Fm&utm_source=qr">
                        <svg className="social-media-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             viewBox="0 0 24 24">
                            <path
                                d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                        </svg>
                    </a>
                    <button
                        onClick={scrollToTop}
                        className="bg-primary_1 text-black rounded-full ml-8"
                        style={{fontSize: '16px'}}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="hidden sm:flex w-auto h-auto bg-primary_1 social-media-icon">
                            <path fill-rule="evenodd"
                                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
