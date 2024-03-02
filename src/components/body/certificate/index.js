import React from "react";
import "./certificate.css";
import Separator from "../../comman/separator";
import { CertificatesData } from "../../../assets/data/certificates";
import CertificateCard from "./certificate-card";

export default function Certificate() {
    return (
        <div className="certificates">
            <Separator />
            <label className="section-title">Certifications</label>
            <div className="certificate-list">
                {CertificatesData && CertificatesData.map((item, idx) => {
                    return <CertificateCard key={idx} item={item} />
                })}
            </div>
        </div>
    )
}