import React from "react";
import "./about.css"

export default function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello there, I am
                    <br /><span className="info-name">Durgesh Tambe</span>,
                    <br />I love experimenting with the web.
                </div>
                <div className="about-photo">
                    <img src={require("../../../assets/durgesh.jpg").default} alt="Durgesh" className="picture" />
                </div>
            </div>
            <div className="about-bottom">

            </div>
        </div>
    )
}