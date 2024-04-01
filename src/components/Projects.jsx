import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import TitleLine from './TitleLine';
import { ProjectsData } from '../data/ProjectsData';

const Projects = ({
    subtitle = true,
    title = 'Some of my favorite projects',
    button = true,
    amountOfProjects = null,
}) => {
    const hasDefaultTitle = title === 'Some of my favorite projects';
    const justifyStyle = hasDefaultTitle ? 'justify-between' : 'justify-center';

    let projectsToRender = ProjectsData;

    if (amountOfProjects !== null && amountOfProjects < ProjectsData.length) {
        projectsToRender = ProjectsData.slice(0, amountOfProjects);
    }

    return (
        <div className="bg-grey py-24" data-aos="fade-down">
            <div className="container">
                <div className={`flex ${justifyStyle} items-center pb-24`}>
                    <div>
                        {subtitle && <TitleLine title="Recent Work" />}
                        <h2
                            className={
                                hasDefaultTitle ? 'max-w-xl mt-4' : 'mt-4'
                            }
                        >
                            {title}
                        </h2>
                    </div>
                    {button && (
                        <Link to="/projects" className="btn h-max">
                            View All Projects
                        </Link>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-x-5 gap-y-12">
                    {projectsToRender.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
