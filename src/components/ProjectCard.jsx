import React from 'react';
import { ArrowCircleUpRight } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const handleOpenPost = () => {
        navigate(`/projects/${project.slug}`);
    };

    return (
        <div className="flex flex-col gap-7 group cursor-pointer duration-200 hover:scale-[1.01] hover:duration-200">
            <a
                onClick={handleOpenPost}
                className="bg-white relative mx-auto w-full z-10 min-h-[300px] flex items-center"
            >
                <img src={project.image} alt="Logo" className="mx-auto" />
                <span className="overlay group-hover:hidden"></span>
            </a>
            <div>
                <h3>{project.name}</h3>
                <a onClick={handleOpenPost} className="btn project-btn">
                    See project
                    <ArrowCircleUpRight size={32} />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
