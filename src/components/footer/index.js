import React from "react";
import "./footer.css";
import { getMonth, getYear } from "../utils"

export default function Footer() {
    return (
        <div className="footer">
            Made with ReactJS by Durgesh @{getYear()}-{getMonth()} v1.0.5
        </div>
    )
}