import React from "react";
import "./social-login.css";
import { SocialData } from "../../data/social";

export default function SocialLogin() {
    return (
        <div className="social-contact">
            {SocialData.map((item, idx) => {
                return (
                    <a href={item.link} key={idx}>
                        <div className="social-icon-div">
                            <img src={item.icon} className="social-icon" alt={item.platform} />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}