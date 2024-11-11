import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllProjectLists from "./AllProjectLists";
import schmob1 from "../../assets/images/school-mob-1.png";
import schweb1 from "../../assets/images/school-web-1.png";
import aski1 from "../../assets/images/askimate-1.png";
import aski2 from "../../assets/images/askimate-2.png";
import fuel1 from "../../assets/images/fuel-1.png";
import fuel2 from "../../assets/images/fuel-2.png";
import furniture from "../../assets/images/furniture.png";
import plant from "../../assets/images/plant.png";
import nft from "../../assets/images/nft-market.png";
import realEstate from "../../assets/images/real-estate.png";
import businessCard1 from "../../assets/images/businesscardDesign.png";
import businessCard2 from "../../assets/images/businesscardImplemented.jpg";
import airbnb1 from "../../assets/images/airbnbdesign.jpg";
import airbnb2 from "../../assets/images/airbnbimplemented.jpg";
import resturant1 from "../../assets/images/resturant1.png";
import resturant2 from "../../assets/images/resturant2.png";
import portfolio1 from "../../assets/images/portfolio1.png";
import portfolio2 from "../../assets/images/portfolio2.png";
import shoe1 from "../../assets/images/shoe1.jpg";
import shoe2 from "../../assets/images/shoe2.jpg";
import tours1 from "../../assets/images/tours1.jpg";
import tours2 from "../../assets/images/tours2.jpg";
import bodimkarayo1 from "../../assets/images/bodimkarayo1.png";
import bodimkarayo2 from "../../assets/images/bodimkarayo2.png";
import pos1 from "../../assets/images/pos1.png";
import pos7 from "../../assets/images/pos7.png";
import af1 from "../../assets/images/af-1.jpeg";
import af2 from "../../assets/images/af-2.jpeg";
import fw1 from "../../assets/images/fw1.png";
import fw2 from "../../assets/images/fw2.png";
import sb1 from "../../assets/images/sb1.jpeg";
import sb2 from "../../assets/images/sb2.jpeg";

