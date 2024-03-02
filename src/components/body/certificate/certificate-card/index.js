import React from "react";
import "./certificate-card.css";

export default function CertificateCard({ item }) {
    return (
        <div className="cert-card">
            <img src={item.icon} className="cert-logo" alt={item.platform} />
            <div className="cert-info">
                <label className="cert-title">{item.title}</label>
                <label className="cert-platform">{item.platform}</label>
                <div className="cert-dates">
                    <label>Issued {item.issuedDate}</label>
                </div>
                <div className="cert-desc">
                    {item.skills && item.skills.map((item, idx) => {
                        return (<span>{item}, </span>)
                    })}
                </div>
                <div className="cert-desc">
                    <a style={{ display: "table-cell" }} href={item.url} target="_blank">Show Certificate</a>
                </div>
            </div>
        </div>
    )
}