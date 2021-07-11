import React from "react";
import "./work-card.css";

export default function WorkCard({ item }) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} className="work-logo" alt={item.company} />
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <div className="work-dates">
                    <label>{item.dateOfJoining}</label> - <label>{item.dateOfLeaving}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    )
}