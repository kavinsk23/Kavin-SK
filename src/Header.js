import React from "react";

export default function Header() {

    return(
        <div className="font-comfortaa" id="menu">
            <nav>
                <div className="flex text-xs font-thin bg-primary_1 sm:justify-between sm:px-4 sm:py-4 sm:text-sm md:text-base md:w-26 lg:text-lg lg:py-6 lg:font-medium xl:text-2xl xl:py-10 xl:px-16">
                    <a href="#" className="nav-buttons mr-2">About me</a>
                    <a href="#" className="nav-buttons">Skills</a>
                    <a href="#" className="hidden sm:invisible md:invisible lg:invisible xl:invisible sm:block">00</a>
                    <a href="#" className="nav-buttons font-bold sm:text-2xl sm:w-52 sm:mx-16 md:text-3xl md:w-96 md:px-12 lg:text-4xl lg:w-96 lg:px-16 xl:text-5xl xl:w-96 xl:px-14">Kavin SK</a>
                    <a href="#" className="hidden sm:invisible md:invisible lg:invisible xl:invisible sm:block">00</a>
                    <a href="#" className="nav-buttons mr-2">Portfolio</a>
                    <a href="#" className="nav-buttons">Contact</a>
                </div>
            </nav>

            <div className="flex items-center justify-between flex-1 px-2 py-3 text-xs font-thin bg-primary_1 sm:px-0 sm:py-0"> {/* Added flex-1 to make the container take up the remaining space */}
                <div>
                    <span className="text-lg font-bold sm:hidden">Kavin SK</span>
                </div>

                <button className="ml-auto block sm:hidden" id="hamburger">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
            </div>
        </div>

    )

}