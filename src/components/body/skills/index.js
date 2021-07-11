import React from "react";
import "./skills.css";
import Separator from "../../comman/separator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";

export default function Skills() {
    return (
        <div className="skills">
            <Separator />
            <label className="section-title">Skills</label>
            <div className="skill-container">
                {SkillsData.map((item, index) => {
                    return (
                        <div className="skills-section" key={index}>
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill, idx) => {
                                    return <SkillCard key={idx} skill={skill} />
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}