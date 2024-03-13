import React from "react";
import bootstrap from "./images/bootstrap.png"
import css from "./images/css.png"
import enonic from "./images/enonic.png"
import figma from "./images/figma.png"
import git from "./images/git.png"
import html from "./images/html.png"
import jira from "./images/jira.png"
import js from "./images/js.png"
import Optimizely from "./images/Optimizely.png"
import postman from "./images/postman.png"
import react from "./images/react.png"
import redmine from "./images/redmine.png"
import sass from "./images/sass.png"
import tailwind from "./images/tailwind.png"
import browserstack from "./images/browserstack.png"

export default function Skills() {
    return (
        <div className="bg-primary_1 w-full h-auto" id="skills">
            <div className="skill-icons-div">
                <img className="skill-icons" src={html} alt=""/>
                <img className="skill-icons" src={css} alt=""/>
            </div>

            <div className="skill-icons-div">
                <img className="skill-icons" src={react} alt=""/>
                <img className="skill-icons" src={tailwind} alt=""/>
                <img className="skill-icons" src={sass} alt=""/>
            </div>

            <div className="skill-icons-div">
                <img className="skill-icons" src={bootstrap} alt=""/>
                <img className="skill-icons" src={js} alt=""/>
                <img className="skill-icons" src={enonic} alt=""/>
                <img className="skill-icons" src={figma} alt=""/>
                <img className="skill-icons" src={postman} alt=""/>
            </div>

            <div className="skill-icons-div">
                <img className="skill-icons" src={browserstack} alt=""/>
                <img className="skill-icons" src={Optimizely} alt=""/>
                <img className="skill-icons" src={git} alt=""/>
            </div>

            <div className="skill-icons-div">
                <img className="skill-icons" src={redmine} alt=""/>
                <img className="skill-icons" src={jira} alt=""/>
            </div>
        </div>
    )
}