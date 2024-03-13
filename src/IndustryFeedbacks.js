import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imarsha from "./images/imarsha.png"
import sanka from "./images/sanka.png"
import ushan from "./images/ushan.png"
import ruchira from "./images/ruchira.png"

const testimonials = [
    {
        id: 1,
        image: imarsha,
        text: 'Working with Kavin was fantastic. He brought creativity, dedication, and a proactive attitude to our projects, making collaboration enjoyable and productive.',
        author: 'Imarsha - UI/UX Lead (Intervest Software Technologies)',
    },
    {
        id: 2,
        image: sanka,
        text: 'Kavin\'s exceptional skills and positive attitudes made every singe day a success within the team, and his dedication to excellence was truly inspiring and amazing.',
        author: 'Sanka - Associate Architect (Intervest Software Technologies)',
    },

    {
        id: 4,
        image: ruchira,
        text: 'Working with Kavin has been a pleasure; his willingness to learn and his team spirit truly stand out. Keep it up, Kavin!.',
        author: 'Ruchira - Tech Lead (Intervest Software Technologies)',
    },

    {
        id: 3,
        image: ushan,
        text: 'Kavin\'s outstanding performance and collaborative approach were instrumental in achieving our project goals, making our working experience truly remarkable.',
        author: 'Ushan - Senior QA Engineer (Intervest Software Technologies)',
    },
];

const TestimonialCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: null,
    };

    return (
        <Slider {...settings}>
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="feedback-slider bg-primary_2 p-6 flex flex-col justify-center items-center lg:flex-row lg:py-14">
                    <div className="flex justify-center items-center">
                        <img className="p-5 max-w-80 sm:max-w-96 lg:max-w-w108 2xl:max-w-w120 screen3xl:max-w-w135" src={testimonial.image} alt=""/>
                    </div>
                    <div className="bg-secondary-100 p-2 rounded-md text-xs sm:text-sm md:max-w-w135 md:text-base lg:text-xl lg:max-w-w108 lg:py-10 lg:px-5 xl:text-2xl xl:py-20 2xl:max-w-w120 2xl:py-30 2xl:leading-10 screen3xl:max-w-w135 screen3xl:text-3xl screen3xl:py-32 screen3xl:leading-leading15">
                        <div>
                            <svg className="rotate-180 flex justify-start" width="15" height="30" xmlns="http://www.w3.org/2000/svg">
                                <text x="0" y="24" font-size="35" fill="#D9C5A6">,,</text>
                            </svg>
                        </div>
                        <div className="text-white leading-8 2xl:leading-10 screen3xl:leading-leading15">
                            {testimonial.text}
                        </div>
                        <div className="flex justify-end">
                            <svg width="15" height="30" xmlns="http://www.w3.org/2000/svg">
                                <text x="0" y="24" font-size="35" fill="#D9C5A6">,,</text>
                            </svg>
                        </div>
                        <div className="text-gray-400 pt-2">
                            {testimonial.author}
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default TestimonialCarousel;
