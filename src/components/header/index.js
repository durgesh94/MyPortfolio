import React, { useState } from "react";
import "./header.css";
import Web from "./web";
import Mobile from "./mobile";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header">
            <div className="logo">Durgesh Tambe</div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i className="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}