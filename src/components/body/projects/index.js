import React, { useState, useEffect } from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import Separator from "../../comman/separator";
import client from "../../../api";
import { GET_PROJECTS } from "../../../api/queries";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.request(GET_PROJECTS)
            .then(({ projectsList }) => setProjects(projectsList.items))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {loading && <div>Loading...</div>}
                {error && <div className="skills-section error-text">You’ve hit the FREE TIER API limit of 10 consecutive requests. This will reset in 120-seconds.</div>}
                {projects.length < 1 && !error && <div className="skills-section">No projects available.</div>}
                {projects && projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </div >
    )
}