import React from "react";
import "./projects.css";
import { ProjectsData } from "../../../assets/data/projects";
import ProjectCard from "./project-card";
import Separator from "../../comman/separator";

export default function Projects() {
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {ProjectsData.map((project, idx) => {
                    return <ProjectCard key={idx} project={project} />
                })}
            </div>
        </div >
    )
}