import React from "react";
import "./web.css"

export default function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                    <i className="fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                    <i className="fi-rr-headset option-icon"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    <i className="fi-rr-briefcase option-icon"></i>Work
                </a>
            </div>
            <div className="web-option">
                <a href="#certificates">
                    <i className="fi fi-rr-diploma option-icon"></i>Certifications
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i className="fi-rr-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}