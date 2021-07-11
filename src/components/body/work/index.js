import React from "react";
import "./work.css";
import Separator from "../../comman/separator";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";

export default function Work() {
    return (
        <div className="work">
            <Separator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {WorkData.map((item, idx) => {
                    return <WorkCard key={idx} item={item} />
                })}
            </div>
        </div>
    )
}