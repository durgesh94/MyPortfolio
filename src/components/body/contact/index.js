import React from "react";
import "./contact.css";
import Separator from "../../comman/separator";
import SocialLogin from "../../comman/social-login";

export default function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform.</p>
                    <p className="contact-paragraph">
                        <img src={require("../../../assets/icons/phone.png")} className="contact-phone" alt="phone" />
                        +91 90969 78887
                    </p>
                    <SocialLogin />
                </div>
                <div className="contact-download">
                    <a download href={require("../../../assets/resumes/durgesh_v2.1.0.pdf")}>
                        <i className="fi-rr-download"></i>{'  '}Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}