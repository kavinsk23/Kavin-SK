import React from "react";

export default function AllProjectLists(props) {
    return(
        <div className="maain w-full block lg:w-auto 2xl:mt-14 py-2 border border-secondary-200 rounded-xl my-2 md:my-6 md:grid md:grid-cols-2 xl:my-8">
            <div className="img-area bg-primary_2 w-full flex items-center rounded-xl p-2 md:mr-10 lg:max-w-w108 xl:mr-16 2xl:mr-24 2xl:max-w-w120 screen3xl:max-w-w135">
                <img className="w-1/2 shadow-sm" src={props.img1} alt=""/>
                <img className="w-1/2 shadow-sm" src={props.img2} alt=""/>
            </div>

            <div className="text-area py-5 flex flex-col justify-around items-center text-center md:text-left md:items-start md:px-3 md:justify-center lg:max-w-w120">
                <h3 className="text-primary_1 py-2 text-lg md:text-2xl md:py-4 lg:py-5 2xl:text-3xl screen3xl:text-4xl">{props.titleName}</h3>
                <h1 className="text-white py-2 text-3xl md:text-4xl md:py-4 lg:py-5 2xl:text-5xl screen3xl:text-6xl ">{props.workName}</h1>
                <p className="text-secondary-200 py-2 md:text-xl 2xl:text-2xl screen3xl:text-3xl">{props.paragraph}</p>
                <div className="flex justify-center items-center">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="text-primary_1 underline py-2 font-bold pr-2 md:text-xl md:py-4 lg:py-5" href="">See More</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-5 h-5 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-primary_1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}