import React from "react";
import "./project-card.css";

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo &&
                        <a className="project-links" href={project.demo} target="_blank" rel="noreferrer">
                            <div className="link-button">
                                <i className="fi-rr-globe"></i>Demo
                            </div>
                        </a>
                    }
                    {project.github &&
                        <a className="project-links" href={project.github} target="_blank" rel="noreferrer">
                            <div className="link-button">
                                <i className="devicon-github-original colored"></i>Github
                            </div>
                        </a>
                    }
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag, idx) => {
                        return <label key={idx} className="tag">{tag}</label>
                    })}
                </div>
            </div>
            <img src={project.images} className="project-photo" alt={project.name} alt="projects"/>
        </div>
    )
}