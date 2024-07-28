import React from "react";
import bootstrap from "../../assets/images/bootstrap.png"
import css from "../../assets/images/css.png"
import enonic from "../../assets/images/enonic.png"
import figma from "../../assets/images/figma.png"
import git from "../../assets/images/git.png"
import html from "../../assets/images/html.png"
import jira from "../../assets/images/jira.png"
import js from "../../assets/images/js.png"
import Optimizely from "../../assets/images/Optimizely.png"
import postman from "../../assets/images/postman.png"
import react from "../../assets/images/react.png"
import redmine from "../../assets/images/redmine.png"
import sass from "../../assets/images/sass.png"
import tailwind from "../../assets/images/tailwind.png"
import browserstack from "../../assets/images/browserstack.png"
import angular from "../../assets/images/angular.png"
import mui from "../../assets/images/mui.png"

export default function Skills() {
    return (
        <div className="bg-primary_1 w-full h-auto" id="skills">
            <div className="skill-icons-div">
                <img className="skill-icons" src={html} alt=""/>
                <img className="skill-icons" src={css} alt=""/>
            </div>

            <div className="skill-icons-div">
                <img className="skill-icons" src={react} alt=""/>
                <img className="skill-icons" src={angular} alt=""/>
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
                <img className="skill-icons" src={mui} alt=""/>
            </div>

            <div className="skill-icons-div">
                <img className="skill-icons" src={redmine} alt=""/>
                <img className="skill-icons" src={jira} alt=""/>
            </div>
        </div>
    )
}