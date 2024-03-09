import React from "react";
import Typewriter from "typewriter-effect"
import "./about.css"
import SocialLogin from "../../comman/social-login";

export default function About() {

    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello there, I am
                    <br /><span className="info-name">Durgesh Tambe</span>,
                    <span>
                        <br />I love experimenting with the <Typewriter
                            options={{
                                strings: ['Web.', 'Mobile.'],
                                autoStart: true,
                                loop: true,
                                delay: 300,
                                pauseFor: 2500
                            }}
                        />
                    </span>
                </div>
                <div className="about-photo">
                    <img src={require("../../../assets/images/durgesh-2.png")} alt="Durgesh" className="picture" />
                </div>
            </div>
            <div className="about-bottom">
                <SocialLogin />
            </div>
        </div>
    )
}