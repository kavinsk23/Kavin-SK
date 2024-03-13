import React, { useState } from "react";
import AllProjectLists from "./AllProjectLists";
import schmob1 from "./images/school-mob-1.png"
import schweb1 from "./images/school-web-1.png"
import aski1 from "./images/askimate-1.png"
import aski2 from "./images/askimate-2.png"
import fuel1 from "./images/fuel-1.png"
import fuel2 from "./images/fuel-2.png"
import furniture from "./images/furniture.png"
import plant from "./images/plant.png"
import nft from "./images/nft-market.png"
import realEstate from "./images/real-estate.png"
/*import staysure from "./images/staysure.png"
import expat from "./images/expat.png"
import avanti from "./images/avanti.png"
import petsure from "./images/petsure.png"
import wapp from "./images/wapp.png"
import tabl from "./images/tabl.png"*/
import businessCard1 from "./images/businesscardDesign.png"
import businessCard2 from "./images/businesscardImplemented.jpg"
import airbnb1 from "./images/airbnbdesign.jpg"
import airbnb2 from "./images/airbnbimplemented.jpg"
import resturant1 from "./images/resturant1.png"
import resturant2 from "./images/resturant2.png"
import portfolio1 from "./images/portfolio1.png"
import portfolio2 from "./images/portfolio2.png"

export default function Projects() {
    // State to manage which tab is active; default is 'UI/UX Design'
    const [activeTab, setActiveTab] = useState('uiux');

    return (
        <div className="bg-secondary-100 w-full h-auto py-10 px-5 2xl:py-20" id="portfolio">
            <div className="flex flex-col items-center">
                <h3 className="text-secondary-200 pb-5 2xl:text-xl">PORTFOLIO</h3>
                <h1 className="text-white text-4xl pb-1 font-bold 2xl:text-5xl">My Projects</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-12 text-primary_1 rotate-90">
                    <path fillRule="evenodd"
                          d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                          clipRule="evenodd"/>
                </svg>

                <div className="border-2 border-primary_1 rounded-full text-primary_1 py-1 px-1 flex items-center">
                    <button className={`font-bold text-xs px-2 border-primary_1 rounded-full p-2 focus:ease-in duration-300 md:text-xl md:py-3 ${activeTab === 'uiux' ? 'bg-primary_1 text-primary_2' : 'bg-transparent text-primary_1'}`}
                            onClick={() => setActiveTab('uiux')}>UI/UX Design</button>
                    <button className={`font-bold text-xs px-2 border-primary_1 rounded-full p-2 focus:ease-in duration-300 md:text-xl md:py-3 ${activeTab === 'frontend' ? 'bg-primary_1 text-primary_2' : 'bg-transparent text-primary_1'}`}
                            onClick={() => setActiveTab('frontend')}>Front End Development</button>
                </div>
                {activeTab === 'uiux' && (
                    <div className="text-white mt-5">
                        <AllProjectLists
                            img1={schmob1}
                            img2={schweb1}
                            titleName="UI/UX Design"
                            workName="E-Learning UI"
                            paragraph="An user-friendly UI for an e-learning platform, prioritizing intuitive navigation and engaging design to optimize the learning experience."
                        />

                        <AllProjectLists
                            img1={aski1}
                            img2={aski2}
                            titleName="UI/UX Design"
                            workName="Software Company UI"
                            paragraph="Crafted a user-friendly UI for a fuel app, prioritizing intuitive interaction and visually stimulating design to streamline the fueling process for users, ensuring a seamless and efficient experience at every stage."
                        />

                        <AllProjectLists
                            img1={fuel1}
                            img2={fuel2}
                            titleName="UI/UX Design"
                            workName="Fuel App UI"
                            paragraph="A seamless UI for a fuel app, prioritizing intuitive interaction and visually stimulating design to streamline the fueling process for users, ensuring a smooth and efficient experience at every step."
                        />

                        <AllProjectLists
                            img1={plant}
                            img2={furniture}
                            titleName="UI/UX Design"
                            workName="Plant Shop UI & Furniture Shop UI"
                            paragraph="Designed seamless UIs for both a Plant Shop and a Furniture Shop, each prioritizing intuitive interaction and visually captivating design to enrich the shopping experience for users, ensuring effortless navigation and an engaging journey from selection to purchase."
                        />

                        <AllProjectLists
                            img1={realEstate}
                            img2={nft}
                            titleName="UI/UX Design"
                            workName="Real Estate UI & NFT Market Place UI"
                            paragraph="It's intuitive UIs for Real Estate and NFT Marketplace platforms, prioritizing seamless navigation and engaging visuals for enhanced user experiences."
                        />
                    </div>
                )}
                {activeTab === 'frontend' && (
                    <div className="text-white mt-5">

                        <AllProjectLists
                            img1={portfolio1}
                            img2={portfolio2}
                            titleName="Front End Development"
                            workName="My Portfolio"
                            paragraph="I created a sample restaurant webpage using React JS and Tailwind CSS, demonstrating my ability to integrate dynamic user interfaces with responsive, utility-first design. This project not only honed my skills in React and Tailwind but also underscored my commitment to building seamless, visually appealing web experiences. It serves as a prime example of my proficiency in modern web development technologies."
                        />

                        <AllProjectLists
                            img1={resturant1}
                            img2={resturant2}
                            titleName="Front End Development"
                            workName="Resturant Website Sample"
                            paragraph="I developed a restaurant webpage with Tailwind CSS, using zero custom CSS, showcasing efficient, utility-first design. This project highlights my skill in creating responsive, modern web layouts efficiently."
                        />

                        <AllProjectLists
                            img1={businessCard1}
                            img2={businessCard2}
                            titleName="Front End Development"
                            workName="Business Card Sample"
                            paragraph="I crafted a React JS-based sample business card page, enhancing my skills in interactive design and component structuring. This project reflects my proficiency in turning business ideas into functional and attractive web solutions."
                        />

                        <AllProjectLists
                            img1={airbnb1}
                            img2={airbnb2}
                            titleName="Front End Development"
                            workName="Airbnb Sample"
                            paragraph="I developed a React JS-based sample Airbnb page, showcasing responsive design and user interaction. This project enhanced my React skills and understanding of user-centric web development."
                        />

                        {/*<AllProjectLists
                            img1={staysure}
                            img2={expat}
                            titleName="Front End Development"
                            workName="Travel Insurence Websites"
                            paragraph="During my internship at Intervest Software Technologies, I significantly contributed to the Staysure projects, focusing on resolving issues, enhancing user interfaces, and developing engaging banners. This experience sharpened my problem-solving abilities and deepened my knowledge of UI/UX design principles, preparing me for future challenges in the industry."
                        />*/}

                        {/*<AllProjectLists
                            img1={avanti}
                            img2={wapp}
                            titleName="Front End Development"
                            workName="Travel Insurence Websites"
                            paragraph="During my internship at Intervest Software Technologies, I focused on enhancing the Wapp and Avanti platforms, addressing issues, revamping UIs, and developing banners. This role significantly improved my problem-solving and design skills, providing a deep dive into practical, user-centered software development."
                        />*/}

                        {/*<AllProjectLists
                            img1={petsure}
                            img2={tabl}
                            titleName="Front End Development"
                            workName="Insurance & Resturant Websites"
                            paragraph="At Intervest Software Technologies, I worked on Petsure and Tabl, addressing issues, revamping UIs, and creating banners. This experience sharpened my technical and design skills, enhancing my software engineering acumen."
                        />*/}
                    </div>
                )}
            </div>
        </div>
    );
}
