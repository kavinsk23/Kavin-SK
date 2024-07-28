import React from "react";

export default function Achievements() {
    return(
        <div className="flex bg-primary_1 justify-evenly py-5 xl:py-10">
            <div className="achievements-div">
                <h1 className="achievements-num">10+</h1>
                <h3 className="achievements-text">Self Projects</h3>
            </div>
            <div className="achievements-div">
                <h1 className="achievements-num">3</h1>
                <h3 className="achievements-text">Advanced Certificates</h3>
            </div>
            <div className="achievements-div">
                <h1 className="achievements-num">12+</h1>
                <h3 className="achievements-text">Months Experience</h3>
            </div>
        </div>
    )
}