export default function Projects() {
  // State for active tab (UI/UX or Front End Development)
  const [activeTab, setActiveTab] = useState('uiux');

  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <section className="bg-secondary-100 w-full h-auto py-10 px-5 2xl:py-20" id="portfolio">
      <div className="flex flex-col items-center" data-aos="fade-up">
        {/* Section Header */}
        <header className="text-center">
          <h3 className="text-secondary-200 pb-5 2xl:text-xl">PORTFOLIO</h3>
          <h1 className="text-white text-4xl pb-1 font-bold 2xl:text-5xl">My Projects</h1>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-12 text-primary_1 rotate-90"
          >
            <path 
              fillRule="evenodd" 
              d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" 
              clipRule="evenodd" 
            />
          </svg>
        </header>

        {/* Tab Buttons */}
        <div className="border-2 border-primary_1 rounded-full text-primary_1 py-1 px-1 flex items-center">
          <button 
            className={`font-bold text-xs px-2 border-primary_1 rounded-full p-2 focus:ease-in duration-300 md:text-xl md:py-3 ${activeTab === 'uiux' ? 'bg-primary_1 text-primary_2' : 'bg-transparent text-primary_1'}`}
            onClick={() => setActiveTab('uiux')}
          >
            UI/UX Design
          </button>
          <button 
            className={`font-bold text-xs px-2 border-primary_1 rounded-full p-2 focus:ease-in duration-300 md:text-xl md:py-3 ${activeTab === 'frontend' ? 'bg-primary_1 text-primary_2' : 'bg-transparent text-primary_1'}`}
            onClick={() => setActiveTab('frontend')}
          >
            Front End Development
          </button>
        </div>

        {/* UI/UX Design Projects */}
        {activeTab === 'uiux' && (
          <div className="text-white mt-5">
            <AllProjectLists
              img1={schmob1}
              img2={schweb1}
              titleName="UI/UX Design"
              workName="E-Learning UI"
              paragraph="An user-friendly UI for an e-learning platform, prioritizing intuitive navigation and engaging design to optimize the learning experience."
              galleryId="gallery1"
            />
            <AllProjectLists
              img1={aski1}
              img2={aski2}
              titleName="UI/UX Design"
              workName="Software Company UI"
              paragraph="Crafted a user-friendly UI for a fuel app, prioritizing intuitive interaction and visually stimulating design to streamline the fueling process for users, ensuring a seamless and efficient experience at every stage."
              galleryId="gallery2"
            />
            <AllProjectLists
              img1={fuel1}
              img2={fuel2}
              titleName="UI/UX Design"
              workName="Fuel App UI"
              paragraph="A seamless UI for a fuel app, prioritizing intuitive interaction and visually stimulating design to streamline the fueling process for users, ensuring a smooth and efficient experience at every step."
              galleryId="gallery3"
            />
            <AllProjectLists
              img1={plant}
              img2={furniture}
              titleName="UI/UX Design"
              workName="Plant Shop UI & Furniture Shop UI"
              paragraph="Designed seamless UIs for both a Plant Shop and a Furniture Shop, each prioritizing intuitive interaction and visually captivating design to enrich the shopping experience for users, ensuring effortless navigation and an engaging journey from selection to purchase."
              galleryId="gallery4"
            />
            <AllProjectLists
              img1={realEstate}
              img2={nft}
              titleName="UI/UX Design"
              workName="Real Estate UI & NFT Market Place UI"
              paragraph="It's intuitive UIs for Real Estate and NFT Marketplace platforms, prioritizing seamless navigation and engaging visuals for enhanced user experiences."
              galleryId="gallery5"
            />
          </div>
        )}

        {/* Front End Development Projects */}
        {activeTab === 'frontend' && (
          <div className="text-white mt-5">
            <AllProjectLists
              img1={sb1}
              img2={sb2}
              titleName="Front End Development"
              workName="Storybook Components"
              paragraph="I integrated Storybook into a React project using the Atomic Design methodology to organize UI components into Atoms, Molecules, Organisms, and Templates. This approach allows components to be developed, tested, and documented in isolation, ensuring consistency and reusability across the application. Atoms include basic UI elements like buttons and input fields, while Molecules combine these to form more complex components such as form fields and card elements. Organisms are larger, reusable sections like navigation bars or product cards. Templates define page layouts using these components. The Storybook setup enhances collaboration with UI/UX designers, making it easier to maintain and scale the front-end codebase. "
              galleryId="gallery16"
            />
            <AllProjectLists
              img1={fw1}
              img2={fw2}
              titleName="Front End Development"
              workName="Next & Tailwind Framework"
              paragraph="I've completed building a powerful desktop-focused framework using Next.js and Tailwind CSS, specifically optimized for desktop applications."
              galleryId="gallery15"
            />
            <AllProjectLists
              img1={af1}
              img2={af2}
              titleName="Front End Development"
              workName="Alignment Checker"
              paragraph="I’ve built a handy tool to help front-end developers and UI/UX designers quickly verify the vertical alignment of HTML elements, making it easier to spot and fix inconsistencies in layout and design. Whether you're working on a simple webpage or a complex UI, this tool visually highlights margins and padding with color-coded vertical lines."
              galleryId="gallery14"
            />
            <AllProjectLists
              img1={bodimkarayo1}
              img2={bodimkarayo2}
              titleName="Front End Development"
              workName="Bodimkarayo"
              paragraph="I developed the front end of a comprehensive web application built with React, MUI, and Tailwind CSS to connect users with potential roommates and properties. Features include an interactive map with Leaflet for property location, secure authentication, and profile management. Users can browse, filter, and view detailed property listings. The project is showcased on GitHub and the product is on live."
              galleryId="gallery12"
            />
            <AllProjectLists
              img1={pos1}
              img2={pos7}
              titleName="Front End Development"
              workName="Happy Sales"
              paragraph="I developed a POS web application frontend using Angular and TypeScript, integrating dynamic invoice management with jsPDF and html2canvas for PDF generation. The project features seamless Bluetooth printing via the Thermer app, enhancing billing and sales management. The frontend design utilizes Tailwind CSS for responsive UI, and the application ensures smooth user experience with optimized performance. Product is working even offiline. Technologies used include Angular, TypeScript, jsPDF, html2canvas, and Tailwind CSS."
              galleryId="gallery13"
            />
            <AllProjectLists
              img1={portfolio1}
              img2={portfolio2}
              titleName="Front End Development"
              workName="My Portfolio"
              paragraph="I created a sample restaurant webpage using React JS and Tailwind CSS, demonstrating my ability to integrate dynamic user interfaces with responsive, utility-first design. This project not only honed my skills in React and Tailwind but also underscored my commitment to building seamless, visually appealing web experiences. It serves as a prime example of my proficiency in modern web development technologies."
              galleryId="gallery6"
            />
            <AllProjectLists
              img1={resturant1}
              img2={resturant2}
              titleName="Front End Development"
              workName="Resturant Website Sample"
              paragraph="I developed a restaurant webpage with Tailwind CSS, using zero custom CSS, showcasing efficient, utility-first design. This project highlights my skill in creating responsive, modern web layouts efficiently."
              galleryId="gallery7"
            />
            <AllProjectLists
              img1={businessCard1}
              img2={businessCard2}
              titleName="Front End Development"
              workName="Business Card Sample"
              paragraph="I crafted a React JS-based sample business card page, enhancing my skills in interactive design and component structuring. This project reflects my proficiency in turning business ideas into functional and attractive web solutions."
              galleryId="gallery8"
            />
            <AllProjectLists
              img1={airbnb1}
              img2={airbnb2}
              titleName="Front End Development"
              workName="Airbnb Sample"
              paragraph="I developed a React JS-based sample Airbnb page, showcasing responsive design and user interaction. This project enhanced my React skills and understanding of user-centric web development."
              galleryId="gallery9"
            />
            <AllProjectLists
              img1={shoe1}
              img2={shoe2}
              titleName="Front End Development"
              workName="Shoe Shop"
              paragraph="I crafted a responsive e-commerce shoe shop using HTML and CSS, honing my front-end skills and prioritizing user experience."
              galleryId="gallery10"
            />
            <AllProjectLists
              img1={tours1}
              img2={tours2}
              titleName="Front End Development"
              workName="Travel page"
              paragraph="Developing a travel website, I emphasized intuitive design and responsiveness with HTML and CSS, refining my front-end abilities and user-centric approach."
              galleryId="gallery11"
            />
          </div>
        )}
      </div>
    </section>
  );
}
