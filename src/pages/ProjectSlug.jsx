import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import SitePreview from '../components/SitePreview';
import { ProjectsData } from '../data/ProjectsData';
import { useProject } from '../hooks/useProject';

const ProjectSlug = () => {
    const params = useParams();
    const [project, setProject] = useState({});

    useProject(params, ProjectsData, setProject);

    return (
        <>
            <Banner
                subtitle={project.topic}
                title={project.name}
                description={project.description}
            />
            <SitePreview imageSite={project.imageSite} url={project.url} />
        </>
    );
};

export default ProjectSlug;
