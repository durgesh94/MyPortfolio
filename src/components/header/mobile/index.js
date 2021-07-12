import React from "react";
import "./mobile.css"

export default function Mobile({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i className="fi-rr-cross"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
                    <a href="#projects">
                        <i className="fi-rr-edit-alt option-icon"></i>Projects
                    </a>
                </div>
                <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
                    <a href="#skills">
                        <i className="fi-rr-headset option-icon"></i>Skills
                    </a>
                </div>
                <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
                    <a href="#work">
                        <i className="fi-rr-briefcase option-icon"></i>Work
                    </a>
                </div>
                <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
                    <a href="#contact">
                    <i className="fi-rr-user option-icon"></i>Contact
                    </a>
                </div>
            </div>
        </div>
    )
}