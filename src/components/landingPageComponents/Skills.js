import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bootstrap from "../../assets/images/bootstrap.png";
import css from "../../assets/images/css.png";
import enonic from "../../assets/images/enonic.png";
import figma from "../../assets/images/figma.png";
import git from "../../assets/images/git.png";
import html from "../../assets/images/html.png";
import jira from "../../assets/images/jira.png";
import js from "../../assets/images/js.png";
import Optimizely from "../../assets/images/Optimizely.png";
import postman from "../../assets/images/postman.png";
import react from "../../assets/images/react.png";
import redmine from "../../assets/images/redmine.png";
import sass from "../../assets/images/sass.png";
import tailwind from "../../assets/images/tailwind.png";
import browserstack from "../../assets/images/browserstack.png";
import angular from "../../assets/images/angular.png";
import mui from "../../assets/images/mui.png";
import next from "../../assets/images/nextjs.png";
import storybook from "../../assets/images/storybook.png";

export default function Skills() {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);

    return (
        <section 
            className="bg-primary_1 w-full h-auto" 
            id="skills">
                <div data-aos="fade-up">
                    {/* Skill Icons Row 1 */}
                    <div className="skill-icons-div">
                        <img 
                            className="skill-icons" 
                            src={html} 
                            alt="HTML"
                        />
                        <img 
                            className="skill-icons" 
                            src={css} 
                            alt="CSS"
                        />
                        <img 
                            className="skill-icons" 
                            src={js} 
                            alt="JavaScript"
                        />
                    </div>

                    {/* Skill Icons Row 2 */}
                    <div className="skill-icons-div">
                        <img 
                            className="skill-icons" 
                            src={react} 
                            alt="React"
                        />
                        <img 
                            className="skill-icons" 
                            src={angular} 
                            alt="Angular"
                        />
                        <img 
                            className="skill-icons" 
                            src={next} 
                            alt="next"
                        />
                        <img 
                            className="skill-icons" 
                            src={tailwind} 
                            alt="Tailwind CSS"
                        />
                    </div>

                    {/* Skill Icons Row 3 */}
                    <div className="skill-icons-div">
                    <img 
                            className="skill-icons" 
                            src={storybook} 
                            alt="storybook"
                        />
                        <img 
                            className="skill-icons" 
                            src={bootstrap} 
                            alt="Bootstrap"
                        />
                        <img 
                            className="skill-icons" 
                            src={sass} 
                            alt="SASS"
                        />
                        
                        <img 
                            className="skill-icons" 
                            src={figma} 
                            alt="Figma"
                        />
                        <img 
                            className="skill-icons" 
                            src={postman} 
                            alt="Postman"
                        />
                    </div>

                    {/* Skill Icons Row 4 */}
                    <div className="skill-icons-div">
                        <img 
                            className="skill-icons" 
                            src={browserstack} 
                            alt="BrowserStack"
                        />
                        <img 
                            className="skill-icons" 
                            src={Optimizely} 
                            alt="Optimizely"
                        />
                        <img 
                            className="skill-icons" 
                            src={git} 
                            alt="Git"
                        />
                        <img 
                            className="skill-icons" 
                            src={mui} 
                            alt="Material-UI"
                        />
                    </div>

                    {/* Skill Icons Row 5 */}
                    <div className="skill-icons-div">
                    <img 
                            className="skill-icons" 
                            src={enonic} 
                            alt="Enonic"
                        />
                        <img 
                            className="skill-icons" 
                            src={redmine} 
                            alt="Redmine"
                        />
                        <img 
                            className="skill-icons" 
                            src={jira} 
                            alt="Jira"
                        />
                    </div>
                </div>
        </section>
    );
}
