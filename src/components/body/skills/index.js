import React, { useEffect, useState } from "react";
import "./skills.css";
import Separator from "../../comman/separator";
import SkillCard from "./skill-card";
import client from "../../../api";
import { GET_SKILLS } from "../../../api/queries";

export default function Skills() {

    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.request(GET_SKILLS)
            .then(({ skillsList }) => setSkills(skillsList.items))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="skills">
            <Separator />
            <label className="section-title">Skills</label>
            <div className="skill-container">
                {loading && <div>Loading...</div>}
                {error && <div className="skills-section error-text">You’ve hit the FREE TIER API limit of 10 consecutive requests. This will reset in 120-seconds.</div>}
                {skills.length < 1 && !error && <div className="skills-section">No skills available.</div>}
                {skills && skills.length > 0 && skills.map((item) => {
                    return (
                        <div className="skills-section" key={item.id}>
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